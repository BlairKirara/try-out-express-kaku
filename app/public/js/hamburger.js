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

function toggleMenu() {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");

    const bars = document.querySelectorAll(".hamburger-menu span.bar");
    bars.forEach(bar => {
        bar.classList.toggle("change");
    });
}

function closeMenu() {
    hamburger.classList.remove("active");
    headerLinks.classList.remove("active");

    const bars = document.querySelectorAll(".hamburger-menu span.bar");
    bars.forEach(bar => {
        bar.classList.remove("change");
    });
}

navLinks.forEach(link => {
    link.addEventListener("focus", () => {
        if (!headerLinks.classList.contains("active")) {
            toggleMenu();
        }
    });

    link.addEventListener("blur", (event) => {
        const newlyFocusedElement = event.relatedTarget;
        if (!headerLinks.contains(newlyFocusedElement)) {
            closeMenu();
        }
    });
});

function updateStickVisibility() {
  stickElements.forEach(stickElement => {
    if (window.innerWidth <= 900) {
      stickElement.classList.add('hidden');
    } else {
      stickElement.classList.remove('hidden');
    }
  });
}

updateStickVisibility();

window.addEventListener('resize', updateStickVisibility);
