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
        {
            if ($state.current.name === "app.create" || $state.current.name === "app.quiz")
                $state.go("app.login");
        }
    }

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

}]);