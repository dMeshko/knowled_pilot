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
                    templateUrl: "./views/learn/biology.html"
                }
            }
        });

        $stateProvider.state("app.learn.it", {
            url: "/it",
            views: {
                "content@": {
                    templateUrl: "./views/learn/it.html"
                }
            }
        });

        $stateProvider.state("app.learn.math", {
            url: "/math",
            views: {
                "content@": {
                    templateUrl: "./views/learn/math.html"
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

    }]);