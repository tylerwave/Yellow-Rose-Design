#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Restore the exact locked dependencies, including build tools.
npm ci --include=dev --no-audit --no-fund

# Verify that the merged frontend and server can be built.
npm run build
