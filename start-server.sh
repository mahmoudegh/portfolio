#!/usr/bin/env sh
set -eu

port="${1:-8000}"
printf 'Starting the portfolio at http://localhost:%s ...\n' "$port"
python3 -m http.server "$port"
