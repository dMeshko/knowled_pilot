/**
 * Created by DarkoM on 14.3.2017.
 */
app.factory("DataFactory", ["FirebaseFactory", function (FirebaseFactory){
    var factory = {};

    factory.fields = function (){
        return FirebaseFactory.ref("/fields/");
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

    factory.questions = function (){
        return FirebaseFactory.ref("/questions/");
    };

    factory.users = function (){
        return FirebaseFactory.ref("/users/");
    };

    factory.getUser = function (userId){
        return FirebaseFactory.ref("/users/" + userId);
    };

    return factory;
}]);