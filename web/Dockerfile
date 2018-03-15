FROM node:0.12@sha256:02e8e9903c8d974e8874d0144413d398a41d62f54bafec4d2cf3ac2a8501dd28

RUN apt-get update && apt-get install -yy libzmq3-dev

# copied from onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]