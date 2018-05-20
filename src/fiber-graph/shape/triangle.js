import Rect from './rect.js';

class Triangle extends Rect{
	constructor(options){
		super(options);


	}

	getRect(){
		return [
			{
				x: this.x - (this.w / 2),
				y: this.y - (this.h / 2)
			},
			{
				x: this.x + (this.w / 2),
				y: this.y
			},
			{
				x: this.x - (this.w / 2),
				y: this.y + (this.h / 2)
			}

		]

	}
}

export default Triangle;