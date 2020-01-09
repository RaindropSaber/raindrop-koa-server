import Koa from 'koa';
import Router from './Manager/RouterManager'
import koaBodyparser from 'koa-bodyparser';
import cors from 'koa2-cors'
import sslify from 'koa-sslify'
import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'

const app = new Koa();
app.use(cors());
app.use(koaBodyparser());
// app.use(sslify({port:3001}));

app.use(new Router('/api').routes())


let key = path.resolve(__dirname, '../openssl/server.key');
let cert = path.resolve(__dirname, '../openssl/server.cert');
const options = {
	key: fs.readFileSync(key,"utf8"),
	cert: fs.readFileSync(cert,"utf8")
}
http.createServer(app.callback()).listen(80);
https.createServer(options,app.callback()).listen(443);