const scrollElements = document.querySelectorAll(".js_scroll");
const planet = document.querySelector(".hero_planet");
const rocks = document.querySelector(".hero_rocks");
const bg = document.querySelector(".hero_bg");
// Typing animation
let typed = new Typed(".auto-typer", {
  strings: ["dolor amet", "sin itur decen"],
  typeSpeed: 230,
  backSpeed: 160,
  loop: true,
});

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  handleScrollAnimation();
  planet.style.left = value * 0.2 + "px";
  rocks.style.top = value * 0.3 + "px";
  // bg.style.top = value * 0.4 + "px";
});

//***** Hamburger menu *****/ 
window.addEventListener("click", () => {
  const menu = document.querySelector(".hamburger_menu_button");
  menu.classList.toggle("open");
  document.querySelector(".nav_links").classList.toggle("open");
});
