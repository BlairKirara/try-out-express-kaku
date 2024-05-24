const hamburger = document.querySelector(".hamburger-menu");
const headerLinks = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar a");
const stickElements = document.querySelectorAll('.stick');

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

// Function to update visibility of stick elements
function updateStickVisibility() {
  stickElements.forEach(stickElement => {
    if (window.innerWidth <= 900) {
      stickElement.classList.add('hidden');
    } else {
      stickElement.classList.remove('hidden');
    }
  });
}

// Initial check
updateStickVisibility();

// Update on resize
window.addEventListener('resize', updateStickVisibility);
