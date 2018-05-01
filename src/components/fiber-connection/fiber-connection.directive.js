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
						x:80,
						y:90,
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
				]
			}
			

			fiberGraph.init(container,data);

		}
	}

};

export default fiberConnectionDirective;