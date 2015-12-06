
'use strict';
angular
       .module('parkingApp')
       .controller('parkingAppCtrl',function($scope){
        console.log('Called within controller:parkingAppCtrl');


        $scope.cars=[

            {plate:'123H001',date1:'12112015',timeIn:'6.37 AM',date2:'12012015',timeOut:'7.30 AM',id:'0'},
            {plate:'124H002',date1:'12052015',timeIn:'6.40 PM',date2:'12022015',timeOut:'10.00 AM',id:'1'},
            {plate:'125H003',date1:'12012015',timeIn:'9.00 AM',date2:'12032015',timeOut:'11.00 AM',id:'2'},
            {plate:'126H004',date1:'12022015',timeIn:'11.00 AM',date2:'12022015',timeOut:'12.00 PM',id:'3'},
            {plate:'127H005',date1:'12032015',timeIn:'12.00 PM',date2:'12032015',timeOut:'2.00 PM',id:'4'}
            


        ];
       

    
   
       $scope.editingData = {};

       for(var i =0 , length =$scope.cars.length; i<length; i++ ){
        $scope.editingData[$scope.cars[i].id] = false;
       }
       $scope.modify = function(car){
        $scope.editingData[car.id]=true;
       };
       $scope.update = function(car){
        $scope.editingData[car.id]=false;
       };


    
    
   
      $scope.removeRow = function(car){
            var index = -1;
            var Arr = eval( $scope.cars );
            for( var i = 0; i < Arr.length; i++ ) {
                  if( Arr[i].cars === car ) {
                      index = i;
                      break;
                   }
            }
            
            $scope.cars.splice( index,1 );
         };

    $scope.saveCar = function(car){
          
          if(car!=null){

          $scope.cars.push(angular.copy(car));
          delete $scope.car;
            }
           
        };

    


       });
 
