// JS for index / home view.
const locationForm = document.querySelector(".index>form");
const locationInput = document.querySelector(".location");
// make form submit upon clicking enter in input
locationInput.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        locationForm.submit();
    }
})
