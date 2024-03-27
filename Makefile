include .env
br:
	docker build -f ./node/Dockerfile -t npm-node .
	docker run -v ./node/:/app/ -p ${NODE_PORT}:${NODE_PORT} -d --name npm-node npm-node
	
ennj:
	docker exec -it npm-node /bin/bash

exe:
	docker exec npm-node node src/index.js

clean:
	docker stop npm-node
	docker container rm -f npm-node
	docker rmi -f npm-node