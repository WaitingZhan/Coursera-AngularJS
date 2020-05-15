(function(){
'use strict';
angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function(){
    var totalNameValue = caclulateNumeric($scope.name);
    $scope.totalValue = totalNameValue
  }
function caclulateNumeric(string){
  var res = 0
  for(let i = 0;i < string.length;i++){
    res += string.charCodeAt(i);
  }
  return res
}

})

})();
