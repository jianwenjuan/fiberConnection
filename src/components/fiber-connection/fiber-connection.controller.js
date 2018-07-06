import fiberstyle from './fiber.less';

class fiberConnectionCtrl {
	constructor($scope){
		this.style = fiberstyle;
		this.$scope = $scope;


	}
}

fiberConnectionCtrl.$injector = ['$scope'];

export default fiberConnectionCtrl;