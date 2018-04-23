import login from './login/login';
import fiber from './fiber-connection/fiber-connection.js';

export default angular.module('components', [
    login,
    fiber,
]).name;
