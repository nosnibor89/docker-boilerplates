FROM node:6.11-alpine
ADD . /var/www/app
WORKDIR /var/www/app

RUN npm install pm2 -g


EXPOSE 1337
#Lift up command for Angular & pm2
CMD ["pm2-docker", "server.js"]

