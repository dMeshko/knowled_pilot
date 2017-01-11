/**
 * Created by DarkoM on 08.1.2017.
 */
app.factory("QuizDatabase", function (){
    var factory = {};

    var questions = {
        "life": {
            "annie": [
                {
                    question: "Omileno jadenje na Annie?",
                    answers: [
                        {
                            correct: true,
                            text: "Sirenje"
                        },
                        {
                            correct: false,
                            text: "Pica"
                        },
                        {
                            correct: false,
                            text: "Pavlaka"
                        },
                        {
                            correct: false,
                            text: "Bop"
                        }
                    ]
                },
                {
                    question: "Kolku godini ima Chelsea(kuchkata)?",
                    answers: [
                        {
                            correct: false,
                            text: "4"
                        },
                        {
                            correct: true,
                            text: "5"
                        },
                        {
                            correct: false,
                            text: "6"
                        },
                        {
                            correct: false,
                            text: "7"
                        }
                    ]
                },
                {
                    question: "Kolku pati vo mesecot si ja cheshla kosata?",
                    answers: [
                        {
                            correct: false,
                            text: "1"
                        },
                        {
                            correct: false,
                            text: "2"
                        },
                        {
                            correct: true,
                            text: "3"
                        },
                        {
                            correct: false,
                            text: "4"
                        }
                    ]
                },
                {
                    question: "Koja mandolina beshe?",
                    answers: [
                        {
                            correct: false,
                            text: "1"
                        },
                        {
                            correct: true,
                            text: "2"
                        },
                        {
                            correct: false,
                            text: "3"
                        },
                        {
                            correct: false,
                            text: "4"
                        }
                    ]
                },
                {
                    question: "Za sho se zdruzhi so Lileto?",
                    answers: [
                        {
                            correct: true,
                            text: "Za inernetot"
                        },
                        {
                            correct: false,
                            text: "Za kucheto"
                        },
                        {
                            correct: false,
                            text: "Oti i beshe zhal deka ne gledashe"
                        },
                        {
                            correct: false,
                            text: "Za baklavite"
                        }
                    ]
                }
            ]
        },
        "biology": {
            "basics": [
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
                },
                {
                    question: "How are you today, sir? -Again.",
                    answers: [
                        {
                            correct: true,
                            text: "Good1"
                        },
                        {
                            correct: false,
                            text: "2Meh"
                        },
                        {
                            correct: false,
                            text: "Alrighty..3"
                        },
                        {
                            correct: false,
                            text: "Wonderful4"
                        }
                    ]
                },
                {
                    question: "How are you today, 11?",
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
                },
                {
                    question: "How are you today, sir? -Again3.",
                    answers: [
                        {
                            correct: true,
                            text: "Good1"
                        },
                        {
                            correct: false,
                            text: "2Meh"
                        },
                        {
                            correct: false,
                            text: "Alrighty..3"
                        },
                        {
                            correct: false,
                            text: "Wonderful4"
                        }
                    ]
                }
            ],
            "world_dissections": [
                {
                    question: "How are you today, sir?WW",
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
            ]
        },
        "IT": {

        },
        "math": {

        }
    };

    var getRandomPropertyFromObject = function (obj){
        var index = parseInt(Math.random() * Object.keys(obj).length);
        return Object.keys(obj)[index];
    };

    var getRandomValueFromObject = function (obj){
        var index = parseInt(Math.random() * Object.keys(obj).length);
        return obj[Object.keys(obj)[index]];
    };

    var getRandomValueFromArray = function (array){
        var index = parseInt(Math.random() * array.length);
        return array[index];
    };

    factory.getRandomField = function (){
        return getRandomPropertyFromObject(questions);
    };

    factory.getSpecificField = function (fieldName){
        return questions[fieldName];
    };

    factory.getRandomTopic = function (field){
        return field && questions[field] && getRandomValueFromObject(questions[field]);
    };

    factory.getSpecificTopic = function (fieldName, topicName){
        return questions[fieldName][topicName];
    };

    factory.getRandomQuestion = function (questionsArray){
        return questionsArray && getRandomValueFromArray(questionsArray);
    };

    factory.getSpecificQuestion = function (fieldName, topicName, index){
        return questions[fieldName][topicName][index];
    };

    var shuffle = function (questionObject) {
        var answers = angular.extend([], questionObject.answers);
        var i = 0, j = 0, temp = null;

        for (i = answers.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp
        }

        return {
            question: questionObject.question,
            answers: answers
        };
    };

    factory.generateQuiz = function (questionsBank, maximumQuestions){
        var quizQuestions = [], i = 0;
        maximumQuestions = questionsBank.length < maximumQuestions ? questionsBank.length : maximumQuestions;

        while (i < maximumQuestions){
            var question = factory.getRandomQuestion(questionsBank);
            if (quizQuestions.map(function (x){ return x.question; }).indexOf(question.question) > -1)
                continue;

            quizQuestions.push(shuffle(question));
            i++;
        }
        return quizQuestions;
    };

    return factory;
});