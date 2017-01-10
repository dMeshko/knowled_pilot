/**
 * Created by DarkoM on 09.1.2017.
 */
app.controller("BiologyQuizController", [
    "$scope", "QuizDatabase",
    function ($scope, QuizDatabase){
        var quizTopic = undefined; //string, indicating the topid, eg: "basics"
        var questions = !!quizTopic ? QuizDatabase.getSpecificTopic("biology", quizTopic) : QuizDatabase.getRandomTopic("biology");

        var maxQuestions = 5; // try to get at most maxQuestions
        $scope.quiz = QuizDatabase.generateQuiz(questions, maxQuestions);

        $scope.activeQuestion = $scope.quiz[0];
        $scope.loadQuestion = function (id){
            $scope.activeQuestion = $scope.quiz[id];
        };
    }]);