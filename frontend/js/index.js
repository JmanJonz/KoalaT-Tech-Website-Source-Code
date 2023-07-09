// JS for index / home view

// If the user navigates to the website and it has been a while send them to the entrance view, if it hasn't been more than 1 minutes since navigation don't redirect to navigation view
// Check if entrance page has been visited before
let hasVisitedEntrance = localStorage.getItem('hasVisitedEntrance');
if (hasVisitedEntrance == null || hasVisitedEntrance == ""){
    hasVisitedEntrance = false;
}
console.log(hasVisitedEntrance);
if (!hasVisitedEntrance || hasVisitedEntrance == false) {
  // Set flag in localStorage to indicate entrance page has been visited
  window.location.href = "frontend/views/entrance.html";
} else {
  // Redirect to the homepage if entrance page has been visited before
  // Do nothing because we are already at the home page
}
// Set flag to false after 30 seconds
setTimeout(() => {
    localStorage.removeItem('hasVisitedEntrance');
  }, 150000); // 60 seconds delay (30000 milliseconds)

// Index main homepage functionality
// open and close navigation
const navBTN = document.querySelector(".navBTN");
const nav = document.querySelector(".navigation");
const closeNavBTN = document.querySelector(".navigation>p");
navBTN.addEventListener("click", function(){
    nav.classList.toggle("navOpen");
})
closeNavBTN.addEventListener("click", function(){
  nav.classList.toggle("navOpen");
})
