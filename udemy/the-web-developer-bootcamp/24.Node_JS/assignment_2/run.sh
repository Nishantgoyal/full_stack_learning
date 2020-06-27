#!/bin/bash

project_name="average"
docker build -t ${project_name} .
docker run --rm --name ${project_name} ${project_name}
