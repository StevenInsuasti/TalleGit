// Funcionalidad de búsqueda de productos - MercadoLibre Clone

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const productsContainer = document.getElementById('products-container');
const productCards = document.querySelectorAll('.product-card');

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
        // Obtener el nombre del producto
        const productName = card.getAttribute('data-product-name') || 
                           card.querySelector('h3')?.textContent || '';
        
        // Verificar si coincide con la búsqueda
        if (productName.toLowerCase().includes(searchTerm)) {
            card.style.display = 'block';
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
searchInput.addEventListener('input', filterProducts);

// Event listener para focus del input
searchInput.addEventListener('focus', () => {
    searchInput.classList.add('search-focused');
});

searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('search-focused');
});
