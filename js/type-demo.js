//technically works but has minor logical error?

let demoWrapper = document.querySelectorAll(".demo-wrapper");
let sliders = document.querySelectorAll(".slider");
let sliderValues = document.querySelectorAll(".output");

for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = sliders[i].value;
}

sliders.forEach(slider => {
    let sliderIndex = slider.getAttribute("data-index");
    let output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      if (sliderIndex === "4" || sliderIndex === "5") {
        demoWrapper.forEach(demo => { 
          demo.style.setProperty(`--${this.id}`, this.value + "px");
          output.innerHTML = this.value;
        });
      } else {
        demoWrapper.forEach(demo => { 
          demo.style.setProperty(`--${this.id}`, this.value);
          output.innerHTML = this.value;
        });
      }
    };
});