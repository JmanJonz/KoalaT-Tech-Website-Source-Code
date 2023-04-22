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

setTimeout(() => {
    const entrance_instructions = document.createElement("p");
    entrance_instructions.textContent = "Click the koala to continue to site.";
    entranceText = document.querySelector(".entrancetext")
    entranceText.append(entrance_instructions);
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
}, 2500);