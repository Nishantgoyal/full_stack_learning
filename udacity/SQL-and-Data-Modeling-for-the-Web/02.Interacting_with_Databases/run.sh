#!/bin/bash

app="interact_with_db"

docker build -t ${app} .

docker run --rm -it --net=host --name=${app} -v `pwd`:/usr/src/app ${app}
