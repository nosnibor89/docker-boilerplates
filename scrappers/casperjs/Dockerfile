FROM node:6.11

RUN apt-get update && apt-get install python \
    && npm install -g phantomjs casperjs \
    && python --version \
    && phantomjs --version 

WORKDIR /app

CMD ["casperjs", "casper.js"]
