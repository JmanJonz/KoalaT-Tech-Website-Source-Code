// Entrance page button functionality and instructions
const entranceButton = document.querySelector(".entrance img.entrance_logo");
const entrancepage = document.querySelector(".entrance");
const header = document.querySelector("header")
const main = document.querySelector("main");
const footer = document.querySelector("footer");

entranceButton.addEventListener("click", ()=>{
    entrancepage.style.display = "none";
    header.style.display = "flex";
    main.style.display = "block";
    footer.style.display = "block";
});