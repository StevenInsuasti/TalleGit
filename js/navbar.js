// ========================================
// NAVBAR INTERACTIVO - MercadoLibre Clone
// ========================================

(function() {
    'use strict';

    // Elementos del DOM
    const header = document.querySelector('header');
    const navSearch = document.querySelector('.nav-search');
    const searchInput = document.querySelector('.nav-search-input');
    const clearBtn = document.querySelector('.nav-search-clear-btn');
    const closeBtn = document.querySelector('.nav-search-close-btn');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarLinks = document.getElementById('navbarLinks');

    // ========================================
    // MENÚ HAMBURGUESA
    // ========================================
    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
            
            // Animar las líneas del hamburguesa
            const spans = navbarToggle.querySelectorAll('span');
            navbarToggle.classList.toggle('open');
            
            if (navbarToggle.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!navbarToggle.contains(e.target) && !navbarLinks.contains(e.target)) {
                navbarLinks.classList.remove('active');
                navbarToggle.classList.remove('open');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Cerrar menú al hacer click en un link
        navbarLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navbarLinks.classList.remove('active');
                navbarToggle.classList.remove('open');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

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

    // ========================================
    // FUNCIONALIDAD DEL BUSCADOR
    // ========================================
    
    // Mostrar/ocultar botón de limpiar según el contenido
    let timeout;
    function updateClearButton() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if (searchInput.value.length > 0) {
                navSearch.classList.add('nav-search--has-text');
            } else {
                navSearch.classList.remove('nav-search--has-text');
            }
        }, 100);
    }

    if (searchInput) {
        searchInput.addEventListener('input', updateClearButton);
    }

    // Limpiar búsqueda
    if (clearBtn) {
        clearBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            searchInput.value = '';
            updateClearButton();
            setTimeout(function() {
                searchInput.focus();
            }, 50);
        });
    }

    // Cerrar búsqueda (móvil)
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            searchInput.value = '';
            updateClearButton();
            searchInput.blur();
        });
    }

})();

