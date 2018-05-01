class Style {
	constructor(type,options){
		this.type = type;
		this.options = options;

	}

	getStyle(){

		let style = {};
		if (this.type === 'board') {
			const boardStyle = this.stylePoor().board;
			style = boardStyle[this.options.name];

		}

		return style;


	}

	stylePoor(){
		const styleEnum = {
			'board':{
				'otv':{
						'w':30,
						'h':50,
						'color':'red',
					},
					'rfg':{
						'w':30,
						'h':50,
						'color':'blue',
					},
					'wer':{
						'w':30,
						'h':50,
						'color':'pink',
					}
			}
		}

		return styleEnum;
	}
}

export default Style;