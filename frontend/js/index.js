// JS for index / home view

// If the user navigates to the website and it has been a while send them to the entrance view, if it hasn't been more than 1 minutes since navigation don't redirect to navigation view
// Check if entrance page has been visited before
  // Get the last visit time from localStorage
  const lastVisitString = localStorage.getItem("lastVisit");

  // Parse the lastVisitString back to a Date object
  const lastVisit = new Date(lastVisitString);

  // Set the current visit time
  const now = new Date();
  localStorage.setItem("lastVisit", now.toJSON());

  // Check if it has been over a day since the last visit
  const difference = now - lastVisit;
  const daysSinceLastVisit = Math.floor(difference / (1000 * 60 * 60 * 24));

  // If it has been over a day, do something
  if (daysSinceLastVisit > 1) {
    window.location.href = "frontend/views/entrance.html";
  }else{
    // Redirect to the homepage if entrance page has been visited before
    // Do nothing because we are already at the home page
}





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
