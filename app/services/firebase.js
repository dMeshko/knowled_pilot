/**
 * Created by DarkoM on 14.3.2017.
 */
app.factory("FirebaseFactory", [
    "$firebaseObject",
    function ($firebaseObject){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD08eZJHhoz9XEvJSVH8vrQzHgH5P4ZfY0",
            authDomain: "knowledge-pilot.firebaseapp.com",
            databaseURL: "https://knowledge-pilot.firebaseio.com",
            storageBucket: "knowledge-pilot.appspot.com",
            messagingSenderId: "762534592993"
        };
        firebase.initializeApp(config);
        // var ref = new Firebase("https://knowledge-pilot.firebaseio.com/");
        return firebase.database();
    }
]);