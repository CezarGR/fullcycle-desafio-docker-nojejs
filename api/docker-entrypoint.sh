#!/bin/bash

# RUN MIGRATE
npm run migrate

# START SERVECE
node --watch index.js localhost 3000