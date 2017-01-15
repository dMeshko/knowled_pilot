/**
 * Created by DarkoM on 08.1.2017.
 */
app.factory("QuizDatabase", function (){
    var factory = {};

    var questions = {
        "biology": {
            "basics": [
                {
                    question: "What is biology?",
                    answers: [
                        {
                            correct: true,
                            text: "the study of life"
                        },
                        {
                            correct: false,
                            text: "the study of death"
                        },
                        {
                            correct: false,
                            text: "the study of weather"
                        },
                        {
                            correct: false,
                            text: "the study of mining"
                        }
                    ]
                },
                {
                    question: "Is reproduction a part of life?",
                    answers: [
                        {
                            correct: true,
                            text: "Yes, reproduction is one of the characteristics of life"
                        },
                        {
                            correct: false,
                            text: "No, life doesn\'t reproduce"
                        },
                        {
                            correct: false,
                            text: "Yes, but not all life reproduces"
                        },
                        {
                            correct: false,
                            text: "Yes, althogh reproduction isn\'t one of the characteristics of life"
                        }
                    ]
                },
                {
                    question: "What does \"life grows and develops\" mean?",
                    answers: [
                        {
                            correct: true,
                            text: "Living organisms have the ability to rebuild and repair themselves when injured"
                        },
                        {
                            correct: false,
                            text: "Living organisms receive random software updates"
                        },
                        {
                            correct: false,
                            text: "Living organisms have the ability to move faster than light"
                        },
                        {
                            correct: false,
                            text: "Living organisms can sometimes grow bigger than the planet they live on"
                        }
                    ]
                },
                {
                    question: "Which of the following does not belong in the basic principles of biology?",
                    answers: [
                        {
                            correct: true,
                            text: "Legal advice"
                        },
                        {
                            correct: false,
                            text: "Cell theory"
                        },
                        {
                            correct: false,
                            text: "Evolution"
                        },
                        {
                            correct: false,
                            text: "Gene theory"
                        }
                    ]
                },
                {
                    question: "Which of the following is a subdicipline of biology?",
                    answers: [
                        {
                            correct: true,
                            text: "anatomy"
                        },
                        {
                            correct: false,
                            text: "web design"
                        },
                        {
                            correct: false,
                            text: "craft"
                        },
                        {
                            correct: false,
                            text: "psychology"
                        }
                    ]
                },
                {
                    question: "Which of the following statements is not true?",
                    answers: [
                        {
                            correct: true,
                            text: "life can sometimes not be alive"
                        },
                        {
                            correct: false,
                            text: "life can adapt"
                        },
                        {
                            correct: false,
                            text: "life can respond"
                        },
                        {
                            correct: false,
                            text: "life can evolve"
                        }
                    ]
                }
            ],
            "all": [
                {
                    question: "Which of these is true?",
                    answers: [
                        {
                            correct: true,
                            text: "The eukaryotic cell has a true nucleus"
                        },
                        {
                            correct: false,
                            text: "The prokaryotic cell has a true nucleus"
                        },
                        {
                            correct: false,
                            text: "The prokaryotic cell has a true nucleus"
                        },
                        {
                            correct: false,
                            text: "None of the above"
                        }
                    ]
                },
                {
                    question:"What is a cell?",
                    answers: [
                        {
                            correct: true,
                            text: "The simplest unit of matter that is alive"
                        },
                        {
                            correct: false,
                            text: "The simplest unit of matter"
                        },
                        {
                            correct: false,
                            text: "The most complex unit of matter that is alive"
                        },
                        {
                            correct: false,
                            text: "The most complex unit of matter"
                        }
                    ]
                },
                {
                    question:"What kingdoms are made up of prokaryotic cells?",
                    answers: [
                        {
                            correct: true,
                            text: "Bacteria & Archea"
                        },
                        {
                            correct: false,
                            text: "Bacteria & Fungi"
                        },
                        {
                            correct: false,
                            text: "Protists & Plants"
                        },
                        {
                            correct: false,
                            text: "Protists & Plants"
                        }
                    ]
                },
                {
                    question:"How many times larger is a eukaryotic cell than a prokaryotic cell?",
                    answers: [
                        {
                            correct: true,
                            text: "10 times"
                        },
                        {
                            correct: false,
                            text: "2 times"
                        },
                        {
                            correct: false,
                            text: "5 times"
                        },
                        {
                            correct: false,
                            text: "12 times"
                        }

                    ]
                },
                {
                    question:"Eukaryotes grow and reproduce through a process called:",
                    answers: [
                        {
                            correct: true,
                            text: "Mitosis"
                        },
                        {
                            correct: false,
                            text: "Meiosis"
                        },
                        {
                            correct: false,
                            text: "Binary fission"
                        },
                        {
                            correct: false,
                            text: "None of the above"
                        }

                    ]
                },
                {
                    question:"Prokaryotes reproduce through a process called:",
                    answers: [
                        {
                            correct: true,
                            text: "Binary fission"
                        },
                        {
                            correct: false,
                            text: "Meiosis"
                        },
                        {
                            correct: false,
                            text: "Mitosis"
                        },
                        {
                            correct: false,
                            text: "None of the above"
                        }

                    ]
                },
                {
                    question:"What is biology?",
                    answers: [
                        {
                            correct: true,
                            text: "the study of life"
                        },
                        {
                            correct: false,
                            text: "the study of death"
                        },
                        {
                            correct: false,
                            text: "the study of weather"
                        },
                        {
                            correct: false,
                            text: "the study of mining"
                        }

                    ]
                },
                {
                    question:"Is reproduction a part of life?",
                    answers: [
                        {
                            correct: true,
                            text: "Yes, reproduction is one of the characteristics of life"
                        },
                        {
                            correct: false,
                            text: "No, life doesn\'t reproduce"
                        },
                        {
                            correct: false,
                            text: "Yes, but not all life reproduces"
                        },
                        {
                            correct: false,
                            text: "Yes, althogh reproduction isn\'t one of the characteristics of life"
                        }

                    ]
                },
                {
                    question:"What does “life grows and develops",
                    answers: [
                        {
                            correct: true,
                            text: "Living organisms have the ability to rebuild and repair themselves when injured"
                        },
                        {
                            correct: false,
                            text: "Living organisms receive random software updates"
                        },
                        {
                            correct: false,
                            text: "Living organisms have the ability to move faster than light"
                        },
                        {
                            correct: false,
                            text: "Living organisms can sometimes grow bigger than the planet they live on"
                        }

                    ]
                },
                {
                    question:"Which of the following does not belong in the basic principles of biology?",
                    answers: [
                        {
                            correct: true,
                            text: "Legal advice"
                        },
                        {
                            correct: false,
                            text: "Cell theory"
                        },
                        {
                            correct: false,
                            text: "Evolution"
                        },
                        {
                            correct: false,
                            text: "Gene theory"
                        }

                    ]
                },
                {
                    question:"Which of the following is a subdicipline of biology?",
                    answers: [
                        {
                            correct: true,
                            text: "anatomy"
                        },
                        {
                            correct: false,
                            text: "web design"
                        },
                        {
                            correct: false,
                            text: "craft"
                        },
                        {
                            correct: false,
                            text: "psychology"
                        }

                    ]
                },
                {
                    question:"Which of the following statements is not true?",
                    answers: [
                        {
                            correct: true,
                            text: "life can sometimes not be alive"
                        },
                        {
                            correct: false,
                            text: "life can adapt"
                        },
                        {
                            correct: false,
                            text: "life can respond"
                        },
                        {
                            correct: false,
                            text: "life can evolve"
                        }

                    ]
                },
                {
                    question:"Which of the following represents an order of the six kingdoms from simplest to most complex?",
                    answers: [
                        {
                            correct: true,
                            text: "Archaebacteria, Eubacteria, Protista, Fungi, Plantae, Animalia"
                        },
                        {
                            correct: false,
                            text: "Protista, Fungi, Animalia, Plantae, Archaebacteria, Eubacteria"
                        },
                        {
                            correct: false,
                            text: "Animalia, Plantae, Fungi, Protista, Eubacteria, Archaebacteria"
                        },
                        {
                            correct: false,
                            text: "Eubacteria, Archaebacteria, Fungi, Protista, Animalia, Plantae"
                        }

                    ]
                },
                {
                    question:"What would be an example of an organism in the Plantae kingdom?",
                    answers: [
                        {
                            correct: true,
                            text: "Trees"
                        },
                        {
                            correct: false,
                            text: "Mushrooms"
                        },
                        {
                            correct: false,
                            text: "Lizards"
                        },
                        {
                            correct: false,
                            text: "Amoeba"
                        }

                    ]
                },
                {
                    question:"Which of these has a prokaryotic cell?",
                    answers: [
                        {
                            correct: true,
                            text: "Eubacteria"
                        },
                        {
                            correct: false,
                            text: "Plantae"
                        },
                        {
                            correct: false,
                            text: "Protista"
                        },
                        {
                            correct: false,
                            text: "Fungi"
                        }

                    ]
                },
                {
                    question:"What do fungi use for nutrition acquisition?",
                    answers: [
                        {
                            correct: true,
                            text: "Absorption"
                        },
                        {
                            correct: false,
                            text: "Photosynthesis"
                        },
                        {
                            correct: false,
                            text: "Absorption and Photosynthesis"
                        },
                        {
                            correct: false,
                            text: "Oxygen"
                        }

                    ]
                },
                {
                    question:"Which of the following kingdoms contain organisms that are used to make yogurt and live inside of humans?",
                    answers: [
                        {
                            correct: true,
                            text: "Eubacteria"
                        },
                        {
                            correct: false,
                            text: "Archaebacteria"
                        },
                        {
                            correct: false,
                            text: "Animalia"
                        },
                        {
                            correct: false,
                            text: "Fungi"
                        }

                    ]
                },
                {
                    question:"Mushrooms and breadmolds are organisms that are found in which of the following kingdom?",
                    answers: [
                        {
                            correct: true,
                            text: "Fungi"
                        },
                        {
                            correct: false,
                            text: "Eubacteria"
                        },
                        {
                            correct: false,
                            text: "Protista"
                        },
                        {
                            correct: false,
                            text: "Plantae"
                        }

                    ]
                },
                {
                    question:"Which of the following kingdom has the most ancient type of life form?",
                    answers: [
                        {
                            correct: true,
                            text: "Archaebacteria"
                        },
                        {
                            correct: false,
                            text: "Eubacteria"
                        },
                        {
                            correct: false,
                            text: "Protista"
                        },
                        {
                            correct: false,
                            text: "Fungi"
                        }

                    ]
                },
                {
                    question:"What is an ecosystem?",
                    answers: [
                        {
                            correct: true,
                            text: "Ecosystems involve interactions between communities and their environment"
                        },
                        {
                            correct: false,
                            text: "A system that ecos"
                        },
                        {
                            correct: false,
                            text: "The place where life lives"
                        },
                        {
                            correct: false,
                            text: "Einstain\'s famous equation"
                        }

                    ]
                },
                {
                    question:"What is not an organ system example?",
                    answers: [
                        {
                            correct: true,
                            text: "traffic lights"
                        },
                        {
                            correct: false,
                            text: "circulatory"
                        },
                        {
                            correct: false,
                            text: "digestive"
                        },
                        {
                            correct: false,
                            text: "nervous"
                        }

                    ]
                },
                {
                    question:"What is the simplest form of living units?",
                    answers: [
                        {
                            correct: true,
                            text: "Cells"
                        },
                        {
                            correct: false,
                            text: "Atoms"
                        },
                        {
                            correct: false,
                            text: "Molecules"
                        },
                        {
                            correct: false,
                            text: "Heart"
                        }

                    ]
                },
                {
                    question:"What is the pyramid of life?",
                    answers: [
                        {
                            correct: true,
                            text: "The pyramid of life is a hierarchical structure for the organization of life"
                        },
                        {
                            correct: false,
                            text: "It\'s a pyramid made of life"
                        },
                        {
                            correct: false,
                            text: "The  big pyramid in Egypt"
                        },
                        {
                            correct: false,
                            text: "It\'s life\'s mating ritual"
                        }

                    ]
                },
                {
                    question:"What can be used to view atoms?",
                    answers: [
                        {
                            correct: true,
                            text: "Powerful microscopes"
                        },
                        {
                            correct: false,
                            text: "Powerful telescopes"
                        },
                        {
                            correct: false,
                            text: "Powerful periscopes"
                        },
                        {
                            correct: false,
                            text: "Powerful passion"
                        }

                    ]
                },
                {
                    question:"What are organs?",
                    answers: [
                        {
                            correct: true,
                            text: "Different types of tissue arranged together to perform specific tasks"
                        },
                        {
                            correct: false,
                            text: "Musical instruments used in church"
                        },
                        {
                            correct: false,
                            text: "Single cell organisms"
                        },
                        {
                            correct: false,
                            text: "Bone structures in birds"
                        }

                    ]
                },
                {
                    question:"What are tissues?",
                    answers: [
                        {
                            correct: true,
                            text: "Groups of cells with both a shared structure and function"
                        },
                        {
                            correct: false,
                            text: "Something you use to blow your nose"
                        },
                        {
                            correct: false,
                            text: "Groups of life forms that sing in the rain"
                        },
                        {
                            correct: false,
                            text: "Copper veins"
                        }

                    ]
                },
                {
                    question:"What is the next highest classification grouping above genus?",
                    answers: [
                        {
                            correct: true,
                            text: "Family"
                        },
                        {
                            correct: false,
                            text: "Species"
                        },
                        {
                            correct: false,
                            text: "Phylum"
                        },
                        {
                            correct: false,
                            text: "Order"
                        }

                    ]
                },
                {
                    question:"What is taxonomy?",
                    answers: [
                        {
                            correct: true,
                            text: "A hierarchical system for classifying and identifying organisms"
                        },
                        {
                            correct: false,
                            text: "A hierarchical system for classifying and identifying species"
                        },
                        {
                            correct: false,
                            text: "A system for naming the terms in biology"
                        },
                        {
                            correct: false,
                            text: "A system for classifying organisms"
                        }

                    ]
                },
                {
                    question:"What is Homo in the scientific name for the human - Homo Sapiens?",
                    answers: [
                        {
                            correct: true,
                            text: "Genus"
                        },
                        {
                            correct: false,
                            text: "Species"
                        },
                        {
                            correct: false,
                            text: "Class"
                        },
                        {
                            correct: false,
                            text: "Order"
                        }

                    ]
                },
                {
                    question:"Which of the following groups would contain the largest number of organisms?",
                    answers: [
                        {
                            correct: true,
                            text: "Phylum"
                        },
                        {
                            correct: false,
                            text: "Order"
                        },
                        {
                            correct: false,
                            text: "Class"
                        },
                        {
                            correct: false,
                            text: "Family"
                        }

                    ]
                },
                {
                    question:"A scientific name contains information about its:",
                    answers: [
                        {
                            correct: true,
                            text: "genus and species"
                        },
                        {
                            correct: false,
                            text: "family and species"
                        },
                        {
                            correct: false,
                            text: "phylum and order"
                        },
                        {
                            correct: false,
                            text: "class and family"
                        }

                    ]
                },
                {
                    question:"The current classification system was devised by:",
                    answers: [
                        {
                            correct: true,
                            text: "Linneaus"
                        },
                        {
                            correct: false,
                            text: "Aristotle"
                        },
                        {
                            correct: false,
                            text: "Plato"
                        },
                        {
                            correct: false,
                            text: "Darwin"
                        }

                    ]
                },
                {
                    question:"What is word dissection used for in biology?",
                    answers: [
                        {
                            correct: true,
                            text: "To better understand the terminology"
                        },
                        {
                            correct: false,
                            text: "To make sure there aren\'t any grammatical errors"
                        },
                        {
                            correct: false,
                            text: "To define theories"
                        },
                        {
                            correct: false,
                            text: "To list examples of organisms"
                        }

                    ]
                },
                {
                    question:"What is arthritis?",
                    answers: [
                        {
                            correct: true,
                            text: "The inflammation of a joint"
                        },
                        {
                            correct: false,
                            text: "A poison plant in the middle east"
                        },
                        {
                            correct: false,
                            text: "The tail of a rattlesnake"
                        },
                        {
                            correct: false,
                            text: "Mexican food"
                        }

                    ]
                },
                {
                    question:"What are erythrocytes?",
                    answers: [
                        {
                            correct: true,
                            text: "Red blood cells"
                        },
                        {
                            correct: false,
                            text: "White blood cells"
                        },
                        {
                            correct: false,
                            text: "Bone marrow cells"
                        },
                        {
                            correct: false,
                            text: "Soft tissues in the organs"
                        }

                    ]
                },
                {
                    question:"What is Schizophrenia?",
                    answers: [
                        {
                            correct: true,
                            text: "Disorder caused by delusions and hallucinations"
                        },
                        {
                            correct: false,
                            text: "A city in Sweden"
                        },
                        {
                            correct: false,
                            text: "A plant in the Amazon jungle"
                        },
                        {
                            correct: false,
                            text: "A biological term for animals"
                        }

                    ]
                },
                {
                    question:"What is biological evoluton?",
                    answers: [
                        {
                            correct: true,
                            text: "Genetic change in a population that is inherited over several generations"
                        },
                        {
                            correct: false,
                            text: "Genetic change due to disease"
                        },
                        {
                            correct: false,
                            text: "Change in the body temperature of organisms"
                        },
                        {
                            correct: false,
                            text: "Change in the planet\'s climate"
                        }

                    ]
                },
                {
                    question:"Is biological evolution a fact?",
                    answers: [
                        {
                            correct: true,
                            text: "Yes, it\'s a well established scientific theory"
                        },
                        {
                            correct: false,
                            text: "No, it\'s just a scientific theory"
                        },
                        {
                            correct: false,
                            text: "Yes, althogh biology scientist don\'t accept it"
                        },
                        {
                            correct: false,
                            text: "It\'s a false study"
                        }

                    ]
                },
                {
                    question:"What is natural selection?",
                    answers: [
                        {
                            correct: true,
                            text: "The process by which biological evolutionary changes take place"
                        },
                        {
                            correct: false,
                            text: "When nature selects an object"
                        },
                        {
                            correct: false,
                            text: "The natural selection of color of an object"
                        },
                        {
                            correct: false,
                            text: "The process of mating"
                        }

                    ]
                },
                {
                    question:"How does genetic variation occur?",
                    answers: [
                        {
                            correct: true,
                            text: "Mainly through DNA mutations"
                        },
                        {
                            correct: false,
                            text: "Through wormholes in space"
                        },
                        {
                            correct: false,
                            text: "Mainly through DNA staying the same"
                        },
                        {
                            correct: false,
                            text: "Mainly through parent organisms not feeding their offspring"
                        }

                    ]
                },
                {
                    question:"What is the opposing theory to evolution?",
                    answers: [
                        {
                            correct: true,
                            text: "Creation"
                        },
                        {
                            correct: false,
                            text: "Destruction"
                        },
                        {
                            correct: false,
                            text: "Chaos"
                        },
                        {
                            correct: false,
                            text: "Anarchy"
                        }

                    ]
                },
                {
                    question:"Was evolution ever caused a controversy?",
                    answers: [
                        {
                            correct: true,
                            text: "Yes, in it\'s introduction"
                        },
                        {
                            correct: false,
                            text: "No, it has always been accepted"
                        },
                        {
                            correct: false,
                            text: "Yes, only in Canada"
                        },
                        {
                            correct: false,
                            text: "Yes, but only in science"
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