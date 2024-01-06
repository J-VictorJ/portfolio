//                                   Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
//                                    Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");
const homeImg = document.querySelector(".home-img");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Background img color change
    if (document.body.classList.contains("dark")) {
        homeImg.style.backgroundColor = "#151515"; // dark
    } else {
        homeImg.style.backgroundColor = "#f2f2fc"; // original
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        homeImg.style.backgroundColor = "#151515";
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        homeImg.style.backgroundColor = "#f2f2fc";
    }
});

