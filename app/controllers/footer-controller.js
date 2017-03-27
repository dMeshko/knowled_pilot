/**
 * Created by DarkoM on 13.12.2016.
 */
app.controller("FooterController", [
    "$scope", "DataFactory",
    function ($scope, DataFactory){
        var loadData = function (){
            DataFactory.fields().once("value").then(function (snapshot){
                var results = snapshot.val();

                $scope.fields = [];

                for (var key in results){
                    var currentField = results[key];

                    for (var topicKey in currentField.topics){
                        currentField.topics[topicKey] = angular.extend(currentField.topics[topicKey], { id: topicKey });
                    }

                    $scope.fields.push(angular.extend(currentField, { id: key }));
                }

                $scope.$apply();
            });
        };
        loadData();

        $scope.$on("reloadData", function (){
            loadData();
        });
    }
]);