
function loadDisplayTemperature(response){
  let loadTemperature=document.querySelector("#temperature");
  loadTemperature.innerHTML=Math.round(response.data.main.temp);

  let loadDescription=document.querySelector("#description");
  loadDescription.innerHTML=(response.data.weather[0].description);

  let loadHumidity=document.querySelector("#humidity");
  loadHumidity.innerHTML=Math.round(response.data.main.humidity);

  let loadWind=document.querySelector("#wind");
  loadWind.innerHTML=Math.round(response.data.wind.speed);

  let loadIcon=document.querySelector("#icon");
  loadIcon.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  celciusTemperature=(response.data.main.temp);
 
  

}

let apiKey = "04e33782c3a1504fe52423621fcf24dd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(loadDisplayTemperature);

let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day} , ${hours}:${minutes}`;

function getWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#icon").setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  celciusTemperature=response.data.main.temp;
}

let celciusTemperature=null;


function search(event) {
  event.preventDefault();

  let apiKey = "04e33782c3a1504fe52423621fcf24dd";
  let city = document.querySelector("#city-input").value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getWeatherCondition);

  //let cityElement = document.querySelector("#city");

  //let cityInput = document.querySelector("#city-input");

  //cityElement.innerHTML = cityInput.value;
  //make an api call to open weather
  //display entered city and weather

 
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = celciusTemperature;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
 
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
 temperatureElement.innerHTML=Math.round(celciusTemperature);
  
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", convertToCelcius);

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);

  function searchCity(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    let apiKey = "04e33782c3a1504fe52423621fcf24dd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);


  }

 //function showForecast(response){
   //let forecastElement=document.querySelector("#forecast");
  // let forecast=response.data.list[0];

  // forecastElement.innerHTML=` <div class="card-body" id="forecast"> 12:00  ${forecast.main.temp_max}° <img src="#"></div>`


 //}
//function getForecast(event){
  //let city=document.querySelector("city-input").value;
  //let apiKey="04e33782c3a1504fe52423621fcf24dd"
  //let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units==metirc`;
//axios.get(apiUrl)then(showForecast);
//}
}
