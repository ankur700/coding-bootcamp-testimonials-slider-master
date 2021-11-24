const prev = document.getElementById("prev");
const next = document.getElementById("next");
const inner = document.getElementById("inner");

prev.addEventListener("click", function () {
  inner.style.transform = "translateX(0%)";
});

next.addEventListener("click", function () {
  inner.style.transform = "translateX(-100%)";
});
