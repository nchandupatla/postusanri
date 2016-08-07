import angular from 'angular'
import 'angular-ui-router'
angular.module('suchi', ["ui.router"])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home')
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: function($location) {
        console.log('in home');
      },
      controllerAs: 'homeCtrl'
    })

    $stateProvider
    .state('post', {
      url: '/post-an-ad',
      templateUrl: 'postad/postad.html',
      controller: function($location, $state, $scope) {
       $scope.savePost=function(){
       	console.log($scope.post);
       	$state.go('viewPost');
       }
      },
      controllerAs: 'postCtrl'
    })

    $stateProvider
    .state('viewPost', {
      url: '/view',
      templateUrl: 'postad/view-post.html',
      controller: function($location, $state, $scope) {
      
      },
      controllerAs: 'viewPostCtrl'
    })

     $stateProvider
    .state('viewAll', {
      url: '/view-all',
      templateUrl: 'postad/viewall.html',
      controller: function($location, $state, $scope) {
      
      },
      controllerAs: 'viewAllCtrl'
    })
})
