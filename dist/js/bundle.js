'use strict';

angular.module('noserver', []);
'use strict';

angular.module('noserver').controller('mainCtrl', function ($scope, mainSvc) {

    var recQuotes = function recQuotes() {
        mainSvc.getQuotes().then(function (response) {
            $scope.recQuote = response.data.contents.quotes[0];
            console.log($scope.recQuote);
        });
    };
    recQuotes();

    // var recPic = function(){
    //     mainSvc.getPic().then(function(response){
    //         $scope.recPic=response.data
    //         console.log($scope.recPic)
    //     })
    // }
    // recPic()

    // var recTemp = function(){
    //     mainSvc.getTemp().then(function(response){
    //         $scope.recTemp=response
    //         console.log($scope.recTemp)
    //     })
    // }
    // recTemp()


    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        // add a zero in front of numbers<10
        m = checkTime(m);
        //   s = checkTime(s);
        document.getElementById('time').innerHTML = h + ":" + m;
        setTimeout(function () {
            startTime();
        }, 500);
    }
    startTime();
});
'use strict';

angular.module('noserver').service('mainSvc', function ($http) {

    this.getQuotes = function () {
        return $http.get('http://quotes.rest/qod.json');
    };

    // this.getPic=function(){
    //     return $http.get('http://www.splashbase.co/api/v1/images/random')
    // }

    // this.getTemp=function(){
    //     return $http.get('http://api.wunderground.com/api/97eb89c0721b402a/geolookup/forecast/hourly/q/autoip.json')
    // }

});
//# sourceMappingURL=bundle.js.map
