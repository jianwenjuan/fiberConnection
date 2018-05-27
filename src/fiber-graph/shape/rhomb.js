import Rect from './rect.js';

class Rhomb extends Rect{
	constructor(options,style){
		super(options,style);


	}


	getRect(){
		return [
			{
				x: this.x - (this.w / 4),
				y: this.y - (this.h / 2)
			},
			{
				x: this.x + (this.w / 4),
				y: this.y - (this.h / 2)
			},
			{
				x: this.x + (this.w / 2),
				y: this.y - (this.h / 4)
			},
			{
				x: this.x + (this.w / 2),
				y: this.y + (this.h / 4)
			},
			{
				x: this.x + (this.w / 4),
				y: this.y + (this.h / 2)
			}
			,
			{
				x: this.x - (this.w / 4),
				y: this.y + (this.h / 2)
			}
			,
			{
				x: this.x - (this.w / 2),
				y: this.y + (this.h / 4)
			}
			,
			{
				x: this.x - (this.w / 2),
				y: this.y - (this.h / 4)
			}

		]

	}
}

export default Rhomb;