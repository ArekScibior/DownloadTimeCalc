app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'download-template.html',
            controller: 'downloadCtrl'
        }).
        otherwise({
            templateUrl: 'download-template.html',
            controller: 'downloadCtrl'
        })
}]);

app.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
}]);