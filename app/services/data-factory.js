/**
 * Created by DarkoM on 14.3.2017.
 */
app.factory("DataFactory", ["FirebaseFactory", function (FirebaseFactory){
    var factory = {};

    factory.fields = function (){
        return FirebaseFactory.ref("/fields/");
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

    return factory;
}]);