// JS for index / home view.
// Import helper functions
import { unixTimestampToLocalDateTime } from "../utilities/helper-functions.js";

const locationForm = document.querySelector(".index>form");
const locationInput = document.querySelector("#location");
const weatherRenderContainer = document.querySelector(".weatherRenderContainer");
const weatherLocationTitle = document.querySelector(".weatherLocationTitle");
const theWeatherContainer = document.querySelector(".theWeatherContainer");
const threeHour = document.querySelector(".threeHour");
const sixHour = document.querySelector(".sixHour");
const twelveHour = document.querySelector(".twelveHour");

// Grab the location and if valid use it to fetch weather data with api
const url = new URL(window.location.href);
const searchParams = url.searchParams;
const params = {};

for (const [key, value] of searchParams) {
  params[key] = value;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const locationn = params["location"];
// Perform further processing with the URL parameters
async function getWeatherByLocation(locationn){
    locationn = locationn.split(' ').join(', ');
    const coordinateResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationn}&appid=ac915a6d1258935157073b6ba78cb9f4`);
    const coordinatesData = await coordinateResponse.json();
    // Grab the lat and long
    const lat = coordinatesData[0]["lat"];
    const long = coordinatesData[0]["lon"];
    // Get weather data for those coordinates
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=ac915a6d1258935157073b6ba78cb9f4&units=imperial`);
    let weatherData = await weatherResponse.json();
    // grab the exact location name from search
    const actualWeatherLocation = weatherData["city"]["name"] + ", " + weatherData["city"]["country"];
    weatherData = weatherData["list"];

    // Render in the data to the DOM
    weatherLocationTitle.textContent = `${actualWeatherLocation} - Weather`;

      // Render weather for the next 12 hours every 3 hours
      let index = 0;
      while(index < 4){
        let weatherSectionHTML = "<div class='weatherSection'>";
        weatherSectionHTML += `<h4>${unixTimestampToLocalDateTime(weatherData[index]["dt"])}</h4>`
        weatherSectionHTML += `<p>Expected weather conditions are a temperature of ${weatherData[index]["main"]["temp"]}°F and ${weatherData[index]["weather"][0]["description"]}.</p>`
        weatherSectionHTML += `<img src='https://openweathermap.org/img/wn/${weatherData[index]["weather"][0]["icon"]}@2x.png' alt='Weather Icon'>`;
        weatherSectionHTML +="</div>";
        threeHour.innerHTML += weatherSectionHTML;
        index += 1;
      }

      // Render weather for the following 24 hours every 6 hours
      while(index < 12){
        let weatherSectionHTML = "<div class='weatherSection'>"
        weatherSectionHTML += `<h4>${unixTimestampToLocalDateTime(weatherData[index]["dt"])}</h4>`
        weatherSectionHTML += `<p>Expected weather conditions are a temperature of ${weatherData[index]["main"]["temp"]}°F and ${weatherData[index]["weather"][0]["description"]}.</p>`
                weatherSectionHTML += `<img src='https://openweathermap.org/img/wn/${weatherData[index]["weather"][0]["icon"]}@2x.png' alt='Weather Icon'>`;
        weatherSectionHTML +="</div>";
        sixHour.innerHTML += weatherSectionHTML;
        index += 2;
      }

      // Render weather for the following 72 hours every 12 hours.
      while(index < 36){
        let weatherSectionHTML = "<div class='weatherSection'>"
        weatherSectionHTML += `<h4>${unixTimestampToLocalDateTime(weatherData[index]["dt"])}</h4>`
        weatherSectionHTML += `<p>Expected weather conditions are a temperature of ${weatherData[index]["main"]["temp"]}°F and ${weatherData[index]["weather"][0]["description"]}.</p>`
                weatherSectionHTML += `<img src='https://openweathermap.org/img/wn/${weatherData[index]["weather"][0]["icon"]}@2x.png' alt='Weather Icon'>`;
        weatherSectionHTML +="</div>";
        twelveHour.innerHTML += weatherSectionHTML;
        index += 4;
      }
} if(locationn){getWeatherByLocation(locationn)};

const originalPlaceholder = locationInput.getAttribute('placeholder');

// Add an event listener for the 'focus' event
locationInput.addEventListener('focus', function() {
  // Clear the input's placeholder text on focus
  locationInput.removeAttribute('placeholder');
});

// Add an event listener for the 'blur' event
locationInput.addEventListener('blur', function() {
  // Restore the original placeholder text if the input is empty
  if (!locationInput.value.trim()) {
    locationInput.setAttribute('placeholder', originalPlaceholder);
  }
});


