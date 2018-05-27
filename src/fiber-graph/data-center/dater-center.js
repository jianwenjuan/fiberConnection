import Board from '../module/board.js';
import Link from '../module/link.js';
import Style from '../style/style-poor.js';

class DataCenter{
	constructor(options){
		this.options = options;

		this.boards = [];
		this.links = [];

		this.boardMap = {};
		this.linkMap = {};


	}

	initData(){

		if (this.options.boards && this.options.boards.length) {
			const boards = this.options.boards;
			for (let i = 0; i < boards.length; i++) {

				const styleObj = new Style('board',boards[i].name);
				const style = styleObj.getStyle();

				const boardObj = new Board(boards[i],style,boards[i].shape);			
				this.boardMap[boards[i].id] = boardObj;
				this.boards.push(boardObj);
			}

		}

		if (this.options.links && this.options.links.length) {
			const links = this.options.links;
			for (let j = 0; j < links.length; j++) {
				const styleObj = new Style('link',links[j].name);
				const style = styleObj.getStyle();
				const linkObj = new Link(links[j],style,'line');
			
				linkObj.id = `${links[j].src}_${links[j].snk}`;
				linkObj.srcX = this.boardMap[links[j].src].x;
				linkObj.srcY = this.boardMap[links[j].src].y;
				linkObj.snkX = this.boardMap[links[j].snk].x;
				linkObj.snkY = this.boardMap[links[j].snk].y;
				
				this.linkMap[`${links[j].src}_${links[j].snk}`] = linkObj;

				this.links.push(linkObj);
			}
		}

	}
}

export default DataCenter;