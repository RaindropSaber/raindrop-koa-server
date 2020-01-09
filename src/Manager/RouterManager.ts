import Router from "koa-router";
import TestController from '../Controllers/TestController';
import BaseController,{METHOD} from "../Controllers/BaseController";
import paramsParser from '../Middleware/ParamsParser';

export default class RouterManager{
	router: Router<any, {}>;
	controllerList: Array<typeof BaseController>;
	constructor(public name:string){
		const prefix = '/' + name.match(/[A-Za-z]+/g)?.join('/')
		this.router = new Router().prefix(prefix)
		this.router.use(paramsParser());
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
						let res = action.action.call(controller,params)
						ctx.response.result = res
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
