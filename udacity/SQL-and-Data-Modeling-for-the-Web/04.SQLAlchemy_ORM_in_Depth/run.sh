#!/bin/bash

app="interact_with_db"

docker build -t ${app} .

docker run --rm -it --net=udacity_fullstack -p 8080:8080 --name=${app} -v `pwd`:/usr/src/app ${app}
