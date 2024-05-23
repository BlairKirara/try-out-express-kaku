const hamburger = document.querySelector(".hamburger-menu");
const headerLinks = document.querySelector(".nav-bar");
const pipeListItem = document.querySelector(".stick");
const navLinks = document.querySelectorAll(".nav-bar a");

hamburger.addEventListener("click", () => {
    toggleMenu();
});

window.addEventListener("scroll", () => {
    if (hamburger.classList.contains("active")) {
        closeMenu();
    }
});

// Function to toggle the menu
function toggleMenu() {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none';
    
    // Toggle between hamburger and X
    const bars = document.querySelectorAll(".hamburger-menu span.bar");
    bars.forEach(bar => {
        bar.classList.toggle("change");
    });
}

// Function to close the menu
function closeMenu() {
    hamburger.classList.remove("active");
    headerLinks.classList.remove("active");
    pipeListItem.style.display = pipeListItem.style.display === 'none' ? '' : 'none';
    
    // Reset the bars to hamburger
    const bars = document.querySelectorAll(".hamburger-menu span.bar");
    bars.forEach(bar => {
        bar.classList.remove("change");
    });
}

// Add focus and blur event listeners to nav links
navLinks.forEach(link => {
    link.addEventListener("focus", () => {
        if (!headerLinks.classList.contains("active")) {
            toggleMenu();
        }
    });
    
    link.addEventListener("blur", (event) => {
        // Check if the newly focused element is still within the nav bar
        const newlyFocusedElement = event.relatedTarget;
        if (!headerLinks.contains(newlyFocusedElement)) {
            closeMenu();
        }
    });
});
