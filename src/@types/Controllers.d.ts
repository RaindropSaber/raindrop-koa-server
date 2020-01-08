
declare interface ControllerResult{
	code:number,
	message:string,
	data:object,
}
declare type ControllerAction = (parmas:any) => ControllerResult