angular.module('noserver').service('mainSvc', function($http){


    this.getQuotes=function(){
        return $http.get('http://quotes.rest/qod.json')
    }




})