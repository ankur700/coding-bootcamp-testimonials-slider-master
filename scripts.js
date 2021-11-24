const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

prev.addEventListener("click", function () {
  slider.style.transform = translateX("-100%");
});

next.addEventListener("click", function () {
  slider.style.transform = translateX("100%");
});
