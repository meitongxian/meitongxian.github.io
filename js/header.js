// get header height for main content offset

let headerHeight = document.querySelector(".header").offsetHeight;
//console.log(headerHeight);
document.querySelector(".more-wrapper").style.paddingTop = "calc(" + headerHeight + "px";

window.addEventListener('resize', () => {
    let headerHeight = document.querySelector(".header").offsetHeight;
    document.querySelector(".more-wrapper").style.paddingTop = "calc(" + headerHeight + "px";
    // if (localStorage.getItem("accordion") === "on") {
    //     section.style.maxHeight = section.scrollHeight + "px";
    // }
});

// toggle hidden section
let headerMore = document.querySelector(".header-more");
let moreWrapper = document.querySelector(".more-wrapper");
let infoToggle = document.querySelector(".info-toggle");

infoToggle.addEventListener("click", () => {
        if (infoToggle.innerHTML === "(+ more info)") {
            infoToggle.innerHTML = "(- less info)";
        } else {
            infoToggle.innerHTML = "(+ more info)";
        }
    headerMore.classList.toggle("header-more_active");
    moreWrapper.classList.toggle("more-wrapper_active");
});


// header text switch

document.addEventListener("DOMContentLoaded", () => {

    let info = document.querySelector(".info");
    let infoArray = [
        `creates systems with typography, code, and research.`,
        `studied Graphic Design, mostly, at <a class="link" href="https://www.risd.edu/" target="_blank">RISD ↗︎</a>.`, 
        `is thinking, making, and meandering in New York City.`, 
    ];
    let i = 0;

    function infoChange() {
        info.style.opacity = 1;

        info.innerHTML = infoArray[i];

        i += 1;

        if (i > (infoArray.length - 1)) {
            i = 0;
        }

        setTimeout(() => {
            info.style.opacity = 0;
        }, 3600);

    }

    setInterval(infoChange, 4000);

    infoChange();

});