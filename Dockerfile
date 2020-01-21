FROM node:13
WORKDIR /usr/src/app
EXPOSE 80 443
COPY . .
RUN npm install && npm run build
CMD [ "node", "./out/app.js" ]


#git
# FROM node:13
# WORKDIR /usr/src/app/
# RUN git clone -b test https://github.com/RaindropSaber/raindrop-koa-server.git myServer
# RUN cd myServer && npm install && npm run build
# EXPOSE 80 443
# CMD [ "node", "./myServer/out/app.js" ]