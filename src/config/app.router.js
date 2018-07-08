
/**@ngInject */
export default function routing($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
        enable:true,
        requireBase:false}
    );
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/fiber');
    $stateProvider
        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('fiber', {
            url: '/fiber',
            template: '<fiber-connection></fiber-connection>'
        })
}