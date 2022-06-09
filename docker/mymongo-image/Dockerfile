# Step1 -> Get Base Image
FROM alpine

# Step2 -> Install a software : mongo
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

# Step2.5 -> Configure the software
VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017

# Step3 -> Set Default Commands
CMD ["mongod"]