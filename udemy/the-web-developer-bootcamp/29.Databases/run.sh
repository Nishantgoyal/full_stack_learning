#!/bin/bash

project_name="databases"
docker build -t ${project_name} .
docker run --rm -it --network=yelpcamp -p 8080:8080 --name ${project_name} -v `pwd`:/app ${project_name}
