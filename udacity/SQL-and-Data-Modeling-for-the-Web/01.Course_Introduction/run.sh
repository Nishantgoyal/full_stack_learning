#!/bin/bash

# docker run -d --rm --net=host --name mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:4.2.8

app="intro"
docker build -t ${app} .

# Background
# docker run --rm -d --net=host --name=${app} -v `pwd`/code:/usr/src/app ${app}

# Foreground
docker run --rm --net=host --name=${app} -v `pwd`:/usr/src/app ${app}

# Testing command
# docker run --rm -it --net=host --name=${app} -v `pwd`/code:/usr/src/app ${app} bash
