import fiberstyle from './fiber.less';

class fiberConnectionCtrl {
	/**@ngInject */
	constructor($scope){
		this.style = fiberstyle;
		this.$scope = $scope;


	}
}

export default fiberConnectionCtrl;