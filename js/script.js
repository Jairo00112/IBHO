/* ============================================================================
   SCRIPT PRINCIPAL - Iglesia Bautista Huerto De Los Olivos
   ============================================================================ */

(function() {
  'use strict';

  // ==========================================================================
  // 1. MENÚ HAMBURGUESA Y NAVEGACIÓN MÓVIL
  // ==========================================================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  function toggleMenu() {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==========================================================================
  // 2. NAVEGACIÓN SUAVE Y HIGHLIGHT DEL MENÚ ACTIVO
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  function highlightMenu() {
    const scrollY = window.scrollY + 150;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(highlightMenu);
  });
  window.addEventListener('load', highlightMenu);

  // ==========================================================================
  // 3. AÑO ACTUAL EN FOOTER
  // ==========================================================================
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ==========================================================================
  // 4. ANIMACIONES AL HACER SCROLL (Intersection Observer)
  // ==========================================================================
  const animatedElements = document.querySelectorAll(
    '.identity-card, .schedule-card, .pillar-card, .gallery-item, .info-card'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // ==========================================================================
  // 5. LAZY LOADING PARA IMÁGENES (data-src)
  // ==========================================================================
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          obs.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

  // ==========================================================================
  // 6. FORMULARIO DE CONTACTO (VALIDACIÓN Y SIMULACIÓN)
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const successMsg = document.getElementById('formSuccess');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function showError(input, message) {
      const formGroup = input.closest('.form-group');
      formGroup.classList.add('error');
      const errorEl = formGroup.querySelector('.error-message');
      errorEl.textContent = message;
    }

    function clearError(input) {
      const formGroup = input.closest('.form-group');
      formGroup.classList.remove('error');
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Limpiar errores previos
      contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

      // Validar nombre
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Por favor ingresa tu nombre.');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validar email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'El correo electrónico es obligatorio.');
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Ingresa un correo válido.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validar mensaje
      if (!messageInput.value.trim()) {
        showError(messageInput, 'El mensaje no puede estar vacío.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        // Simular envío exitoso
        contactForm.reset();
        successMsg.style.display = 'flex';
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });

    // Limpiar errores mientras el usuario escribe
    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });
  }

  // ==========================================================================
  // 7. UTILIDADES ADICIONALES
  // ==========================================================================
  // Prevenir comportamiento por defecto en enlaces vacíos
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
  });

  // ==========================================================================
  // 8. OBJETO GLOBAL PARA EXTENSIONES FUTURAS
  // ==========================================================================
  window.IBHO = {
    version: '1.0.0',
    name: 'Iglesia Bautista Huerto De Los Olivos',
    toggleMenu,
    highlightMenu,
  };

  // ==========================================================================
  // 9. CONSOLA PROFESIONAL
  // ==========================================================================
  console.log('%c🙏 IBHO - Iglesia Bautista Huerto De Los Olivos', 'font-size: 18px; color: #F39C12; font-weight: bold;');
  console.log('%cSitio web institucional v1.0 | Desarrollado con amor para la obra de Dios', 'font-size: 12px; color: #3498DB;');
})();
