
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
		
		// 初始化数据中心
		this.dataCenter = new DataCenter(options);
	   
		// 初始化视图中心
		this.view = new View(container, this.dataCenter);

		this.view.initArea();
		
        // 初始化事件中心
		this.handler = new Handler(container,this.dataCenter,this.view);
		this.handler.init();
	}
	
	/**
	 * 加载数据
	 * @param {} data 
	 */
	loadData(data) {
		this.dataCenter.loadData(data);
		this.view.render();
	}
}

export default FiberGraph;