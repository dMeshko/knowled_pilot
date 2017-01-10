/**
 * Created by DarkoM on 09.1.2017.
 */
app.directive("quiz", [
    "$uibModal",
    function ($uibModal){
        var quizDirective = {
            restirct: "A",
            link: function ($scope, $element, $attributes){
                var openDialog = function (event){
                    event.preventDefault();
                    $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: './app/directives/quiz-directive.html',
                        controller: $attributes.controllerName,
                        size: "lg",
                        resolve: {
                            quizTopic: function (){
                                return $attributes.topic
                            }
                        }
                    })
                };

                $element.on("click", openDialog);
            }
        };

        return quizDirective;
    }
]);