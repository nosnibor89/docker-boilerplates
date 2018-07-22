# Delete all docker container 
docker rm $(docker ps -a -q)
"Docker Containers Deleted"

# Delete containers according to pattern
docker ps -a | grep "pattern" | awk '{print $3}' | xargs docker r
"Docker Containers Deleted"

#Delete containers by filter
docker rm $(docker ps -a -f status=exited -f status=created -q)

# Stop all containers
docker stop $(docker ps -a -q)

#Delete all docker Images
docker rmi $(docker images -a -q)
"Docker Images Deleted"

#Delete images acording to pattern
docker images | grep "pattern" | awk '{print $1}' | xargs docker rm

#Delete all networks
docker rm $(docker network ls -q)

#Delete all docker Volumes
docker volume rm $(docker volume ls -q)
"Docker Volumes Deleted"
