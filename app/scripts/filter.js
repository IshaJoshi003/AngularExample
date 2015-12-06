'use strict';
angular
  .module('parkingApp')
  .filter('sliceString',function(){
      return function(str,symbol){
          var result = str.slice(0,3)+symbol+str.slice(3,7);
          return result;
      }
      })
      .filter('modifyDate1',function(){
      	return function(date,symbol1,symbol2){
      		//if(date!=null){
      		
      	var res= date.slice(0,2)+symbol1+date.slice(2,4)+symbol2+date.slice(4,8);
      	return res;
      	//}
      }




  })
      .filter('modifyDate2',function(){
      	return function(date){
      		if(date!=null){
        var res= date.slice(0,2)+'/'+date.slice(2,4)+'/'+date.slice(4,8);
      	return res;
      }}
})

      .filter('timeIn',function(){
      	return function(time){
      	 if(time!=null && parseInt(time.slice(0,2)) >=12) 
      		{ var result=time.slice(0,5)+' '+'pm';}
       else{var result=time.slice(0,5)+' ' +'am';}
      	return result;
      }
})
      .filter('timeOut',function(){
      	return function(time){
      		
      		console.log(time);
      		if(time == null && time == undefined ){ return "";}
      	 else {
      	 	if(time!=undefined && time!=null && parseInt(time.slice(0,2)) >=12) 
      		{ var result=time.slice(0,5)+' '+'pm';}
       else{var result=time.slice(0,5)+' ' +'am';}
      	return result;
      }}
});