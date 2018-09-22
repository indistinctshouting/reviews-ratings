FROM node:latest
RUN mkdir -p /src/reviews
WORKDIR /src/reviews
COPY . /src/reviews
RUN npm install
EXPOSE 3002
CMD [ "npm", "run", "start" ]