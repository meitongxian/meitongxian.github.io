/*
let starArray = ["‧", "₊", "˚", "✩", "｡", "⋆", "˙", "⟡"];

window.addEventListener('mousemove', function(sparkle) {
    let arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function(i) {
        var x = (1 - i) * 100;
        let star = document.createElement("span");
        star.className = 'star';

        star.style.top = sparkle.pageY + Math.round(Math.random() * x - x / 2) + 'px';
        star.style.left = sparkle.pageX + Math.round(Math.random() * x - x / 2) + 'px';

        let icon = starArray[Math.floor(Math.random()*starArray.length)];
        star.innerText = icon;

        document.body.appendChild(star);

        window.setTimeout(function() {
            document.body.removeChild(star);
        }, Math.round(Math.random() * i * 300));
    });
}, false);*/

