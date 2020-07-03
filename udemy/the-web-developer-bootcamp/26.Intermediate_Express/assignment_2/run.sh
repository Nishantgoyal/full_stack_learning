#!/bin/bash

project_name="post_requests"
docker build -t ${project_name} .
docker stop ${project_name}
# docker run --rm -p 8080:8080 --name ${project_name} -v `pwd`:/app ${project_name}
# docker run --rm -d -p 8080:8080 --name ${project_name} -v `pwd`:/app ${project_name}
docker run --rm -it -p 8080:8080 --name ${project_name} -v `pwd`:/app ${project_name} sh
