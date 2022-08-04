FROM nginx

COPY ./conf/nginx.local.conf /etc/nginx/nginx.conf
COPY ./conf/ /etc/nginx/
