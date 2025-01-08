// get header height for info offset

let headerHeight = document.querySelector(".header").offsetHeight;
//console.log(headerHeight);
document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + var(--margin)";

window.addEventListener('resize', () => {
    let headerHeight = document.querySelector(".header").offsetHeight;
    document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + var(--margin)";
});

// toggle hidden section

let hideToggle = document.querySelector(".hide-toggle");
let section = document.querySelector(".hide-section");

hideToggle.addEventListener("click", () => {
    section.classList.toggle("hide");
    if (hideToggle.innerHTML === "(+ more info)") {
        hideToggle.innerHTML = "(- less info)";
    } else {
        hideToggle.innerHTML = "(+ more info)";
    }
});