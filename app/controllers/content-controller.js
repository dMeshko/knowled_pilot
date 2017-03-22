/**
 * Created by DarkoM on 16.2.2017.
 */
app.controller("ContentController", [
    "$scope", "DataFactory", "Notification", "$state", "$cookies", "$rootScope",
    function ($scope, DataFactory, Notification, $state, $cookies, $rootScope){
        if (!$rootScope.currentUser)
        {
            var user = JSON.parse($cookies.get("currentUser") || null);
            if (!!user)
                $rootScope.currentUser = user;
            else
                $state.go("app.login");
        }

        $scope.model = {
            title: "",
            content: "",
            userId: $scope.currentUser.id,
            topicId: "",
            fieldId: ""
        };

        $scope.fields = [];
        var fieldsRef = DataFactory.fields();
        fieldsRef.once("value").then(function (snapshot){
            var results = snapshot.val();

            for (key in results){
                $scope.fields.push(angular.extend(results[key], { id: key }));
            }
        });

        $scope.topics = [];
        $scope.loadTopics = function(){
            var topicsRef = DataFactory.topics($scope.model.fieldId);

            $scope.topics = [];
            topicsRef.once("value").then(function (snapshot){
                var results = snapshot.val();
                $scope.topics = [];

                for (key in results){
                    $scope.topics.push(angular.extend(results[key], { id: key }));
                }
            });
        };

        $scope.tinymceOptions = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        };

        $scope.savePost = function (){
            var postsRef = DataFactory.posts();
            postsRef.push($scope.model).then(function (data){
                Notification.success("Post added!!");
                $state.go("app.home");
            });
        };
    }
]);