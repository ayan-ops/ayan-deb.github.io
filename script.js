// Mobile navigation

function toggleMenu() {

    const nav = document.getElementById("nav-menu");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("nav-menu")
            .classList.remove("active");

    });

});


// Automatically update copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();