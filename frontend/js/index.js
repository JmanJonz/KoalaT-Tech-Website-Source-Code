// Index Entrance page button functionality and instructions
const entranceButton = document.querySelector(".entrance img.entrance_logo");
entranceButton.style.zIndex = "1";
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

setTimeout(() => {
    const entrance_instructions = document.createElement("p");
    entrance_instructions.textContent = "Click the koala to continue to site.";
    entrancepage.append(entrance_instructions);
    entrance_instructions.style.position = "absolute";
    entrance_instructions.style.bottom = "22px";
    entrance_instructions.style.left = "75px";
    entrance_instructions.style.color = "#659dbd";
    entrance_instructions.style.fontSize = "1.1rem";
    entrance_instructions.style.marginTop = "6px";

    let timesMoved = 0;
    function animateImage(){
        if (timesMoved < 500){
            entranceButton.style.transform = `translatex(${timesMoved * 5}px)`;
            timesMoved += 1;
            setTimeout(() => {
                requestAnimationFrame(animateImage);
            }, 1000);
        }
    }
    animateImage();
}, 1500);

// Index main homepage functionality
// open and close navigation
const navBTN = document.querySelector(".navBTN");
const nav = document.querySelector(".navigation");
navBTN.addEventListener("click", function(){
    nav.classList.toggle("navOpen");
})