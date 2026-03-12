// Interacciones del Navbar y Productos

// Carrito de compras global
let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== CATEGORÍAS ==========
    const categoriesLink = document.getElementById('categoriesLink');
    
    categoriesLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCategoriesModal();
    });
    
    function showCategoriesModal() {
        const categories = [
            { name: 'Celulares', icon: '📱', filter: 'celular' },
            { name: 'Televisores', icon: '📺', filter: 'televisor' },
            { name: 'Consolas', icon: '🎮', filter: 'consola' },
            { name: 'Computadores', icon: '💻', filter: 'computador' }
        ];
        
        let modalHTML = `
            <div class="modal-overlay" id="categoriesModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Categorías</h2>
                        <button class="modal-close" onclick="closeModal('categoriesModal')">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="categories-grid">
        `;
        
        categories.forEach(cat => {
            modalHTML += `
                <div class="category-item" onclick="filterByCategory('${cat.filter}')">
                    <span class="category-icon">${cat.icon}</span>
                    <span class="category-name">${cat.name}</span>
                </div>
            `;
        });
        
        modalHTML += `
                        </div>
                        <button class="btn-secondary" onclick="showAllProducts()" style="margin-top: 20px; width: 100%;">Ver todos los productos</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // ========== CARRITO DE COMPRAS ==========
    const cartLink = document.getElementById('historyLink');
    
    // Cambiar el texto del link
    if (cartLink) {
        cartLink.textContent = 'Carrito';
    }
    
    cartLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCartModal();
    });
    
    // ========== NUESTRO EQUIPO ==========
    const teamLink = document.getElementById('teamLink');
    
    teamLink.addEventListener('click', function(e) {
        e.preventDefault();
        showTeamModal();
    });
    
    function showTeamModal() {
        const team = [
            {
                id: 'dev-1',
                name: 'Steven Eraso Insuasti',
                title: 'Desarrollador Web Full Stack',
                level: 'Estudiante de quinto semestre',
                avatar: 'https://cdn.picrew.me/shareImg/org/202603/1868017_C3RYFmMR.png',
                description: 'Desarrollador web apasionado por la creación de interfaces modernas y funcionales. Me enfoco en construir aplicaciones web eficientes, limpias y fáciles de usar, con especial interés en el desarrollo frontend y la experiencia de usuario.',
                services: ['Desarrollo de páginas web', 'Diseño de interfaces UI', 'Maquetación con HTML y CSS', 'Integración con JavaScript'],
                technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
                contribution: 'Implementé la sección de lista de productos destacados (product-list), desarrollando la estructura HTML con tarjetas de productos que incluyen imágenes, precios, descuentos y opciones de envío.',
                phone: '3001234567',
                github: 'https://github.com/StevenInsuasti'
            },
            {
                id: 'dev-2',
                name: 'Sebastian Orlando Manchabajoy',
                title: 'Desarrollador Web Full Stack',
                level: 'Estudiante de quinto semestre',
                avatar: 'https://cdn.picrew.me/shareImg/org/202603/1564386_HzwDTpUt.png',
                description: 'Desarrollador web apasionado por crear experiencias digitales excepcionales. Me especializo en el desarrollo frontend y backend, con un enfoque en la creación de aplicaciones web modernas, responsivas y eficientes.',
                services: ['Desarrollo de aplicaciones web responsivas', 'Diseño e implementación de interfaces de usuario', 'Desarrollo de APIs RESTful', 'Optimización de rendimiento web', 'Integración de bases de datos'],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Git'],
                contribution: 'Participé en la integración y coordinación del proyecto, asegurando que todos los componentes trabajaran de manera cohesiva. Colaboré en la estructura general del sitio y en la implementación de mejoras visuales.',
                phone: '3203831186',
                github: 'https://github.com/SebastianRosero163'
            },
            {
                id: 'dev-3',
                name: 'Hector Alejandro Riascos Insuasty',
                title: 'Ingeniero de Software',
                level: 'Estudiante de quinto semestre',
                avatar: 'https://cdn.picrew.me/shareImg/org/202603/2795963_8jTsflNt.png',
                description: 'Desarrollador enfocado en desarrollo web y construcción de interfaces funcionales. Interesado en arquitectura de software, desarrollo frontend y colaboración en proyectos usando control de versiones con Git.',
                services: ['Desarrollo de interfaces web', 'Implementación de funcionalidades JavaScript', 'Integración de componentes frontend', 'Control de versiones con Git y GitHub'],
                technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
                contribution: 'Implementé la funcionalidad de búsqueda de productos (product search), desarrollando la estructura del buscador, la lógica de captura del input del usuario y el filtrado de productos.',
                phone: '3226679615',
                github: 'https://github.com/HectorRiascos'
            },
            {
                id: 'dev-4',
                name: 'Tatiana Torres Gomez',
                title: 'Desarrolladora de Software en formación',
                level: 'Estudiante de quinto semestre',
                avatar: 'https://cdn.picrew.me/shareImg/org/202603/43383_zHWfr2hG.png',
                description: 'Estudiante de ingeniería de software apasionada por la tecnología, el desarrollo de software y el diseño de experiencias digitales. Me interesa especialmente el desarrollo de videojuegos, el modelado 3D y la creación de interfaces interactivas.',
                services: ['Desarrollo de software básico', 'Desarrollo web básico', 'Diseño y modelado 3D', 'Diseño de interfaces de usuario', 'Apoyo en desarrollo de proyectos académicos de software'],
                technologies: ['Python', 'HTML', 'CSS', 'Blender (modelado 3D)', 'Git', 'GitHub', 'Bases de datos básicas', 'Diseño de interfaces'],
                contribution: 'Participación en el desarrollo del proyecto mediante apoyo en programación, organización del código y aporte de ideas para la implementación de funcionalidades y mejora de la interfaz.',
                phone: '3169816313',
                github: 'https://github.com/TatianaUCC'
            }
        ];
        
        let modalHTML = `
            <div class="modal-overlay" id="teamModal">
                <div class="modal-content modal-team">
                    <div class="modal-header">
                        <h2>Nuestro Equipo</h2>
                        <button class="modal-close" onclick="closeModal('teamModal')">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="team-grid">
        `;
        
        team.forEach(member => {
            modalHTML += `
                <article class="team-member" id="${member.id}-modal">
                    <div class="team-member-header">
                        <div class="team-avatar">
                            <img src="${member.avatar}" alt="${member.name}">
                        </div>
                        <div class="team-info">
                            <h3>${member.name}</h3>
                            <p class="team-title">${member.title}</p>
                            <p class="team-level">${member.level}</p>
                        </div>
                    </div>
                    
                    <div class="team-member-body">
                        <div class="team-description">
                            <h4>Sobre mí</h4>
                            <p>${member.description}</p>
                        </div>
                        
                        <div class="team-services">
                            <h4>Servicios</h4>
                            <ul>
                                ${member.services.map(service => `<li>${service}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="team-technologies">
                            <h4>Tecnologías</h4>
                            <div class="tech-tags">
                                ${member.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="team-contribution">
                            <h4>Aporte al proyecto</h4>
                            <p>${member.contribution}</p>
                        </div>
                    </div>
                    
                    <div class="team-member-footer">
                        <p class="team-phone">📱 ${member.phone}</p>
                        <a href="${member.github}" class="team-github" target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                        </a>
                    </div>
                </article>
            `;
        });
        
        modalHTML += `
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    function showCartModal() {
        updateCartCount();
        
        let modalHTML = `
            <div class="modal-overlay" id="cartModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Carrito de Compras (${cart.length} productos)</h2>
                        <button class="modal-close" onclick="closeModal('cartModal')">&times;</button>
                    </div>
                    <div class="modal-body">
        `;
        
        if (cart.length === 0) {
            modalHTML += '<p class="empty-message">Tu carrito está vacío</p>';
        } else {
            let total = 0;
            modalHTML += '<div class="cart-list">';
            cart.forEach((product, index) => {
                const price = parseFloat(product.price.replace(/[$.]/g, ''));
                total += price;
                modalHTML += `
                    <div class="cart-item">
                        <img src="${product.img}" alt="${product.name}">
                        <div class="cart-item-info">
                            <h4>${product.name}</h4>
                            <p class="price">${product.price}</p>
                        </div>
                        <button class="btn-remove" onclick="removeFromCart(${index})">🗑️</button>
                    </div>
                `;
            });
            modalHTML += '</div>';
            modalHTML += `
                <div class="cart-total">
                    <h3>Total: $${total.toLocaleString('es-CO')}</h3>
                    <button class="btn-primary" onclick="checkout()">Proceder al pago</button>
                    <button class="btn-secondary" onclick="clearCart()">Vaciar carrito</button>
                </div>
            `;
        }
        
        modalHTML += `
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // ========== AYUDA ==========
    const helpLink = document.getElementById('helpLink');
    
    helpLink.addEventListener('click', function(e) {
        e.preventDefault();
        showHelpModal();
    });
    
    function showHelpModal() {
        const modalHTML = `
            <div class="modal-overlay" id="helpModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Centro de Ayuda</h2>
                        <button class="modal-close" onclick="closeModal('helpModal')">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="help-section">
                            <h3>Preguntas Frecuentes</h3>
                            <div class="faq-item">
                                <h4>¿Cómo comprar?</h4>
                                <p>Selecciona el producto que deseas, agrégalo al carrito y procede al pago.</p>
                            </div>
                            <div class="faq-item">
                                <h4>¿Cuáles son los métodos de pago?</h4>
                                <p>Aceptamos tarjetas de crédito, débito y transferencias bancarias.</p>
                            </div>
                            <div class="faq-item">
                                <h4>¿Cuánto tarda el envío?</h4>
                                <p>El tiempo de entrega varía entre 2 a 5 días hábiles.</p>
                            </div>
                        </div>
                        <div class="help-contact">
                            <h3>Contacto</h3>
                            <p>📧 Email: ayuda@mercadolibre.com</p>
                            <p>📱 Teléfono: 01-800-123-4567</p>
                            <p>💬 Chat en vivo disponible 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // ========== PRODUCTOS ==========
    const productCards = document.querySelectorAll('.poly-card');
    
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            // Evitar que se active si se hace clic en un enlace
            if (e.target.tagName === 'A') return;
            
            const productName = this.querySelector('.poly-component__title').textContent.trim();
            const productPrice = this.querySelector('.andes-money-amount__fraction').textContent.trim();
            const productImg = this.querySelector('img').src;
            const productDiscount = this.querySelector('.poly-price__disc--pill')?.textContent || '';
            const productCategory = getProductCategory(productName);
            
            showProductModal(productName, '$' + productPrice, productImg, productDiscount, productCategory);
        });
    });
    
    function getProductCategory(productName) {
        const name = productName.toLowerCase();
        // Primero verificar si es TV (para evitar confusión con Samsung)
        if (name.includes('tv') || name.includes('televisor') || name.includes('qled')) {
            return 'televisor';
        } else if (name.includes('iphone') || name.includes('samsung') || name.includes('galaxy')) {
            return 'celular';
        } else if (name.includes('playstation') || name.includes('xbox') || name.includes('nintendo')) {
            return 'consola';
        } else if (name.includes('macbook') || name.includes('laptop') || name.includes('computador')) {
            return 'computador';
        }
        return 'otro';
    }
    
    function showProductModal(name, price, img, discount, category) {
        const modalHTML = `
            <div class="modal-overlay" id="productModal">
                <div class="modal-content modal-product">
                    <div class="modal-header">
                        <h2>${name}</h2>
                        <button class="modal-close" onclick="closeModal('productModal')">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="product-detail">
                            <div class="product-image">
                                <img src="${img}" alt="${name}">
                            </div>
                            <div class="product-info">
                                <p class="product-price">${price}</p>
                                ${discount ? `<p class="product-discount">${discount}</p>` : ''}
                                <p class="product-shipping">✓ Envío gratis</p>
                                <div class="product-description">
                                    <h3>Descripción</h3>
                                    <p>Producto de alta calidad con garantía oficial. Incluye todos los accesorios necesarios.</p>
                                    <ul>
                                        <li>Garantía de 1 año</li>
                                        <li>Envío gratis a todo el país</li>
                                        <li>Devolución gratis en 30 días</li>
                                    </ul>
                                </div>
                                <div class="product-actions">
                                    <button class="btn-primary" onclick='addToCartFromModal(${JSON.stringify({name, price, img, category})})'>Agregar al carrito</button>
                                    <button class="btn-secondary" onclick="buyNow('${name}')">Comprar ahora</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Actualizar contador del carrito al cargar
    updateCartCount();
});

