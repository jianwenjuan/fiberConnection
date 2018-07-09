
import * as d3 from 'd3';

class Handler{
	constructor(container,datacenter,view){
		this.container = container;
		this.datacenter = datacenter;
		this.view = view;
	}

	init(){
		this.bindEvent();

	}

	bindEvent() {
		const ts = this;
		const canvas = this.view.areas['static'].canvas;

		canvas.on('click', ()=>{
			console.log('1');
		});

        // 设置缩放范围
		const zoom = d3.zoom()
					.scaleExtent([1, 4]);

		canvas.call(zoom.on('zoom', () => {
			ts.view.transform = d3.event.transform;
			ts.view.refresh();
			console.log(this.view.transform);
		}));





	}

}


export default Handler;