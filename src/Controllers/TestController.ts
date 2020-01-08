import BaseController, { Get, Post ,All,Controller} from "./BaseController"
@Controller('test')
export default class TestController extends BaseController{
	constructor(){
		super()
			// controller.prototype
	}
	@Get()
	hellowAction(params: any):ControllerResult {
		console.log(params)
		return {
			code:111,
			message:'string',
			data:{as:'asd'},
		}
	}
}
