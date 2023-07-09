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

console.log(params["location"]);
// Perform further processing with the URL parameters

