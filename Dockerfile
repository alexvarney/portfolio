FROM node:latest

#Create app directory
WORKDIR /usr/src/app

#Bundle app source
RUN git clone https://github.com/alexvarney/portfolio.git .

#Build the client app
RUN npm install && npm run build

#Run the app
CMD ["serve", "-s", "build"]