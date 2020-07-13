FROM node:14.4.0-alpine
RUN npm install express ejs body-parser --save
RUN npm i -g nodemon --save
RUN npm install axios locus
RUN npm install mongoose
RUN npm install method-override
RUN npm install express-sanitizer
WORKDIR /app
RUN npm init -y
CMD [ "nodemon" ]
