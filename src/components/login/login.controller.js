
class loginCtrl {
    constructor($state) {
        this.$state = $state;
    }
    login() {
        this.showlogin=true;
        this.$state.go('fiber');
    }
}
loginCtrl.$inject = ['$state'];
export default loginCtrl