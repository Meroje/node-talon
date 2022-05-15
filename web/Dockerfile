FROM node:18.1@sha256:82f9e078898dce32c7bf3232049715f1b8fbf0d62d5f3091bca20fcaede50bf0

RUN apt-get update && apt-get install -yy libzmq3-dev

# copied from onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]