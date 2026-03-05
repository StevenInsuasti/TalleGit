// Funcionalidad del Navbar - MercadoLibre Clone

// 1. Navbar fijo al hacer scroll
const navbar = document.getElementById('navbar');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
    
    lastScrollPosition = currentScrollPosition;
});

// 2. Buscador interactivo
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Función para realizar búsqueda
function realizarBusqueda() {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        console.log(`Buscando: ${searchTerm}`);
    } else {
        console.log('Por favor ingresa un término de búsqueda');
    }
}

// Búsqueda al hacer click en el botón
searchButton.addEventListener('click', realizarBusqueda);

// Búsqueda al presionar Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        realizarBusqueda();
    }
});

// 3. Animación del buscador al hacer focus
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.01)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
});


// 4. Menú hamburguesa responsive
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        
        // Animación del botón hamburguesa
        const spans = navbarToggle.querySelectorAll('span');
        if (navbarLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
            const spans = navbarToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}


// 5. Feedback visual al escribir en el buscador
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        searchButton.style.backgroundColor = '#2968c8';
        searchButton.style.transform = 'scale(1.05)';
    } else {
        searchButton.style.backgroundColor = '#3483fa';
        searchButton.style.transform = 'scale(1)';
    }
});
