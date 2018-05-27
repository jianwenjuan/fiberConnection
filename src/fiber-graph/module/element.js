
import Line from '../shape/line.js';
import Rect from '../shape/rect.js';
import Rhomb from '../shape/rhomb.js';
import Triangle from '../shape/triangle.js';

class Element {
	constructor(attr,style,shape){
		this.attr = attr;
		this.style = style;
		this.shape = this.getShape(shape);

	}

	render(){

	}




	getShape(shape){
		switch(shape){
			case 'triangle':
				return new Triangle(this.attr,this.style);			
			case 'line':
				return new Line(this.attr,this.style);		
			case 'rect':
				return new Rect(this.attr,this.style);	
			case 'rhomb':
				return new Rhomb(this.attr,this.style);
			default:
				return new Rect(this.attr,this.style);
		}

	}
}

export default Element;