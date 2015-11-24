
'use strict';
angular
       .module('parkingApp')
       .controller('parkingAppCtrl',function($scope){
       	console.log('Called within controller:parkingAppCtrl');


       	$scope.cars=[

       			{plate:'123H001'},
       			{plate:'124H002'},
       			{plate:'125H003'},
       			{plate:'126H004'},
       			{plate:'127H005'},


       	];


		$scope.save = function(car){
			if(car!=null){
			$scope.cars.push(angular.copy(car));
			delete $scope.car;
		    }
		};

		




       });