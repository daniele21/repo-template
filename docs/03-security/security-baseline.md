# Security Baseline

## Defaults

- least privilege access
- validated inputs and constrained outputs
- secrets stored outside code and logs
- encryption in transit and at rest where supported by the platform
- explicit review of auth/authz changes

## Review Triggers

- new external entrypoints
- new admin capabilities
- new storage of sensitive data
- new vendor or dependency with security implications
- changes to logging or monitoring that may expose sensitive values
