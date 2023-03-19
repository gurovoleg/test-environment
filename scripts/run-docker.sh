#!/bin/bash

echo ${PWD}

if [ $( docker ps -a -f name=pet-project | wc -l ) -eq 2 ]; then
  docker rm pet-project
fi
# first mount creates a volume to use dependencies from container (allows to launch without local node_modules)
# second makes host data available in container (allows to pass data from host to container)
docker run --mount type=volume,target=/app/node_modules --mount type=bind,src=${PWD},dst=/app --name home -p 8888:8888 home
