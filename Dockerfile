# FROM node
# WORKDIR /userGKE
# COPY package*.json ./
# RUN npm install
# COPY . .
# # ENV DB_HOST=localhost
# # ENV DB_USER=root
# # ENV DB_PASSWORD=gilda
# # ENV DB_NAME=user
# # ENV DB_PORT=3306
# #ENV DB_PORT=3000
# ENV MYSQL_HOST default
# ENV MYSQL_USER default
# ENV MYSQL_PASSWORD default
# ENV MYSQL_DATABASE default 

# ENV NODE_DOCKER_PORT=8080  
# EXPOSE 8080
# CMD ["npm","start"]

FROM node
WORKDIR /userGKE
COPY . .
RUN npm install
ENV MYSQL_HOST default
ENV MYSQL_USER default
ENV MYSQL_PASSWORD default
ENV MYSQL_DATABASE default   
EXPOSE 2000
CMD ["npm","start"]