/**
 * Created by DarkoM on 08.1.2017.
 */
app.factory("QuizDatabase", function (){
    var factory = {};

    var biology = [
        {
            question: "How are you today, sir?",
            answers: [
                {
                    correct: true,
                    text: "Good"
                },
                {
                    correct: false,
                    text: "Meh"
                },
                {
                    correct: false,
                    text: "Alrighty.."
                },
                {
                    correct: false,
                    text: "Wonderful"
                }
            ]
        }
    ];

    factory.getMeAQuestionFor = function (topic){
        var targetArray = eval(topic.toLowerCase());
        var randomIndex = parseInt(Math.random() * targetArray.length);
        var currentQuestion = targetArray[randomIndex].question;
        var currentAnswers = targetArray[randomIndex].answers;


    };

    return factory;
});