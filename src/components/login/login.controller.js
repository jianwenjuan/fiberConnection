
class loginCtrl {
    constructor($state) {
        this.$state = $state;
    }
    login() {
        this.showlogin=true;
        this.$state.go('home');
    }
}
loginCtrl.$inject = ['$state'];
export default loginCtrl