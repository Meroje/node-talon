FROM node:0.12

RUN apt-get update && apt-get install -yy libzmq3-dev

# copied from onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]