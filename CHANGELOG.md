# Changelog

All notable changes to projects created from this template should be recorded here.

## Unreleased

### Added

- Initial B2B SaaS repo template structure
- Added a demo walkthrough in `README.md` and a dedicated architecture reference in `docs/01-architecture/golden-example.md`.
- Added stronger UX/UI governance docs, a dedicated `ui_system_reviewer` subagent, and expanded review rules for semantic tokens and theme parity.
- Added UI primitive and pattern catalogs, a review checklist, and a `ui:check-system` gate to catch design-system drift in CI.

### Changed

- Replaced machine-specific absolute links with portable relative links across operating and privacy docs.
- Updated GitHub Actions workflows from Node 25 to Node 24 LTS.
- Refactored `packages/ui` from a flat token file to primitive plus semantic theme tokens, added light and dark theme support, and updated the starter button helper to consume semantic tokens.

### Fixed

- Closed repository portability issues caused by absolute local markdown links.

### Security

- None yet