// ========== FUNCIONES GLOBALES ==========
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
    }
}

function addToCartFromModal(product) {
    cart.push(product);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    
    // Mostrar notificación
    showNotification(`"${product.name}" agregado al carrito`);
    closeModal('productModal');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    
    // Recargar modal del carrito
    closeModal('cartModal');
    setTimeout(() => {
        document.getElementById('historyLink').click();
    }, 100);
}

function clearCart() {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
        cart = [];
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
        closeModal('cartModal');
        showNotification('Carrito vaciado');
    }
}

function checkout() {
    alert('Procesando compra...\nTotal de productos: ' + cart.length);
    closeModal('cartModal');
}

function buyNow(productName) {
    alert(`Procesando compra de "${productName}"`);
    closeModal('productModal');
}

function updateCartCount() {
    const cartLink = document.getElementById('historyLink');
    if (cartLink) {
        const count = cart.length;
        cartLink.textContent = `Carrito (${count})`;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function filterByCategory(category) {
    closeModal('categoriesModal');
    
    const allProducts = document.querySelectorAll('.poly-card');
    let visibleCount = 0;
    
    allProducts.forEach(card => {
        const productName = card.querySelector('.poly-component__title').textContent.toLowerCase();
        let shouldShow = false;
        
        if (category === 'celular') {
            // Solo celulares, excluir TVs
            if ((productName.includes('iphone') || productName.includes('samsung') || productName.includes('galaxy')) 
                && !productName.includes('tv') && !productName.includes('televisor')) {
                shouldShow = true;
            }
        } else if (category === 'televisor') {
            if (productName.includes('tv') || productName.includes('televisor') || productName.includes('smart tv') || productName.includes('qled')) {
                shouldShow = true;
            }
        } else if (category === 'consola') {
            if (productName.includes('playstation') || productName.includes('xbox') || productName.includes('nintendo')) {
                shouldShow = true;
            }
        } else if (category === 'computador') {
            if (productName.includes('macbook') || productName.includes('laptop') || productName.includes('computador')) {
                shouldShow = true;
            }
        }
        
        if (shouldShow) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Scroll a productos
    document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
    
    showNotification(`Mostrando ${visibleCount} productos`);
}

function showAllProducts() {
    closeModal('categoriesModal');
    
    const allProducts = document.querySelectorAll('.poly-card');
    allProducts.forEach(card => {
        card.style.display = 'block';
    });
    
    document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
    showNotification('Mostrando todos los productos');
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.remove();
    }
});
