import BaseController, { Get, Post ,All,Controller} from "./BaseController"
@Controller('test')
export default class TestController extends BaseController{
	constructor(){
		super()
			// controller.prototype
	}
	@All()
	hellowAction(params:object){
		console.log(params)
	}
}