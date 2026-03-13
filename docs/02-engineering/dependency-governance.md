# Dependency Governance

Adopt dependencies deliberately. Every new package or vendor should have an owner, a purpose, and an exit story.

## Required Checks

- clear business or engineering need
- maintenance health is acceptable
- license is acceptable for commercial use
- security review is completed
- privacy impact is known if the dependency handles data
- runtime and bundle cost are understood
- replacement or removal path is understood

## Policy

- avoid overlapping libraries without a real reason
- avoid dependencies that solve only template-scale problems
- document major dependency decisions in ADRs when the impact is long-lived
