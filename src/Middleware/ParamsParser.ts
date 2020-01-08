import * as Koa from "koa";
declare module "koa" {
    interface Request {
        params?: any;
	}
	interface Response {
		result?:Result
	}
}
interface Result{
	code:number,
	message:string,
	data:object,
}
export default function ParamsParser():Koa.Middleware {
	return async (ctx,next)=>{
		if(ctx.request.method === 'GET'){
			ctx.request.params = JSON.parse(JSON.stringify(ctx.request.query))
		}else if(ctx.request.method === 'POST'){
			ctx.request.params = ctx.request.body
		}
		await next()
		ctx.body =  ctx.response.result
	}
}