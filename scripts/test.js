/**
 * Created by Das953 on 02.07.2017.
 */
/* What happens with $apply */

angular.module('myApp',[])
    .controller('MessageController', function($scope) {

    $scope.getMessage = function() {

    /*        $scope.$apply(function() {
         //wrapped this within $apply
         $scope.message = 'Fetched after 3 seconds';
         $scope.console.log("TTT");
         });*/

        $scope.message = 'Fetched after 3 seconds';
        console.log("TTT");
    };

    /*$scope.getMessage();*/

});