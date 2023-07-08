// JS for entrance View

// used in index.js to check if it should display the entrance or not
localStorage.setItem('hasVisitedEntrance', 'true');

// Index Entrance page button functionality and instructions
const entranceButton = document.querySelector(".entrance img.entrance_logo");
entranceButton.style.zIndex = "1";
const entrancepage = document.querySelector(".entrance");

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
        if (timesMoved < 250){
            entranceButton.style.transform = `translatex(${timesMoved * 5}px)`;
            timesMoved += 5;
            setTimeout(() => {
                requestAnimationFrame(animateImage);
            }, 1000);
        }
    }
    animateImage();
}, 1500);
entranceButton.addEventListener("click", ()=>{
    entrancepage.innerHTML = "";
    entrancepage.style.display = "none";
    window.location.href = "../../"
});