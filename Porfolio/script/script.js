// Toggle the visibility of the navigation menu on small screens
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

// Close the menu when a link is clicked (for single-page navigation)
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});
