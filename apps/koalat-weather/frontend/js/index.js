// JS for index / home view.
const locationForm = document.querySelector(".index>form");
const locationInput = document.querySelector(".location");
const weatherRenderContainer = document.querySelector(".weatherRenderContainer");

// make form submit upon clicking enter in input
// locationInput.addEventListener("keypress", (event)=>{
//     if(event.key === "Enter"){
//         event.preventDefault();
//         locationForm.submit();
//     }
// })
// Grab the location and if valid use it to fetch weather data with api
const url = new URL(window.location.href);
const searchParams = url.searchParams;
const params = {};

for (const [key, value] of searchParams) {
  params[key] = value;
}

const locationn = params["location"];
// Perform further processing with the URL parameters
async function getWeatherByLocation(locationn){
    locationn = locationn.split(' ').join(',');
    const coordinateResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationn}&appid=ac915a6d1258935157073b6ba78cb9f4`);
    const coordinatesData = await coordinateResponse.json();
    // Grab the lat and long
    const lat = coordinatesData[0]["lat"];
    const long = coordinatesData[0]["lon"];
    // Get weather data for those coordinates
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=ac915a6d1258935157073b6ba78cb9f4&units=imperial`);
    const weatherData = await weatherResponse.json();
    weatherDataString = JSON.stringify(weatherData);
    weatherRenderContainer.innerHTML = weatherDataString;

} getWeatherByLocation(locationn);

