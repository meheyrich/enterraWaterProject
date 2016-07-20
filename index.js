$(document).ready(function() {  //Starts the function
    
    $.getJSON("http://ip-api.com/json", function(data) {  //Gets API for location from IP API
        
        //These define variables for different location data
        var state = data.region;
        var isp = data.isp;
        var lat = data.lat;
        var lon = data.lon;
        var city = data.city;
        var country = data.country;
        $("#init").html("You are in " + city + ", " + state + ", " + country + ".");  //Prints some location data as HTML
        
        $.getJSON("http://api.wunderground.com/api/c64321db8a02c5bb/conditions/q/" + lat + "," + lon + ".json", function(input) {  Gets API for weather
           
            //Define variables for weather data
            var uv = input.current_observation.UV;
            
        });
        
    });
    
});
