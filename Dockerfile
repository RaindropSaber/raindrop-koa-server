FROM node:13

WORKDIR /usr/src/app/

# COPY package*.json ./

RUN git clone -b test https://github.com/RaindropSaber/raindrop-koa-server.git myServer
RUN cd myServer && npm install && npm run build
RUN ls
# COPY . .

EXPOSE 80
EXPOSE 443
CMD [ "node", "./myServer/out/app.js" ]