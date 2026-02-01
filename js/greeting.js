let greetingTag = document.querySelector(".greeting-tag");
let timeNow = new Date().getHours();
let greeting =
    timeNow >= 5 && timeNow < 12
        ? "Good morning!"
        : timeNow >=12 && timeNow < 18
        ? "Good afternoon!"
        : "Good evening!";
greetingTag.innerHTML = `${greeting}`;