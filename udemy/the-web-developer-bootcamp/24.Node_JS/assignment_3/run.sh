#!/bin/bash

project_name="cat-me"
# docker build -t ${project_name} .
docker run --rm --name ${project_name} -v `pwd`:/app -v /app/node_modules ${project_name}
