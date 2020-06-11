FROM node:13.12.0-alpine

# Creates the directory and changes working directory into it
RUN mkdir /rezzemay-web
WORKDIR /rezzemay-web

# ENV PATH /rezzemay-web/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent
# RUN npm install react-scripts@3.2.0 -g --silent

COPY . ./

EXPOSE 3001
CMD ["npm", "start","-a", "localhost", "-p", "3001"]