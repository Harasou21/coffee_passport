#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
# rm -f /coffee_passport/pids/server.pid  mysql8.0の設定
rm -f /coffee_passport/tmp/pids/server.pid
# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"