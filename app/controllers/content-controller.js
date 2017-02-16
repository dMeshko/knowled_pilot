/**
 * Created by DarkoM on 16.2.2017.
 */
app.controller("ContentController", [
    "$scope",
    function ($scope){
        $scope.content = "";

        $scope.tinymceOptions = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        };
    }
]);