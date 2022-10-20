---
title: Working with our code
---

> To help you get started here are some quick tips and info.

## Quick overview

The basic directory structure conventions in this repository are described here.

- Generic functional components (e.g. atomic UI components) are placed in libs/components/common.
  - Components within common are not allowed to import other components except utils and dependencies.
  - Common components can dependent on each other.
- Components containing business logic are placed in libs/components. The editor and draw prefixes are used to distinguish them.
- Data source components are placed in libs/datasource, including API requests, schemas, etc.

## Useful scripts

Some commonly used commands defined in package.json are listed here.

```bash
# Create react dependency library
pnpm run add:library

# Create react components
pnpm run add:components

# Create a data source
pnpm run add:datasource

# Run unit tests
pnpm test

# Compile or test or lint specific component
pnpm build|test|lint ${project name from workspace.json}
```
