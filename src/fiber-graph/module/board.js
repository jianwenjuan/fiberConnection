
import Node from './node.js';

class Board extends Node{
	constructor(options){
		super(options);
		this.name = options.name;
		this.x = options.x;
		this.y = options.y;


	}

	render(options){
		this.shape.render(options);

	}


}

export default Board;