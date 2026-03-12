// Funcionalidad de búsqueda de productos - MercadoLibre Clone

// Elementos del DOM
const searchInput = document.getElementById('cb1-edit');
const productsContainer = document.getElementById('products-container');
const productCards = document.querySelectorAll('.poly-card');

// Crear mensaje de "no hay resultados"
const noResultsMessage = document.createElement('div');
noResultsMessage.className = 'no-results-message';
noResultsMessage.textContent = 'No se encontraron productos';
noResultsMessage.style.display = 'none';
productsContainer.appendChild(noResultsMessage);

// Función para filtrar productos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;
    
    productCards.forEach(card => {
        // Obtener el nombre del producto desde el título
        const productTitle = card.querySelector('.poly-component__title');
        const productName = productTitle ? productTitle.textContent : '';
        
        // Verificar si coincide con la búsqueda
        if (productName.toLowerCase().includes(searchTerm)) {
            card.style.display = 'flex';
            card.classList.add('fade-in');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        }
    });
    
    // Mostrar u ocultar mensaje de "no hay resultados"
    if (visibleCount === 0 && searchTerm !== '') {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }
    
    // Log en consola
    if (searchTerm) {
        console.log(`Buscando: ${searchTerm} - ${visibleCount} productos encontrados`);
    }
}

// Event listener para búsqueda en tiempo real
if (searchInput) {
    searchInput.addEventListener('input', filterProducts);

    // Event listener para focus del input
    searchInput.addEventListener('focus', () => {
        searchInput.classList.add('search-focused');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.classList.remove('search-focused');
    });
}

// Prevenir el envío del formulario y ejecutar búsqueda
const searchForm = document.querySelector('.nav-search');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filterProducts();
    });
}
