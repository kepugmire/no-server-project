angular.module('noserver').controller('mainCtrl', function($scope, mainSvc){


    var recQuotes = function(){
        mainSvc.getQuotes().then(function(response){
            $scope.recQuote=response.data.contents.quotes[0]
            console.log($scope.recQuote)
        })
    }

    recQuotes()
    

    

})