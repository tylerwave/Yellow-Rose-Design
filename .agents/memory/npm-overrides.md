---
name: npm override verification
description: npm can retain stale vulnerable dependencies after an override is added.
---

Verify overrides against both the installed dependency tree and the lockfile; a successful incremental install does not prove the override took effect.

**Why:** npm 10 retained an old nested esbuild version after accepting a scoped override, including after a targeted update. A fresh dependency resolution applied the override correctly.

**How to apply:** During dependency remediation, check `npm ls` for invalid overridden packages and run the dependency audit before declaring success.
