import * as d3 from 'd3';
import Util from '../utils/util';


class View {
	constructor(container, dataCenter) {

		this.container = container;
		this.dataCenter = dataCenter || {};

		this.areas = [];

	}

	initArea() {

		this.addCanvas('static');
	}


	addCanvas(name, w, h) {
		this.width = w || document.getElementById(this.container).clientWidth;
		this.height = h || document.getElementById(this.container).clientHeight;

		const canvas = d3.select(`#${this.container}`).append('canvas')
			.attr('name', name)
			.attr('width', this.width)
			.attr('height', this.height);

		if (!this.areas[name]) {
			this.areas[name] = {
				'name': name,
				'canvas': canvas,
				'context': canvas.node().getContext('2d')
			}
		}

	}


	render() {
		this.context = this.areas['static'].context;
		this.clearRect();
		this.context.save();
		if (this.transform) {
			this.context.translate(this.transform.x, this.transform.y);
			this.context.scale(this.transform.k, this.transform.k);
		}
		const links = this.dataCenter.links;
		if (links.length > 0) {
			links.forEach((item) => {
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
			boards.forEach((item) => {
				item.render(
					{
						transform: this.transform,
						context: this.areas['static'].context
					}
				)
			});
		}

		this.context.restore();
	}

	clearRect() {
		this.areas['static'].context.clearRect(0, 0, this.width, this.height);

	}

	refresh(reset) {
		const self = this;
		const canvas = this.areas['static'].canvas;
		this.context = this.areas['static'].context;

		this.screnWidth = canvas.node().clientWidth || this.width;
		this.screenHeight = canvas.node().clientHeight || this.height;

		if (reset) {
			this.transform = d3.zoomIdentity;
			canvas.property('zoom', d3.zoomIdentity);

			canvas.call(() => {
				self.render();
			});
		} else {
			canvas.call(() => {
				self.render();
			});

		}

	}


	dragSubject() {
		const x = this.transform.invertX(d3.event.x);
		const y = this.transform.invertY(d3.event.y);

		for(let i = this.dataCenter.boards.length-1; i > 0; i--) {
			const board = this.dataCenter.boards[i];
			if(Util.pointInPolygon(x,y,board.shape.getRect())){
				console.log(board);
				return board;
			}

		}

		return null;

	}

	dragged() {
		d3.event.subject.x += d3.event.dx/this.transform.k;
		d3.event.subject.y += d3.event.dy/this.transform.k;
	}
}

export default View;