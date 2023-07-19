// JS for index / home view.
// Import helper functions
import { unixTimestampToLocalDateTime } from "../utilities/helper-functions.js";

const locationForm = document.querySelector(".index>form");
const locationInput = document.querySelector("#location");
const weatherRenderContainer = document.querySelector(".weatherRenderContainer");
const weatherLocationTitle = document.querySelector(".weatherLocationTitle");
const theWeatherContainer = document.querySelector(".theWeatherContainer");

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
    const coordinateResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationn}&appid=ac915a6d1258935157073b6ba78cb9f4`);
    const coordinatesData = await coordinateResponse.json();
    // Grab the lat and long
    const lat = coordinatesData[0]["lat"];
    const long = coordinatesData[0]["lon"];
    // Get weather data for those coordinates
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=ac915a6d1258935157073b6ba78cb9f4&units=imperial`);
    let weatherData = await weatherResponse.json();
    // weatherDataArray = Object.keys(weatherData).map((key)=>weatherData[key]);
    weatherData = weatherData["list"];

    // Render in the data to the DOM
    weatherLocationTitle.textContent = `${capitalizeFirstLetter(locationn)} - Weather`;
      // Render weather for the next 12 hours every 3 hours
      const threeHoursInSeconds = 10800
      let hoursPast = 0;
      let index = 0;
      let timestampTracker = weatherData[0]["dt"];
      while(index < 4){
        console.log(weatherData[index]["dt"]);
        console.log(unixTimestampToLocalDateTime(weatherData[index]["dt"]));
        index += 1;
      }

      // Render weather for the following 24 hours every 6 hours
      while(index < 12){
        console.log(weatherData[index]["dt"]);
        console.log(unixTimestampToLocalDateTime(weatherData[index]["dt"]));
        index += 2;
      }

      // Render weather for the following 72 hours every 12 hours.
      while(index < 36){
        console.log(weatherData[index]["dt"]);
        console.log(unixTimestampToLocalDateTime(weatherData[index]["dt"]));
        index += 4;
      }
} getWeatherByLocation(locationn);

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


