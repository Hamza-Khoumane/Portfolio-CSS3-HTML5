const hamburgerContainer = document.querySelector(".main__nav");

const hamburger = document.querySelector(".main__nav--hamburguer");

const links = document.querySelector(".main__nav--links a");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
