import * as d3 from 'd3';


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
		this.width = w || document.getElementById(this.container).clientWidth;
		this.height = h || document.getElementById(this.container).clientHeight;

		const canvas = d3.select(`#${this.container}`).append('canvas')
		.attr('name',name)
		.attr('width',this.width)
		.attr('height',this.height);

		if (!this.areas[name]) {
			this.areas[name] = {
				'name':name,
				'canvas':canvas,
				'context':canvas.node().getContext('2d')
			}
		}

	}


	render() {
		this.clearRect();
		if (this.transform) {
		this.areas['static'].context.translate(this.transform.x,this.transform.y);
		this.areas['static'].context.scale(this.transform.k,this.transform.k);
		}
        
        this.areas['static'].context.save();
		const links  = this.dataCenter.links;
		if (links.length > 0) {
			links.forEach((item)=>{
					item.render(
					{   
						transform: this.transform,
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
						transform: this.transform,
						context: this.areas['static'].context
					}
				)
			});
		}

		this.areas['static'].context.restore();
	}

	clearRect() {
		this.areas['static'].context.clearRect(0,0,this.width,this.height);

	}

	refresh(reset){
		const self = this;
		const canvas = this.areas['static'].canvas;
		this.context = this.areas['static'].context;

		this.screnWidth = canvas.node().clientWidth || this.width;
		this.screenHeight = canvas.node().clientHeight || this.height;

		if (reset) {
			this.transform = d3.zoomIdentity;

			canvas.property('zoom',d3.zoomIdentity);

			canvas.call(()=>{
				self.render();
			});
		} else {
			canvas.call(()=>{
				self.render();
			});

		}

	}
}

export default View;