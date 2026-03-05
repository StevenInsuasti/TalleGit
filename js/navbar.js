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
