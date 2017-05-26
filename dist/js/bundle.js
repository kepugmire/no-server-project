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
});
'use strict';

angular.module('noserver').service('mainSvc', function ($http) {

    this.getQuotes = function () {
        return $http.get('http://quotes.rest/qod.json');
    };
});
//# sourceMappingURL=bundle.js.map
