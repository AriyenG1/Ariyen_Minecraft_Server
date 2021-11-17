function handleScroll() {
    navbar = document.querySelector("nav");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled_by");
    } else {
        navbar.classList.remove("scrolled_by");
    }
}

async function handleClipboardClick() {
    var textToCopy = document.querySelector("#adress").textContent;
    await navigator.clipboard.writeText(textToCopy);
    alert("play.alve.dev has been copied to your clipboard");
}

document.addEventListener("scroll", handleScroll, {passive: true});
document.querySelector("#clipboard").addEventListener("click", handleClipboardClick);
