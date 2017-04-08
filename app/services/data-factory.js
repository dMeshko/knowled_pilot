/**
 * Created by DarkoM on 14.3.2017.
 */
app.factory("DataFactory", ["FirebaseFactory", function (FirebaseFactory){
    var factory = {};

    factory.fields = function (){
        return FirebaseFactory.ref("/fields/");
    };

    factory.getField = function (fieldId){
        return FirebaseFactory.ref("/fields/" + fieldId);
    };

    factory.topics = function (fieldId){
        return FirebaseFactory.ref("/fields/" + fieldId + "/topics");
    };

    factory.getTopic = function (fieldId, topicId){
        return FirebaseFactory.ref("/fields/" + fieldId + "/topics/" + topicId);
    };

    factory.posts = function (){
        return FirebaseFactory.ref("/posts/");
    };

    factory.getPost = function(postId){
        return FirebaseFactory.ref("/posts/" + postId);
    };

    factory.questions = function (){
        return FirebaseFactory.ref("/questions/");
    };

    factory.answers = function (questionId){
        return FirebaseFactory.ref("/questions/" + questionId + "/answers/");
    };

    factory.users = function (){
        return FirebaseFactory.ref("/users/");
    };

    factory.getUser = function (userId){
        return FirebaseFactory.ref("/users/" + userId);
    };

    factory.getQuizResults = function (userId) {
        return FirebaseFactory.ref("/users/" + userId + "/quizResults/");
    };
    
    return factory;
}]);