angular.module('noserver').controller('mainCtrl', function ($scope, mainSvc) {



    var recQuotes = function () {
        mainSvc.getQuotes().then(function (response) {
            $scope.recQuote = response.data.contents.quotes[0]
            console.log($scope.recQuote)
        })
    }
    recQuotes()

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
            startTime()
        }, 500);
    }
    startTime();










})