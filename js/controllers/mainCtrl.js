angular.module('noserver').controller('mainCtrl', function ($scope, mainSvc) {
    
    /////////////
    /*  QUOTE  */
    /////////////
    
    var recQuotes = function () {
        mainSvc.getQuotes().then(function (response) {
            $scope.recQuote = response.data.contents.quotes[0]
            console.log($scope.recQuote)
        })
    }
    recQuotes()

    /////////////
    /*  TEMP  */
    /////////////

    var recTemp = function () {
        mainSvc.getTemp().then(function (response) {
            $scope.forecast = response.data.forecast.simpleforecast.forecastday[0];
            $scope.city = response.data.location.city
        })
    }
    recTemp()

    /////////////
    /*  TIME */
    /////////////

    // function checkTime(i) {
    //     if (i < 10) {
    //         i = "0" + i;
    //     }
    //     return i;
    // }
    // function startTime() {
    //     var today = new Date();
    //     var h = today.getHours();
    //     var m = today.getMinutes();
    //     // add a zero in front of numbers<10
    //     m = checkTime(m);
    //     //   s = checkTime(s);
    //     document.getElementById('time').innerHTML = h + ":" + m;
    //     setTimeout(function () {
    //         startTime()
    //     }, 500);
    // }
    // startTime();

    var timeStamp = new Date();
   $scope.time = moment(timeStamp).format('h:mm')
    console.log($scope.time)






})