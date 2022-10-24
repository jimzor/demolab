# FROM nginx
# COPY src/ /usr/share/nginx/html
# COPY conf/default.conf /etc/nginx/conf.d/default.conf

FROM node

WORKDIR /app

COPY package.json .

COPY src/ .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]