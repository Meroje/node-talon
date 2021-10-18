FROM node:16.11@sha256:d6a8cd069ab740759394a9338dc4bc4b9b32b15209cccd0c7faa32d438b1076e

RUN apt-get update && apt-get install -yy libzmq3-dev

# copied from onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]