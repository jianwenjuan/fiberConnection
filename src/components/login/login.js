
import tem from './login.tpl.html';
import loginCtrl from './login.controller.js';
import './login.less';


export default angular.module('login', [])
    .component('login', {
        template: tem,
        controller: loginCtrl,
        controllerAs: 'ctrl'
    })
    .name;