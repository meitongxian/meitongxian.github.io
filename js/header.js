// get header height for info offset

let headerHeight = document.querySelector(".header").offsetHeight;
//console.log(headerHeight);
document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + (var(--margin)*0.75)";

window.addEventListener('resize', () => {
    let headerHeight = document.querySelector(".header").scrollHeight;
    document.querySelector(".info-wrapper").style.paddingTop = "calc(" + headerHeight + "px + (var(--margin)*0.75)";
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