import Element from './element.js';

class Link extends Element{
	constructor(attr,style,shape){
		super(attr,style,shape);

	}

	render(options){
		const link =  this;
		this.shape.render(options,link);
	}
}
export default Link;