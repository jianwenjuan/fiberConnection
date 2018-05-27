class Style {
	constructor(type,name){
		this.type = type;
		this.name = name;

	}

	getStyle(){

		let style = {};
		if (this.type === 'board') {
			const boardStyle = this.stylePoor().board;
			style = boardStyle[this.name];

		} 

		if (this.type === 'link') {
			const linkStyle = this.stylePoor().link;
			style = linkStyle;
		}

		return style;


	}

	stylePoor(){
		const styleEnum = {
			'board':{
				'otv':{
						'w':34,
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
			},
			'link':{
				color: '#ccc',
				lineWidth: '1px',
			}
		}

		return styleEnum;
	}
}

export default Style;