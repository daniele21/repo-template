import http from "node:http";
import type { AddressInfo } from "node:net";
import { createApp } from "./app.ts";
import { createInMemoryTenantSettingsRepository } from "./repository/in-memory-tenant-settings-repository.ts";

const DEFAULT_PORT = 3000;
const MAX_PORT_FALLBACKS = 10;
const app = createApp(createInMemoryTenantSettingsRepository());

export interface PortCandidateInput {
  requestedPort: number;
  hasExplicitPort: boolean;
}

export interface StartupErrorInput extends PortCandidateInput {
  error: NodeJS.ErrnoException | Error | null | undefined;
}

export interface StartedApiServer {
  server: http.Server;
  port: number;
}

export function createServer(): http.Server {
  return http.createServer(async (req, res) => {
    try {
      const response = await app(req);
      res.writeHead(response.statusCode, response.headers);
      res.end(response.body);
    } catch (error) {
      res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
      res.end(
        JSON.stringify(
          {
            error: "Internal server error",
            message: error instanceof Error ? error.message : "Unknown error"
          },
          null,
          2
        )
      );
    }
  });
}

export function getPortCandidates({ requestedPort, hasExplicitPort }: PortCandidateInput): number[] {
  if (hasExplicitPort) {
    return [requestedPort];
  }

  return Array.from({ length: MAX_PORT_FALLBACKS }, (_, index) => requestedPort + index);
}

export function createStartupErrorMessage({
  error,
  requestedPort,
  hasExplicitPort
}: StartupErrorInput): string {
  if (error?.code === "EADDRINUSE") {
    if (hasExplicitPort) {
      return `Port ${requestedPort} is already in use. Choose another port, for example: PORT=${requestedPort + 1} pnpm run dev`;
    }

    return `No free port found between ${requestedPort} and ${requestedPort + MAX_PORT_FALLBACKS - 1}. Set PORT to an available value and run pnpm run dev again.`;
  }

  return error instanceof Error ? error.message : "Unknown startup error";
}

export async function startApiServer({
  requestedPort = DEFAULT_PORT,
  hasExplicitPort = false
}: Partial<PortCandidateInput> = {}): Promise<StartedApiServer> {
  const portCandidates = getPortCandidates({ requestedPort, hasExplicitPort });
  let lastError: NodeJS.ErrnoException | Error | null = null;

  for (const port of portCandidates) {
    const server = createServer();

    try {
      await listen(server, port);

      if (port !== requestedPort) {
        console.warn(`Port ${requestedPort} was busy. Server started on http://localhost:${port} instead.`);
      } else {
        console.log(`API server listening on http://localhost:${port}`);
      }

      return { server, port };
    } catch (error) {
      lastError = error as NodeJS.ErrnoException | Error;

      if (error?.code !== "EADDRINUSE" || hasExplicitPort) {
        break;
      }
    }
  }

  throw new Error(
    createStartupErrorMessage({
      error: lastError,
      requestedPort,
      hasExplicitPort
    })
  );
}

function listen(server: http.Server, port: number): Promise<http.Server> {
  return new Promise((resolve, reject) => {
    const onError = (error: NodeJS.ErrnoException) => {
      cleanup();
      reject(error);
    };

    const onListening = () => {
      cleanup();
      resolve(server);
    };

    const cleanup = () => {
      server.off("error", onError);
      server.off("listening", onListening);
    };

    server.once("error", onError);
    server.once("listening", onListening);
    server.listen(port);
  });
}

if (process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url) {
  const hasExplicitPort = typeof process.env.PORT === "string" && process.env.PORT.trim() !== "";
  const requestedPort = Number(process.env.PORT ?? DEFAULT_PORT);

  startApiServer({ requestedPort, hasExplicitPort }).catch((error) => {
    console.error(error instanceof Error ? error.message : "Unknown startup error");
    process.exitCode = 1;
  });
}
