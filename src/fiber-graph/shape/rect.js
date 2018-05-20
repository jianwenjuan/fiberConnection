
class Rect {
	constructor(options){
		this.x = options.x;
		this.y = options.y;

		this.w = options.style.w;
		this.h = options.style.h;

		this.color = options.style.color;




	}

	render(option){

		const ctx =  option.context;
		const rectData = this.getRect();

		ctx.fillStyle= this.color;

		ctx.save();
		ctx.beginPath();
		ctx.moveTo(rectData[0].x,rectData[0].y);
		for (var i = 1; i < rectData.length; i++) {
			ctx.lineTo(rectData[i].x,rectData[i].y);

		}
		ctx.lineTo(rectData[0].x,rectData[0].y);

		ctx.fill()

		ctx.restore();

	}


	getRect(){
		return [
			{
				x: this.x - (this.w / 2),
				y: this.y - (this.h / 2)
			},
			{
				x: this.x + (this.w / 2),
				y: this.y - (this.h / 2)
			},
			{
				x: this.x + (this.w / 2),
				y: this.y + (this.h / 2)
			},
			{
				x: this.x - (this.w / 2),
				y: this.y + (this.h / 2)
			}

		]

	}
}

export default Rect;
