document.addEventListener(
  "scroll",
  () => {
    navbar = document.querySelector("nav");

    if (window.scrollY >= navbar.offsetTop - 1) {
      navbar.classList.add("scrolled_by");
    } else {
      navbar.classList.remove("scrolled_by");
    }
  },
  {
    passive: true,
  }
);
