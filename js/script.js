/* ============================================================================
   SCRIPT DE FUNCIONALIDADES - Iglesia Bautista Huerto De Los Olivos
   ============================================================================
   Menú, navegación, formulario, animaciones y utilidades.
*/

// ============================================================================
// 1. MENÚ HAMBURGUESA (Móvil)
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menú al hacer clic en hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ============================================================================
// 2. NAVEGACIÓN SUAVE Y HIGHLIGHT DEL MENÚ ACTIVO
// ============================================================================

function activateNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(
                `.nav-link[data-section="${section.id}"]`
            );
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Ejecutar al cargar y durante el scroll
window.addEventListener('scroll', activateNavLink);
window.addEventListener('load', activateNavLink);


// ============================================================================
// 3. AÑO ACTUAL EN FOOTER
// ============================================================================

function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

setCurrentYear();

// ============================================================================
// 4. ANIMACIONES AL HACER SCROLL
// ============================================================================

// Observar elementos para animar cuando entran al viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animar tarjetas
document.querySelectorAll('.identity-card, .schedule-card, .pillar-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============================================================================
// 5. BOTONES DE WHATSAPP PERSONALIZADOS (Ya en HTML con enlaces)
// ============================================================================

// Los botones de WhatsApp ya están configurados en el HTML con los números
// y mensajes predefinidos. Solo necesitan estar activos.

// ============================================================================
// 6. UTILIDADES ADICIONALES
// ============================================================================

// Función para desactivar click en enlaces # si es necesario
function handleHashLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') {
                e.preventDefault();
            }
        });
    });
}

handleHashLinks();

// ============================================================================
// 7. MEJORAS DE RENDIMIENTO Y ACCESIBILIDAD
// ============================================================================

// Asegurar que las imágenes se cargan eficientemente
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Mejorar accesibilidad: mantener enfoque visible
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('tab-focused');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('tab-focused');
});

// ============================================================================
// 8. FUNCIÓN PARA DEBUG (DESARROLLO)
// ============================================================================

// Mostrar versión actual en consola
console.log('%c🙏 Iglesia Bautista Huerto De Los Olivos', 'font-size: 16px; color: #F39C12; font-weight: bold;');
console.log('%cSitio web institucional v1.0', 'font-size: 12px; color: #3498DB;');
console.log('%cContacto: +57 3XX XXXXXXX | www.ibho.example.com', 'font-size: 11px; color: #999;');

// ============================================================================
// 9. MANEJO DE EVENTOS PERSONALIZADOS (EXTENSIBLE)
// ============================================================================

// Permitir que el cliente agregue eventos personalizados fácilmente
const IBHO = {
    // Registrar listener personalizado
    on: function(eventName, callback) {
        document.addEventListener(`ibho:${eventName}`, callback);
    },

    // Disparar evento personalizado
    emit: function(eventName, data) {
        document.dispatchEvent(new CustomEvent(`ibho:${eventName}`, { detail: data }));
    },

    // Obtener elemento
    getElement: function(id) {
        return document.getElementById(id);
    },

    // Navegar a sección
    navigateToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Hacer disponible globalmente
window.IBHO = IBHO;

// ============================================================================
// 10. INICIALIZACIÓN FINAL
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Sitio completamente cargado y funcional');
    
    // Emitir evento personalizado
    IBHO.emit('ready');

    // Pequeña animación de bienvenida
    const header = document.getElementById('header');
    if (header) {
        header.style.animation = 'slideDown 0.5s ease-out';
    }
});

// Agregar keyframes para animación de header
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.tab-focused * {
        outline-color: var(--color-primary) !important;
    }
`;
document.head.appendChild(style);

// ============================================================================
// 11. SERVICIO DE WORKERS (Opcional - para PWA futura)
// ============================================================================

// Si en el futuro necesitas PWA, descomentar:
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(err => {
//         console.log('Service Worker no disponible en desarrollo');
//     });
// }
