angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('BowtiesCtrl', function($scope) {

  // Hard-coded bowties
  // Replace this with $http API request to http://bowties.herokuapp.com/api/bowties
  // Remember to inject $http
  $scope.bowties =
  [
    {
      id: 1,
      material: "silk",
      pattern: "houndstooth",
      style: "slim",
      image_url: "http://www.thetiebar.com/database/products/BS178_l.jpg",
      retail_price: 24.95,
      description: "This houndstooth bowtie is made from top quality silk."
    },
    {
      id: 2,
      material: "silk",
      pattern: "floral",
      style: "slim",
      image_url: "http://www.thetiebar.com/database/products/BS184_l.jpg",
      retail_price: 23.95,
      description: "This floral bowtie is made from top quality silk."
    },
    {
      id: 3,
      material: "silk",
      pattern: "paisley",
      style: "traditional",
      image_url: "http://www.thetiebar.com/database/products/B1735_l.jpg",
      retail_price: 26.95,
      description: "This paisley bowtie is made from top quality silk."
    }
  ]
})
