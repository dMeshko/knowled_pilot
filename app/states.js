/**
 * Created by DarkoM on 13.12.2016.
 */
app.config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider){
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

    $stateProvider.state("app.about", {
        url: "about",
        views: {
            "content@": {
                templateUrl: "./views/about.html",
                data: {
                    css: "./css/test.css"
                }
            }
        }
    });

    $stateProvider.state("app.blog", {
        url: "blog",
        views: {
            "content@": {
                templateUrl: "./views/blog.html"
            }
        }
    });

    $stateProvider.state("app.register", {
        url: "register",
        views: {
            "content@": {
                templateUrl: "./views/register.html"
            }
        }
    });
}]);