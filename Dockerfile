FROM node:boron

# Create application directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

# Copy app source in container
COPY . .

RUN npm i

EXPOSE 8080

CMD [ "npm", "start" ]