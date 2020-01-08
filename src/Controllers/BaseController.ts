import "reflect-metadata";
const CONTROLLER = 'Controller'
const ACTION = 'Action'
enum METHOD{
	POST = 'POST',
	GET = 'GET'
}

declare interface ActionDescription{
	method:Array<METHOD>,
	route:string,
	action:ControllerAction;
}
export default class BaseController{
	controllerName: string;
	actionList: Array<ActionDescription>;
	constructor(){
		this.controllerName = Reflect.getMetadata(CONTROLLER,Object.getPrototypeOf(this).constructor)
		this.actionList = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
		.reduce((acc:Array<ActionDescription>,item)=>{
			let ActionDescription:ActionDescription = Reflect.getMetadata( ACTION, this, item)
			ActionDescription&&acc.push(ActionDescription)
			return acc
		},[])
		// .map((item)=>Reflect.getMetadata( ACTION, this, item)).filter((v)=>v)
	}
}

const Controller = (path?: string): ClassDecorator => {
	return target => {
		if(!path){
			if(target.name.endsWith(CONTROLLER)){
				path = '/'+target.name.split(CONTROLLER)[0]
			}else{
				throw `'${CONTROLLER}':"${target.name}" has no controller path ,add controller path or endwith '${CONTROLLER}' for the class`;
			}
		}
		Reflect.defineMetadata(CONTROLLER, path, target);
	}
}

const createMappingDecorator = (method: Array<METHOD>) => (route?: string) => {
	return (target: Object, key: string | symbol, descriptor:TypedPropertyDescriptor<ControllerAction>) => {
		if(!route){
			if((key as string).endsWith(ACTION)){
				route = '/'+(key as string).split(ACTION)[0]
			}else{
				throw `'${ACTION}':"${target.constructor.name}.${(key as string)}" has no route path ,add route path or endwith '${ACTION}' for the Method`;
			}
		}
		let action = descriptor.value
	  	Reflect.defineMetadata( ACTION, {method,route,action}, target, key);
	}
}

const Get = createMappingDecorator([METHOD.GET]);
const Post = createMappingDecorator([METHOD.POST]);
const All = createMappingDecorator([METHOD.GET,METHOD.POST]);
export { Get,Post,All,Controller,METHOD }