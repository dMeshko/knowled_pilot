/**
 * Created by DarkoM on 13.12.2016.
 */
app.controller("HomeController", ["$scope", function ($scope){

    $scope.showLevel2P = false;
    $scope.showLevel2D = false;
    $scope.showLevel3W = false;
    $scope.showLevel3M = false;
    $scope.showLevel3D = false;

    $scope.toggleLevel2P = function () {
        $scope.showLevel2P = !$scope.showLevel2P;
        var web = angular.element(document.querySelector('#web'));
        web.removeClass('active');
        var mobile = angular.element(document.querySelector('#mobile'));
        mobile.removeClass('active');
        var desktop = angular.element(document.querySelector('#desktop'));
        desktop.removeClass('active');
        var design = angular.element(document.querySelector('#design'));
        design.removeClass('active');
        var programming = angular.element(document.querySelector('#programming'));
        programming.addClass('active');

        if($scope.showLevel2P == false){
            $scope.showLevel3W = false;
            $scope.showLevel3M = false;
            $scope.showLevel3D = false;
        }
    };

    $scope.toggleLevel2D = function () {
        $scope.showLevel2D = !$scope.showLevel2D;
        var web = angular.element(document.querySelector('#web'));
        web.removeClass('active');
        var mobile = angular.element(document.querySelector('#mobile'));
        mobile.removeClass('active');
        var desktop = angular.element(document.querySelector('#desktop'));
        desktop.removeClass('active');
        var programming = angular.element(document.querySelector('#programming'));
        programming.removeClass('active');
        var design = angular.element(document.querySelector('#design'));
        design.addClass('active');
    };

    $scope.toggleLevel3W = function(){
        $scope.showLevel3W = !$scope.showLevel3W;
        var programming = angular.element(document.querySelector('#programming'));
        programming.removeClass('active');
        var mobile = angular.element(document.querySelector('#mobile'));
        mobile.removeClass('active');
        var desktop = angular.element(document.querySelector('#desktop'));
        desktop.removeClass('active');
        var design = angular.element(document.querySelector('#design'));
        design.removeClass('active');
        var web = angular.element(document.querySelector('#web'));
        web.addClass('active');
    };

    $scope.toggleLevel3M = function () {
        $scope.showLevel3M = !$scope.showLevel3M;
        var programming = angular.element(document.querySelector('#programming'));
        programming.removeClass('active');
        var desktop = angular.element(document.querySelector('#desktop'));
        desktop.removeClass('active');
        var web = angular.element(document.querySelector('#web'));
        web.removeClass('active');
        var design = angular.element(document.querySelector('#design'));
        design.removeClass('active');
        var mobile = angular.element(document.querySelector('#mobile'));
        mobile.addClass('active');
    };

    $scope.toggleLevel3D = function () {
        $scope.showLevel3D = !$scope.showLevel3D;
        var programming = angular.element(document.querySelector('#programming'));
        programming.removeClass('active');
        var web = angular.element(document.querySelector('#web'));
        web.removeClass('active');
        var mobile = angular.element(document.querySelector('#mobile'));
        mobile.removeClass('active');
        var design = angular.element(document.querySelector('#design'));
        design.removeClass('active');
        var desktop = angular.element(document.querySelector('#desktop'));
        desktop.addClass('active');
    };
    
    $scope.goToFrontEnd = function () {

    };

}]);