#!/bin/bash

project_name="blog_app"
docker build -t ${project_name} .
docker run --rm -it --network=yelpcamp -p 8081:8080 --name ${project_name} -v `pwd`:/app ${project_name}
