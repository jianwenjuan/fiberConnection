import d3 from 'd3';

class View{
	constructor(container,dataCenter){

		this.container = container;
		this.dataCenter = dataCenter || {};

		this.areas = [];

	}

	initArea(){

		this.addCanvas('static');
	}


	addCanvas(name, w, h){
		const width = w || document.getElementById(this.container).clientWidth;
		const height = h || document.getElementById(this.container).clientHeight;

		const canvas = d3.select(`#${this.container}`).append('canvas')
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