#!/bin/bash

docker network rm yelpcamp
docker network create --subnet=192.168.2.0/24 yelpcamp

docker run --rm --network=yelpcamp --ip 192.168.2.2 --name mongo mongo:4.2.8
# docker run --rm --network=yelpcamp --ip 192.168.2.2 --name mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:4.2.8