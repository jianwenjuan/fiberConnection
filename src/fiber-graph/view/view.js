import * as d3 from 'd3';
import Util from '../utils/util';


class View {
	constructor(container, dataCenter) {

		this.container = container;
		this.dataCenter = dataCenter || {};

		this.areas = [];

		this.selectList = [];

	}

	/**
	 * 初始化绘制画布
	 */
	initArea() {
		this.addCanvas('static');
	}

    /**
	 * 添加画布
	 * @param {*} name 
	 * @param {*} w 
	 * @param {*} h 
	 */
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

	/**
	 * 最佳视图
	 */

	fitViewInarea() {
		const bounds = Util.calGeoBoundofNodeArr(this.dataCenter.boards);
		const boundsW = bounds.maxx - bounds.minx;
		const boundsH = bounds.maxy - bounds.miny;

		const center = {
			X: bounds.minx + boundsW / 2,
			Y: bounds.miny + boundsH / 2
		}

		const dx = (this.width / 2) - center.X;
		const dy = (this.height / 2) - center.Y;

		this.transform = d3.zoomIdentity;

		this.transform = this.transform.translate(dx,dy);

		this.areas['static'].canvas.property('_zoom',this.transform);


		this.render();
	}

    /**
	 * 绘制
	 */
	render() {
		this.context = this.areas['static'].context;
		this.context.save();
		this.context.clearRect(0, 0, this.width, this.height);
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


	/**
	 * 重置
	 * @param {} reset 
	 */
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

    /**
	 * 获取拖拽的board
	 */
	dragSubject() {
		const x = this.transform.invertX(d3.event.x);
		const y = this.transform.invertY(d3.event.y);

		for (let i = this.dataCenter.boards.length - 1; i > 0; i--) {
			const board = this.dataCenter.boards[i];
			if (Util.pointInPolygon(x, y, board.shape.getRect())) {
				console.log(board);
				return board;
			}

		}

		return null;

	}


	/**
	 * 拖拽
	 */
	dragged() {
		d3.event.subject.x += d3.event.dx / this.transform.k;
		d3.event.subject.y += d3.event.dy / this.transform.k;


		console.log(d3.event.subject);
	}
}

export default View;