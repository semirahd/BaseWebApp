/*function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}
*/
//we are going to leave the above function there and just add the Weather API function below
$(document).ready(function(){
  getWeather();
})


function getWeather(searchQuery) {
  var url ="https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&APPID="+apiKey;

  $.ajax(url,{success: function(data){

    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
    
    // this line of data logs the API call in the console --> console.log(data);
  }, error:function(error){
    $(".error-message").text("An error occured");
  }})
}

//we need to get the text that was entered into the WeatherApp Search Bar

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}