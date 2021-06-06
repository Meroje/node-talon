FROM node:16.3@sha256:e36cf1bb8719551220ba8c3ee1583881e79ad040803570e0849b00b8fe009153

RUN apt-get update && apt-get install -yy libzmq3-dev

# copied from onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]