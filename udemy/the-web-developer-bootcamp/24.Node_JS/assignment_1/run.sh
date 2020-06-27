#!/bin/bash

project_name="echo"
docker build -t ${project_name} .
docker run --rm --name ${project_name} ${project_name}
