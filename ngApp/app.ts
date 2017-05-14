namespace car_dealership {

    angular.module('car_dealership', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
        .state ('Search',{
          url:'/',
          templateUrl: 'ngApp/views/search.html',
          controller:car_dealership.Controllers.SearchController,
          controllerAs:'controller'
        })

        .state ('Buy', {
         url: '/buy',
         templateUrl: 'ngApp/views/buy.html',
         controller:car_dealership.Controllers.BuyController,
         controllerAs: 'controller'
         })

         .state('Sell', {
           url: '/sell',
           templateUrl: 'ngApp/views/sell.html',
           controller: car_dealership.Controllers.SellController,
           controllerAs:'controller'
         })

         .state('Trade', {
           url: '/trade',
           templateUrl:'ngApp/views/trade.html',
           controller: car_dealership.Controllers.TradeController,
           controllerAs: 'controller'
         });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
