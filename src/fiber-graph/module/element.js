
import Line from '../shape/line.js';
import Rect from '../shape/rect.js';
import Rhomb from '../shape/rhomb.js';
import Triangle from '../shape/triangle.js';

class Element {
	constructor(options){
		this.attr = options;
		this.shape = this.getShape(options.shape);

	}


	getShape(shape){
		switch(shape){
			case 'triangle':
				return new Triangle(this.attr);			
			case 'line':
				return new Line(this.attr);		
			case 'rect':
				return new Rect(this.attr);	
			case 'rhomb':
				return new Rhomb(this.attr);
			default:
				return new Rect(this.attr);
		}

	}
}

export default Element;