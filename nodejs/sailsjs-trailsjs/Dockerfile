FROM node:6.11-alpine
ADD . /var/www/app
WORKDIR /var/www/app

RUN npm install pm2 -g && npm install


EXPOSE 1337
#Lift up command for SailsJS & pm2 - Replace app.js with yor entry point
# CMD ["node", "app.js"]
CMD ["pm2-docker", "process.yml"]

