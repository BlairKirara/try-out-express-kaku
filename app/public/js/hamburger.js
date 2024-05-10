const hamburger = document.querySelector(".hamburger-menu");
const headerLinks = document.querySelector(".nav-bar");
const pipeListItem = document.querySelector(".stick");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none';
});

window.addEventListener("scroll", () => {
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        headerLinks.classList.remove("active");
        pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none';

    }
});
