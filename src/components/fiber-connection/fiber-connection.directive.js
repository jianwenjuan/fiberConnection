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
			const container = document.getElementById('fiber-container');

			fiberGraph.init(container);

		}
	}

};

export default fiberConnectionDirective;