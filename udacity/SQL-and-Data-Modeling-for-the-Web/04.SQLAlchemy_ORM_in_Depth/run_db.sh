#!/bin/bash

docker network create --subnet 192.168.1.0/24 udacity_fullstack
docker run -it --name postgresDB --ip 192.168.1.24 --rm --net=udacity_fullstack -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=todoapp  postgres:12.3-alpine
