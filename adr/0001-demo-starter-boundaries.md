# Demo Starter Boundaries

## Status

- accepted

## Context

The repository originally provided strong governance and documentation but no runnable technical starter. New projects still had to invent the first executable structure themselves.

## Decision

Add a minimal zero-dependency starter made of:

- `apps/api` for a runnable API entrypoint
- `packages/contracts` for shared validation and defaults
- `packages/domain` for business logic
- `tests/` for unit and integration coverage

The demo feature is tenant settings, chosen because it shows multi-tenant boundaries and privacy-by-default behavior without requiring infrastructure.

## Alternatives Considered

- Pure documentation-only template
- Framework-specific starter such as Next.js or Fastify

## Tradeoffs

- Benefits: immediate runnable path, lower ambiguity, real CI commands, low setup cost
- Costs: less framework sophistication, no static typechecker dependency
- Risks: users may mistake the demo starter for a production-ready stack

## Consequences

- Immediate: the template becomes executable and testable in a clean environment
- Long-term: projects can replace the starter app while keeping the documented layering model
