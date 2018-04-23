import fiberstyle from './fiber.less';

class fiberConnectionCtrl {
	constructor($scope){
		this.style = fiberstyle;


	}
}

fiberConnectionCtrl.$injector = ['$scope'];

export default fiberConnectionCtrl;