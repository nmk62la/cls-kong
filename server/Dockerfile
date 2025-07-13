FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt install -y nginx ufw curl iproute2 iputils-ping net-tools iptables && \
    rm -rf /var/lib/apt/lists/*

RUN apt update && apt install -y nodejs npm

COPY server-81 /server-81
WORKDIR /server-81
RUN npm install && npm run build && cp -r build /var/www/server-81

COPY server-82 /server-82
WORKDIR /server-82
RUN npm install && npm run build && cp -r build /var/www/server-82

WORKDIR /

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d/ /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
