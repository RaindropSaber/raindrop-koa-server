import Router from "koa-router";
import TestController from '../Controllers/TestController';
import BaseController from "../Controllers/BaseController";
enum METHOD{
	POST = 'POST',
	GET = 'GET'
}
export default class RouterManager{
	router: Router<any, {}>;
	controllerList: Array<typeof BaseController>;
	constructor(public name:string){
		const prefix = '/' + name.match(/[A-Za-z]+/g)?.join('/')
		this.router = new Router().prefix(prefix)
		console.log(`creat Router : "${prefix}"`)
		this.controllerList = [TestController]
		this.registerController()
	}
	registerController(){
		this.controllerList.forEach((Controller)=>{
			let controller =  new Controller()
			let { actionList,controllerName } = controller
			actionList.forEach((action)=>{
				action.method.forEach( (methodEnum) => {
					let method = this.router.get
					switch (methodEnum) {
						case METHOD.GET:
							method = this.router.get.bind(this.router)
							break;
						case METHOD.POST:
							method = this.router.post.bind(this.router)
							break;
						default:
							break;
					}
					console.log(`register Controller Action : "${methodEnum} /${controllerName}${action.route}"`)
					method('/'+controllerName+action.route,(ctx,next)=>{
						let params = ctx.request.params
						action.action.call(controller,params)
						next()
					})
				});
			})
		})
	}
	routes(){
		return this.router.routes()
	}

}
// const root = new Router()
// function rootSetting(ctx:Context,next:Next){
// 	ctx.set("Accept", "application/json")
// 	next()
// }
// function checkRequ(ctx:Context,next:Next){
// 	let method = ctx.request.method
// 	let controller = ctx.params.controller
// 	let action = ctx.params.action

// 	next()
// }

// const test = new Router();
// test.post('/:controller/:action', async (ctx,next) => {
// 	let action = ctx.params.action
// 	console.log(ctx.params)
// 	ctx.body = JSON.stringify({a:"Hi TS",b:"Hi TS",c:"Hi TS",})
//   	// ctx.body = "Hi TS";
// })
// test.get('/:controller/:action', async (ctx,next) => {
// 	let action = ctx.params.action
// 	console.log(ctx.request.href)
// 	console.log(ctx.request.method)
// 	// console.log(ctx.request.url)
// 	// console.log(ctx.request.URL)
// 	// console.log(ctx.request.query)
// 	// console.log(ctx.request.querystring)
// 	ctx.body = JSON.stringify({a:"Hi TS",b:"Hi TS",c:"Hi TS",})
// })


//  root.use('/api',rootSetting,checkRequ,test.routes()).routes()
