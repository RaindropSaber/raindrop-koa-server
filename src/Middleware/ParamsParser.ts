import * as Koa from "koa";
declare module "koa" {
    interface Request {
        params?: any;
    }
}
export default function ParamsParser():Koa.Middleware {
	return (ctx,next)=>{
		if(ctx.request.method === 'GET'){
			ctx.request.params = JSON.parse(JSON.stringify(ctx.request.query))
		}else if(ctx.request.method === 'POST'){
			ctx.request.params = ctx.request.body
		}
		next()
	}
}