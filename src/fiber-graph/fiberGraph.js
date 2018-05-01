
import View from './view/view.js';
import DataCenter from './data-center/dater-center.js';
import Handler from './handler/handler.js';

class FiberGraph {
	constructor(){

		this.view = null;
		this.dataCenter = null;
		this.handler = null;

	}

	init(container,options){

		this.dataCenter = new DataCenter(options);

		this.view = new View(container, this.dataCenter);

		this.view.initArea();


	}
}

export default FiberGraph;