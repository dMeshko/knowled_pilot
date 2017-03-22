/**
 * Created by DarkoM on 13.12.2016.
 */
app.controller("HomeController", ["$scope", "DataFactory", "$rootScope", "Notification", "$cookies", "$state", function ($scope, DataFactory, $rootScope, Notification, $cookies, $state){
    if (!$rootScope.currentUser)
    {
        var user = JSON.parse($cookies.get("currentUser") || null);
        if (!!user)
            $rootScope.currentUser = user;
        else
            $state.go("app.login");
    }

    $scope.showLevel2P = false;
    $scope.showLevel2D = false;
    $scope.showLevel3W = false;
    $scope.showLevel3M = false;
    $scope.showLevel3D = false;
    $scope.showAngular2 = false;


    var postsRef = DataFactory.posts(), initialLoad = true;
    postsRef.once("value", function(data) {
        if (!!$scope.currentUser){
            initialLoad = false;
        }
    });

    postsRef.on('child_added', function(data) { //child_added
        if (!!$scope.currentUser){
            if (!initialLoad) return;
            var results = data.val();
            if ($scope.currentUser.id !== results.userId){
                DataFactory.getUser(results.userId).once("value").then(function (snapshot){
                    var user = snapshot.val();
                    DataFactory.getTopic(results.fieldId, results.topicId).once("value").then(function (snapshot){
                        var field = snapshot.val();
                        Notification.success({
                            message: "New posts was added by " + user.username + " in " + field.name + ", named as: " + results.title + ".  Check it out!! <i class='fa fa-smile-o' aria-hidden='true'></i>",
                            delay: 10000
                        });
                    });
                });
            }
        }
    });

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
    
    $scope.toggleAngular2 = function () {
        $scope.showAngular2 = !$scope.showAngular2;
    };

}]);