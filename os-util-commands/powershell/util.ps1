
# Delete all docker container 
docker ps -a -q | ForEach-Object {docker rm $_}
"Docker Containers Deleted"

#Delete all docker Images
docker image ls -a -q | ForEach-Object {docker rmi $_}
"Docker Images Deleted"

#Delete all networks
docker network ls -q | ForEach-Object {docker network rm $_}