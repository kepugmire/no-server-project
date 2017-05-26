angular.module('noserver').service('mainSvc', function($http){


    this.getQuotes=function(){
        return $http.get('http://quotes.rest/qod.json')
    }

    // this.getPic=function(){
    //     return $http.get('http://www.splashbase.co/api/v1/images/random')
    // }

    // this.getTemp=function(){
    //     return $http.get('http://api.wunderground.com/api/97eb89c0721b402a/geolookup/forecast/hourly/q/autoip.json')
    // }





})