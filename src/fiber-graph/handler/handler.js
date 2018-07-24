
import * as d3 from 'd3';
import Util from '../utils/util';

class Handler {
	constructor(container, datacenter, view) {
		this.container = container;
		this.datacenter = datacenter;
		this.view = view;
	}

	init() {
		this.bindEvent();

	}

	bindEvent() {
		const ts = this;
		const canvas = this.view.areas['static'].canvas;

		// 拖拽
		canvas.call(d3.drag().subject(() => {
			return ts.view.dragSubject();

		}).on('start', () => {
			d3.event.sourceEvent.stopPropagation();
		}).on('drag', () => {
			ts.view.dragged();

		}).on('end', () => {

		}));

		canvas.on('click', () => {
			ts.actionSelect();

		});

		// 设置缩放范围
		const zoom = d3.zoom()
			.scaleExtent([1, 4]);

		canvas.call(zoom.on('zoom', () => {
			ts.view.transform = d3.event.transform;
			ts.view.refresh();
		})).on('dblclick.zoom', null);

	}


	/**
	 * 鼠标移入
	 */
	actionHover(x, y, type) {
		if (type === 'board') {
			for (let i = this.dataCenter.boards.length - 1; i > 0; i--) {
				const board = this.dataCenter.boards[i];
				if (Util.pointInPolygon(x, y, board.shape.getRect())) {
					board.isHover = true;
				}
			}
		}
	}


	actionSelect() {

	}

}


export default Handler;