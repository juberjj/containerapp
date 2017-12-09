FROM alpine

# install Node and NPM - default version installed 6.10

RUN apk add --update nodejs nodejs-npm

# copy app to specific folder

COPY . /src

WORKDIR /src

# install dependencies

RUN  npm install -g nodemon

EXPOSE 3000

ENTRYPOINT ["nodemon", "./app.js"]

