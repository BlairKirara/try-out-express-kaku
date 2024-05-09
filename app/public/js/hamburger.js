const hamburger = document.querySelector(".hamburger-menu");
const headerLinks = document.querySelector(".nav-bar");
const pipeListItem = document.querySelector(".stick");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none'; // Toggle display
});

// Add scroll event listener to window
window.addEventListener("scroll", () => {
    // Check if hamburger menu is active
    if (hamburger.classList.contains("active")) {
        // Remove active class from hamburger menu and header links
        hamburger.classList.remove("active");
        headerLinks.classList.remove("active");
        pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none';

    }
});
