/**
 * Created by DarkoM on 13.12.2016.
 */
app.controller("HeaderController", [
    "$scope", "QuizDatabase",
    function ($scope){
        $scope.search = function (){
            alert("vidi kaj gi cuvas oglasite, i ovde listaj gi..mozis da go iskoristis '$filter' servisot vo kontrolerot!! Zbor za prebaruvanje: " + $scope.searchPhrase);
        };
    }
]);