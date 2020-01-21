import BaseController, { Get, Post ,All,Controller} from "./BaseController"
@Controller('test')
export default class TestController extends BaseController{
	constructor(){
		super()
			// controller.prototype
	}
	@All()
	hellowAction(params: any):ControllerResult {
		console.log(params)
		return {
			code:0,
			message:'success',
			data:params,
		}
	}
	@All()
	errorAction(params: any):ControllerResult {
		return {
			code:10001,
			message:'fail',
			data:params,
		}
	}
}
