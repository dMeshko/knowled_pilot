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
                        templateUrl: './app/directives/quiz.html',
                        controller: function ($scope, $rootScope, QuizDatabase, field, topic, maxQuestions, $uibModalInstance, DataFactory){
                            field = field || QuizDatabase.getRandomField();
                            var questions = !!topic ? QuizDatabase.getSpecificTopic(field, topic) : QuizDatabase.getRandomTopic(field);
                            maxQuestions = maxQuestions || 5; // try to get at most maxQuestions, if not specified - defaults to 5

                            $scope.quiz = QuizDatabase.generateQuiz(questions, maxQuestions);
                            $scope.userChoices = Array($scope.quiz.length).fill(undefined);

                            $scope.activeIndex = 0;
                            $scope.activeQuestion = $scope.quiz[$scope.activeIndex];
                            $scope.selectedAnswer = {};
                            $scope.loadQuestion = function (id){
                                if ("text" in $scope.selectedAnswer){ //check if answer has been selected
                                    $scope.userChoices[$scope.activeIndex] = $scope.selectedAnswer;
                                }

                                $scope.activeIndex = id;
                                $scope.selectedAnswer = $scope.userChoices[$scope.activeIndex] || {};
                                $scope.activeQuestion = $scope.quiz[$scope.activeIndex];
                            };

                            $scope.next = function (){
                                if ("text" in $scope.selectedAnswer){ //check if answer has been selected
                                    $scope.userChoices[$scope.activeIndex] = $scope.selectedAnswer;
                                }

                                $scope.activeIndex++;
                                if ($scope.activeIndex == $scope.quiz.length)
                                    $scope.activeIndex = 0;
                                $scope.selectedAnswer = $scope.userChoices[$scope.activeIndex] || {};
                                $scope.loadQuestion($scope.activeIndex);
                            };

                            $scope.prev = function (){
                                if ("text" in $scope.selectedAnswer){ //check if answer has been selected
                                    $scope.userChoices[$scope.activeIndex] = $scope.selectedAnswer;
                                }

                                $scope.activeIndex--;
                                if ($scope.activeIndex == -1)
                                    $scope.activeIndex = $scope.quiz.length - 1;
                                $scope.selectedAnswer = $scope.userChoices[$scope.activeIndex] || {};
                                $scope.loadQuestion($scope.activeIndex);
                            };

                            $scope.close = function (){
                                $uibModalInstance.close();
                            };

                            var correctAnswerPoints = 1, wrongAnswerPoints = -1;
                            $scope.finishAttempt = function (){
                                $scope.loadQuestion($scope.activeIndex); // mark the current questions as answered

                                var points = 0;

                                for (i = 0; i < $scope.userChoices.length; i++)
                                    if (!!$scope.userChoices[i]) // check if question is answered
                                        if ($scope.userChoices[i].correct) // check if questions is answered correctly
                                            points += correctAnswerPoints;
                                        else // the answer is wrong
                                            points += wrongAnswerPoints;

                                var now = moment().format("MMM Do YYYY, h:mm:ss a");
                                console.log(now);

                                var quizResults = {
                                    points: points,
                                    timestamp: now
                                };

                                if($rootScope.currentUser != null) {
                                    DataFactory.getQuizResults($rootScope.currentUser.id).push(quizResults);
                                }

                                $uibModalInstance.close(); // close the quiz modal

                                // summon the results modal
                                $uibModal.open({
                                        animation: true,
                                        ariaLabelledBy: 'modal-title',
                                        ariaDescribedBy: 'modal-body',
                                        templateUrl: './app/directives/quiz-results.html',
                                        controller: function ($scope, $uibModalInstance, questions, answeredQuestions, points){
                                            $scope.questions = questions;
                                            $scope.answeredQuestions = answeredQuestions;
                                            $scope.points = points;

                                            $scope.answerResult = function (questionIndex){
                                                var correctAnswer = $scope.getCorrectAnswer(questionIndex);
                                                var chosenAnswer = $scope.answeredQuestions[questionIndex];

                                                if (!chosenAnswer)
                                                    return 0;

                                                if (chosenAnswer.text === correctAnswer.text)
                                                    return 1;

                                                return -1;
                                            };

                                            $scope.getCorrectAnswer = function (questionIndex){
                                                var correctAnswer = undefined;
                                                angular.forEach($scope.questions[questionIndex].answers, function (value){
                                                    if (value.correct){
                                                        correctAnswer = value;
                                                        return false; // break
                                                    }
                                                });

                                                return correctAnswer;
                                            };

                                            $scope.close = function (){
                                                $uibModalInstance.close();
                                            };
                                        },
                                        size: "lg",
                                        resolve: {
                                            questions: function (){
                                                return $scope.quiz;
                                            },
                                            answeredQuestions: function (){
                                                return $scope.userChoices;
                                            },
                                            points: function (){
                                                return points;
                                            }
                                        }
                                });
                                
                                // reset values here for futures usage
                            };
                        },
                        size: "lg",
                        resolve: {
                            field: function (){
                                return $attributes.field;
                            },
                            topic: function (){
                                return $attributes.topic;
                            },
                            maxQuestions: function (){
                                return $attributes.maxQuestions;
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