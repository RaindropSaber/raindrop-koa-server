import Koa from 'koa';
import Router from './Manager/RouterManager'
import koaBody from 'koa-body';
import koaBodyparser from 'koa-bodyparser';
import paramsParser from './Middleware/ParamsParser';

const app = new Koa();
app.use(koaBodyparser());
app.use(paramsParser());


app.use(new Router('/api').routes())


app.listen(8080);

console.log("Server running on port 8080");