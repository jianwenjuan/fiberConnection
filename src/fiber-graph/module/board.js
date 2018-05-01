import Style from '../style/style-poor.js';

class Board{
	constructor(options){
		this.attr = options;
		this.id = options.id;
		this.x = options.x;
		this.y = options.y;
		this.name = options.name;
		this.type = 'board';

		this.shape = options.shape;


		const styleObj = new Style(this.type,options);
		const style = styleObj.getStyle();
		this.w = style.w;
		this.h = style.h;
		this.color = style.color;

	}

	render(){

	}


	// 获取坐标
	getPositon(){

	}


}

export default Board;