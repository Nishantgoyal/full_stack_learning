#!/bin/bash

docker run -it --name postgresDB --rm --net=host -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=todoapp  postgres:12.3-alpine
