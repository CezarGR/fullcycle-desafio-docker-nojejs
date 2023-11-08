FROM node:latest

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package.json ./
COPY package-lock.json ./

USER root

RUN npm install -g npm@latest && \
    npm install

COPY --chown=node . .

RUN chmod 777 ./docker-entrypoint.sh

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000