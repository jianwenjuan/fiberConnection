class Line{
	constructor(options,style){

		this.color = style.color;
		this.lineWidth = style.lineWidth;

		this.srcX = null;
		this.srcY = null;

		this.snkX = null;
		this.snkY = null;




	}


	render(option,link){
		const ctx =  option.context;
		
		this.transPoint(link);

		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.color;

		ctx.save();

		ctx.moveTo(this.srcX,this.srcY);
		ctx.lineTo(this.snkX,this.snkY);

		ctx.stroke();

		ctx.restore();



	}


	transPoint(link) {

		this.srcX = link.srcX;
		this.srcY = link.srcY;
		this.snkX = link.snkX;
		this.snkY = link.snkY;

	}
}

export default Line;
