const rocks = document.querySelector(".hero_rocks");
const planet = document.querySelector(".hero_planet");
const bg = document.querySelector(".hero_bg");
const hero_text = document.querySelector(".hero_text");

window.addEventListener("scroll", function () {
  const valueY = window.scrollY;
  rocks.style.top = valueY * 0.75 + "px";
  bg.style.top = valueY * 0.7 + "px";
  bg.style.scale = 1 + valueY * 0.00005;
  hero_text.style.top = valueY * 0.75 + "px";
  planet.style.top = valueY * 0.6 + "px";
  planet.style.scale = 1 + valueY * 0.0006;
});
