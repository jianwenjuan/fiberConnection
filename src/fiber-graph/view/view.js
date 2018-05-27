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
				'context':canvas.node().getContext('2d')
			}
		}

	}


	render() {
		const links  = this.dataCenter.links;

		if (links.length > 0) {
			links.forEach((item)=>{

					item.render(
					{
						context: this.areas['static'].context
					}
				)

			})
		}


		const boards = this.dataCenter.boards;

		if (boards.length > 0) {
			boards.forEach((item)=>{

				item.render(
					{
						context: this.areas['static'].context
					}
				)

			});
		}



	}
}

export default View;