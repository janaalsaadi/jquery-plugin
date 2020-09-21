
function getLocation() {
    if (navigator.geolocation) {
      var myLocation = navigator.geolocation.getCurrentPosition(function(position){
        var myLatitude = parseFloat(position.coords.latitude);
        var myLongitude = parseFloat(position.coords.longitude);
        getWeather(myLatitude, myLongitude);
      });
    }
    else {
      alert("Gelocation is not supported by this browser.")
    }
  }
  getLocation();

  function getWeather(latitude, longitude){
    var myUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" +latitude + "&lon=" +longitude;
    $.ajax({
      method: "GET",
      url: myUrl,
      cache: false,
      dataType: "json",
    }).done(function(data){
        var weatherDescription = (data.weather[0].description).split(' ');
        var weatherDescriptionFormatted = [];
        if (weatherDescription.length > 0) {
          weatherDescription.forEach(function(element){
            weatherDescriptionFormatted.push((element.charAt(0).toUpperCase() + element.substr(1, element.length)));
          });
        }
        else {
          weatherDescriptionFormatted.push((weatherDescription.charAt(0).toUpperCase() + weatherDescription.substr(1, weatherDescription.length)));
        }
        weatherDescriptionFormatted = weatherDescriptionFormatted.join(' ');
        $("#description").html(weatherDescriptionFormatted);
        $("#location").html("Location: " +data.name);
        $("#weather-pic").attr("src", data.weather[0].icon);

        var currentTemp = data.main.temp;
        var currentTempFahrenheit = (currentTemp * 9/5) + 32;
        $("#current-temp").html(Math.floor(currentTempFahrenheit) + "&#176;");
        $("#current-tem").html(Math.floor(currentTemp) + "&#176;");

    });
  }
