document.addEventListener(
  "scroll",
  () => {
    navbar = document.querySelector("nav");

    if (window.scrollY > navbar.offsetTop) {
      navbar.classList.add("scrolled_by");
    } else {
      navbar.classList.remove("scrolled_by");
    }
  },
  {
    passive: true,
  }
);

document.querySelector("#clipboard").addEventListener("click", async () => {
  var textToCopy = document.querySelector("#adress");
  await navigator.clipboard.writeText(textToCopy.textContent);
  alert("Play.alve.dev has been copied to your clipboard");
});
