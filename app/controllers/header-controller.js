/**
 * Created by DarkoM on 13.12.2016.
 */
app.controller("HeaderController",  [
    "$scope", "DataFactory", "$state", "$rootScope",

    function ($scope, DataFactory, $state, $rootScope){
        $scope.initLoginForm = function(){
            $scope.loginModel = {};
        };

        $scope.initSignupForm = function () {
            $scope.signupModel = {};
        };

        $scope.login = function(){
            var users = DataFactory.users();
            users.once('value').then(function(snapshot){
                var results = snapshot.val();
                var success = results.filter(function(x){
                    return(x.email === $scope.loginModel.email && x.password === $scope.loginModel.password)
                });

                if(success.length > 0) {
                    $state.go("app.home");
                    $rootScope.currentUser = success[0];
                }
                else
                    alert('error');
            })
        };
        
        $scope.signup = function () {
            DataFactory.users().push($scope.signupModel);
        };
        
        $scope.logout = function () {
            $rootScope.currentUser = null;
            $state.go("app.login");
        }
    }
]);