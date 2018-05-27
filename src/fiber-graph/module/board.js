
import Node from './node.js';

class Board extends Node{
	constructor(attr,style,shape){
		super(attr,style,shape);
		this.name = attr.name;
		this.x = attr.x;
		this.y = attr.y;
	}

	render(options){
		this.shape.render(options);
	}




}

export default Board;