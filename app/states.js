/**
 * Created by DarkoM on 13.12.2016.
 */
app.config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state("app", {
            url: "/",
            abstract: true,
            views: {
                "header": {
                    controller: "HeaderController",
                    templateUrl: "./views/header.html"
                },
                "content": {
                    controller: "HomeController",
                    templateUrl: "./views/home.html"
                },
                "footer": {
                    controller: "FooterController",
                    templateUrl: "./views/footer.html"
                }
            }
        });

        $stateProvider.state("app.home", {
            url: ""
        });

        $stateProvider.state("app.learn", {
            url: "learn",
            views: {
                "content@": {
                    templateUrl: "./views/learn/index.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology", {
            url: "/biology",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.basics", {
                url: "/biology_basics",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_basics.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.cell", {
            url: "/biology_cell_anatomy",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_cell_anatomy.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.evolution", {
            url: "/biology_evolution",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_evolution.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.kingdoms", {
            url: "/biology_kingdoms_of_life",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_kingdoms_life.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.pyramid", {
            url: "/biology_pyramid_struct_life",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_pyramid_struct_life.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.taxonomy", {
            url: "/biology_taxonomy",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_taxonomy.html"
                }
            }
        });

        $stateProvider.state("app.learn.biology.diss", {
            url: "/biology_world_diss",
            views: {
                "content@": {
                    templateUrl: "./views/learn/biology/biology_world_diss.html"
                }
            }
        });

        $stateProvider.state("app.learn.it", {
            url: "/it",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it/it.html"
                }
            }
        });

        $stateProvider.state("app.learn.it.frontend", {
            url: "/frontend",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it/front_end.html"
                }
            }
        });

        $stateProvider.state("app.learn.it.angular2", {
            url: "/angular2/introduction",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it/angular2.html"
                }
            }
        });

        $stateProvider.state("app.learn.it.photoshop", {
            url: "/photoshop",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it/photoshop.html"
                }
            }
        });

        $stateProvider.state("app.learn.it.angular2.components", {
            url: "/angular2/components",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it/angular2-components.html"
                }
            }
        });

        $stateProvider.state("app.learn.math", {
            url: "/math",
            views: {
                "content@": {
                    templateUrl: "./views/learn/math/math.html"
                }
            }
        });

        $stateProvider.state("app.learn.math.algebra", {
            url: "/algebra",
            views: {
                "content@": {
                    templateUrl: "./views/learn/math/algebra.html"
                }
            }
        });

        $stateProvider.state("app.learn.math.algebra.expressions", {
            url: "/math/algebra/expressions",
            views: {
                "content@": {
                    templateUrl: "./views/learn/math/algebra_expressions.html"
                }
            }
        });

        $stateProvider.state("app.quiz", {
            url: "quiz",
            views: {
                "content@": {
                    templateUrl: "./views/quiz/index.html"
                }
            }
        });

        $stateProvider.state("app.quiz.biology", {
            url: "/biology",
            views: {
                "content@": {
                    templateUrl: "./views/quiz/biology.html"
                }
            }
        });

        $stateProvider.state("app.quiz.it", {
            url: "/it",
            views: {
                "content@": {
                    templateUrl: "./views/quiz/it.html"
                }
            }
        });

        $stateProvider.state("app.quiz.math", {
            url: "/math",
            views: {
                "content@": {
                    templateUrl: "./views/quiz/math.html"
                }
            }
        });

        $stateProvider.state("app.createField", {
            url: "/createField",
            views: {
                "content@": {
                    controller: "ContentController",
                    templateUrl: "./views/content/create-field.html"
                }
            }
        });

        $stateProvider.state("app.createTopic", {
            url: "/createTopic",
            views: {
                "content@": {
                    controller: "ContentController",
                    templateUrl: "./views/content/create-topic.html"
                }
            }
        });

        $stateProvider.state("app.createPost", {
            url: "/createPost",
            views: {
                "content@": {
                    controller: "ContentController",
                    templateUrl: "./views/content/create-post.html"
                }
            }
        });

        $stateProvider.state("app.login", {
            url: "login",
            views: {
                "content@": {
                    controller: "HeaderController",
                    templateUrl: "./views/login.html"
                }
            }
        });

        $stateProvider.state("app.signup", {
            url: "signup",
            views: {
                "content@": {
                    controller: "HeaderController",
                    templateUrl: "./views/signup.html"
                }
            }
        });


        // automated
        $stateProvider.state("app.learn.generic", { // fields showcase
            url: "/generic/:fieldId",
            views: {
                "content@": {
                    controller: function ($scope, $stateParams, DataFactory){
                        var fieldId = $stateParams.fieldId;

                        $scope.currentField = {};
                        DataFactory.getField(fieldId).once("value").then(function (snapshot){
                            $scope.currentField = snapshot.val();
                            $scope.currentField.id = snapshot.key;
                            $scope.$apply();
                        });

                    },
                    templateUrl: "./views/learn/generic.html"
                }
            }
        });

        $stateProvider.state("app.learn.generic.topic", { // topics showcase
            url: "/:topicId",
            views: {
                "main@app.learn.generic": {
                    controller: function ($scope, $stateParams, DataFactory){
                        $scope.topicId = $stateParams.topicId;
                        $scope.currentTopic = !!$scope.$parent.$parent.currentField.topics ? $scope.$parent.$parent.currentField.topics[$scope.topicId] : undefined;
                        if (!$scope.currentTopic){
                            DataFactory.getTopic($stateParams.fieldId, $scope.topicId).once("value").then(function (snapshot){
                                var results = snapshot.val();
                                $scope.currentTopic = results;
                                $scope.currentTopic.id = snapshot.key;
                                $scope.$apply();
                            });
                        }
                    },
                    templateUrl: "./views/learn/generic-topic.html"
                }
            }
        });

        $stateProvider.state("app.learn.generic.topic.post", { // posts showcase
            url: "/:postId",
            views: {
                "content@": {
                    controller: function ($scope, $stateParams){
                        $scope.postId = $stateParams.postId;
                    },
                    templateUrl: "./views/learn/generic-post.html"
                }
            }
        });
    }]);
