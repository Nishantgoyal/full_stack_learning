#!/bin/bash

# docker pull mongo:4.2.8
# docker pull node:14.4.0-alpine
project_name="app"
docker build -t ${project_name} .
echo "Stopping..."
docker stop ${project_name}
echo "Starting..."
docker run --rm -d --name ${project_name} -p 8080:8080 ${project_name}