import fiberConnectionTpl from './fiber-connection.tpl.html';
import fiberConnectionCtrl from './fiber-connection.controller.js';

import FiberGraph from '../../fiber-graph/fiberGraph.js';


const fiberConnectionDirective = () => {
	return {
		restrict:'AE',
		template: fiberConnectionTpl,
		controller: fiberConnectionCtrl,
		link:($scope)=>{

			const fiberGraph = new FiberGraph();
			const container = 'fiber-container';

			const data = {
				boards:[
					{   
						id:1,
						x:50,
						y:50,
						shape:'triangle',
						name:'otv'
					},
					{
						id:2,
						x:90,
						y:156,
						shape:'rect',
						name:'rfg'
					},
					{
						id:3,
						x:100,
						y:70,
						shape:'rhomb',
						name:'wer'
					},
					
					{
						id:8,
						x:200,
						y:200,
						shape:'triangle',
						name:'wer'
					},
					
					{
						id:4,
						x:300,
						y:456,
						shape:'rect',
						name:'wer'
					},
					
					{
						id:5,
						x:600,
						y:82,
						shape:'triangle',
						name:'wer'
					},
					
					{
						id:6,
						x:176,
						y:80,
						shape:'rect',
						name:'wer'
					},
					
					{
						id:7,
						x:458,
						y:400,
						shape:'triangle',
						name:'wer'
					},
				],
				links:[
					{
						src:1,
						snk:2
					},
					{
						src:3,
						snk:2
					},
					{
						src:1,
						snk:3
					},
					{
						src:1,
						snk:4
					},
						{
						src:2,
						snk:5
					},
						{
						src:4,
						snk:6
					},
						{
						src:2,
						snk:7
					},
						{
						src:6,
						snk:3
					},
						{
						src:8,
						snk:3
					},
						{
						src:8,
						snk:1
					},

				]
			}
			

			fiberGraph.init(container,data);

		}
	}

};

export default fiberConnectionDirective;