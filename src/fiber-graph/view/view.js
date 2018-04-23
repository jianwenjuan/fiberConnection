import d3 from 'd3';

class View{
	construct(container,dataCenter){

		this.container = container;
		this.dataCenter = dataCenter || {};

		this.areas = [];

	}

	initArea(){

		this.addCanvas('static');
	}


	addCanvas(name, w, h){
		const width = w || this.container.width();
		const height = h || this.container.height();

		const canvas = d3.select(this.container[0]).append('canvas')
		.attr('name',name)
		.attr('width',width)
		.attr('height',height);

		if (!this.areas[name]) {
			this.areas[name] = {
				'name':name,
				'canvas':canvas,
				'context':canvas.node().getContext('other context')
			}
		}

	}
}

export default View;