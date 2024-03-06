window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var background = document.querySelector(".background");
  background.style.top = -scrollPosition + "px"; // Adjust the multiplier to control the parallax effect
});
