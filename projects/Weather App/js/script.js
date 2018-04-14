// get Geolocation
const showPosition = (position) => {

    console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
    let api = "https://fcc-weather-api.glitch.me/api/current?" + "lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

    console.log("data from: " + api);

    $.getJSON(api, function(data) {
        // Getting Weather Details
        $("#place").html("Location: " + data.name + ", " + data.sys.country);
        $("#temp").html(data.main.temp + " C°");
        //$("#min").html("Min: " + data.main.temp_min + ", ");
        $("#max").html("Max: " + data.main.temp_max);
        $("#weather").html(data.weather[0].main);
        $("#weather-description").html("(" + data.weather[0].description + ")");
        // Getting Weather Icon
        let weatherIcon = document.getElementById("#weather-icon");
        weatherIcon.src = data.weather[0].icon;
    });

}

const getLocation = () => {
    if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        document.getElementById("#notification").innerHTML = "Geolocation is not supported by this browser.";
    }
}

$(document).ready(function() {
    getLocation();
});