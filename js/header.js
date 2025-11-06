// get header height for info offset

let headerHeight = document.querySelector(".header").offsetHeight;
//console.log(headerHeight);
document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + var(--margin)";

window.addEventListener('resize', () => {
    let headerHeight = document.querySelector(".header").offsetHeight;
    document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + var(--margin)";
    if (localStorage.getItem("accordion") === "on") {
        section.style.maxHeight = section.scrollHeight + "px";
    }
});

// toggle hidden section

let hideToggle = document.querySelector(".hide-toggle");
let section = document.querySelector(".hide-section");

hideToggle.addEventListener("click", () => {
    accordion();
});

function accordion() {
    if (hideToggle.innerHTML === "(+ more info)") {
        localStorage.setItem("accordion", "on");
        hideToggle.innerHTML = "(- less info)";
    } else {
        localStorage.setItem("accordion", "off");
        hideToggle.innerHTML = "(+ more info)";
    }
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        section.style.opacity = null;
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.style.opacity = 1;
    }
}