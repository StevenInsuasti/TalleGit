// ========================================
// NAVBAR INTERACTIVO - MercadoLibre Clone
// ========================================

(function() {
    'use strict';

    // Elementos del DOM
    const header = document.querySelector('header');

    // ========================================
    // NAVBAR FIJO AL HACER SCROLL
    // ========================================
    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        // Agregar clase cuando se hace scroll hacia abajo
        if (currentScrollY > 50) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    // Optimización con requestAnimationFrame
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);

})();
