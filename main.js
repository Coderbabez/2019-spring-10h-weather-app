$(document).ready(function(){
	// When the button is clicked, get the value from the text field, and call getWeather with the text as the argument.

});

// Write a function called displayWeather that takes one parameter, weather.
// Use an if statement to display the appropriate image from the img folder based on the value of weather.
// If there is no match, display the na image.
// Possible Weather values are: Thunderstorm, Drizzle, Rain, Snow, Clouds, Clear, Extreme




/** DON'T EDIT **/
function getWeather(query){
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=1ae7bfb22f272700d9eafbc95c46f842";
  $.getJSON(url, function(response) {
        console.log("SUCCESS");
        console.log(response);

        parseJSON(response);
      }
    ).fail(function(response) {
      console.log("ERROR");
      console.log(response);
    });
}

function parseJSON(response){
  var weather = response['weather'][0]['main'];
  displayWeather(weather);
}
