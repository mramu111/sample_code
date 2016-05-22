'use strict';


var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngMap']);

app.controller('HomeController', function($scope, $http){
 var url="http://192.168.56.101:5000/foo";
 delete $http.defaults.headers.common['X-Requested-With']; 
 $http.get(url)	
  .then(function(response) {
      $scope.mymessage = response.data;
  });

  $scope.selectedCity="1";
  $scope.cities = [
        {name : "Anantapur", id : 1},
        {name : "karnool",   id : 2},
        {name: "Amaravathi", id : 3}
    ];

    if ($scope.selectedCity=="1"){
       $scope.locations= [
                {name : "SKU", id : 1}];
       }
    else {
         
      $scope.locations = [
        {name : "SKU", id : 1},
        {name : "RAMNAGAR",   id : 2},
        {name: "KLD ROAD", id : 3}
       ];

       }  

      $scope.selectedLocation="1";
    if ($scope.selectedLocation=="1"){
        $scope.layouts=[{name : "RAMAIAHLAYOUT", id : 1}];
       }
    else{
        $scope.layouts=[{name : "SUBBAIAHLAYOUT",   id : 2},
        {name: "REDDYLAYOUT", id : 3},
        {name: "INDEPENDENT", id : 4}];
       }


});


app.controller('BlogController', function ($scope, $http) {
 $scope.message="Hello from BlogController";

});

app.controller('AboutController', function($scope, $http) {
$scope.message="Hello from AboutController";


});

app.controller('PhotoController', function ($scope, $http) {


  /*  $scope.photos = [
        {src: './images/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: './images/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: './images/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: './images/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: './images/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: './images/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ]; */

    $scope.records=[{city_id : 1, location_id : 1, layout_id : 1, owner_name : 'ramu',contact_number : '9538954260',

         photos:[{src: './images/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
                 {src: './images/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
                 {src: './images/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
                 {src: './images/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
                 {src: './images/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
                 {src: './images/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}]
         },
       {city_id : 1, location_id : 1,layout_id : 1, owner_name:"rajaramamohan", contact_number:"9548954270",
       photos:[{src: './images/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},{src: './images/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: './images/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},{src: './images/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: './images/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},{src: './images/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
        ]
      },
      {city_id: 1, location_id:1, layout_id:1, owner_name:"LakshmiNarayan", contact_number:"9548855270",
       photos:[{src: './images/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},{src: './images/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: './images/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},{src: './images/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: './images/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},{src: './images/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
        ]}
      ];


   // initial image index
    $scope._Index = 0;
    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    }; 

});






app.config(function($routeProvider) {
$routeProvider

.when('/', {

 templateUrl: 'pages/home.html',
 controller : 'HomeController'
  })
.when('/blog', { 
 templateUrl: 'pages/blog.html',
 controller : 'BlogController',
 })

 .when('/about', {
  templateUrl : 'pages/about.html',
  controller  : 'AboutController'
 })

  .when('/context', {
  templateUrl : 'pages/context.html',
  controller  : 'PhotoController'
 })


 .otherwise({ redirectTo: '/'});

});

  
 

