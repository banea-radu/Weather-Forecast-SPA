// SERVICES
weatherApp.service('cityService', function() {
    
    this.city = 'Sibiu';
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, count) {
        var weatherAPI =
            $resource(
                "https://api.openweathermap.org/data/2.5/forecast?appid=80443720125254880463e392be27f15c",
                { callback: "JSON_CALLBACK" },
                { get: { method: "JSONP" }}
            );

        return weatherAPI.get({ q: city, cnt: count });
    };
    
}]);