// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
       cityService.city = $scope.city;                                  
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.count = $routeParams.count || '3';
                                             
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.count);
    
    $scope.convertKelvinToDegreeCelsius = function(degK) {
        
        return (degK - 273.15).toFixed(1);
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
        
    }
    
    console.log($scope.weatherResult);

}]);