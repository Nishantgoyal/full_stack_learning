#!/bin/bash

project_name="yelpcamp-v1"
docker build -t ${project_name} .
docker run --rm -it -p 8080:8080 --name ${project_name} -v `pwd`:/app ${project_name}
