#!/bin/sh

set -e

rm -f tmp/pids/server.pid
bundle install
bin/rails server -p 3000 -b 0.0.0.0
