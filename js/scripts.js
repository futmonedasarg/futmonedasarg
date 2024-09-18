window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = 'none';
    }
});

// Ocultar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            menu.style.display = 'none';
        }
    });
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Oculta el menú al cargar la página
    menu.style.display = 'none';

    menuIcon.addEventListener("click", () => {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.style.display = 'none';
        }
    });

    // Ocultar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                menu.style.display = 'none';
            }
        });
    });
});