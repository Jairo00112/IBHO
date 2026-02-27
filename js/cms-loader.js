/**
 * CMS Loader - Carga dinámicamente contenido desde archivos JSON del CMS
 * Compatible con Sveltia CMS y estructura de contenido editable
 */

class CMSLoader {
  constructor() {
    this.contentCache = {};
    this.init();
  }

  async init() {
    try {
      // Cargar datos globales
      await this.loadSettings();
      // Renderizar contenido según la página actual
      this.renderPageContent();
    } catch (error) {
      console.error('Error inicializando CMS Loader:', error);
    }
  }

  /**
   * Cargar archivo JSON desde el servidor
   */
  async loadJSON(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`No se pudo cargar ${path}:`, error);
      return null;
    }
  }

  /**
   * Cargar configuración global del sitio
   */
  async loadSettings() {
    const settings = await this.loadJSON('/content/settings.json');
    if (settings) {
      this.contentCache.settings = settings;
      this.applyGlobalSettings(settings);
    }
  }

  /**
   * Aplicar configuración global a todos los elementos
   */
  applyGlobalSettings(settings) {
    // Actualizar links de redes sociales
    const socialLinks = {
      twitter: settings.twitter,
      facebook: settings.facebook,
      instagram: settings.instagram,
      tiktok: settings.tiktok
    };

    // Redes en header
    document.querySelectorAll('a[href*="x.com"]').forEach(link => {
      link.href = `https://x.com/${socialLinks.twitter}`;
    });
    document.querySelectorAll('a[href*="facebook.com"]').forEach(link => {
      link.href = socialLinks.facebook;
    });
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
      link.href = `https://www.instagram.com/${socialLinks.instagram}`;
    });
    document.querySelectorAll('a[href*="tiktok.com"]').forEach(link => {
      link.href = `https://www.tiktok.com/${socialLinks.tiktok}`;
    });

    // WhatsApp
    const phoneNumber = settings.phone.replace(/\s/g, '').replace('+', '');
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
      const currentParams = new URL(link.href).search;
      link.href = `https://wa.me/${phoneNumber}${currentParams}`;
    });

    // Email
    document.querySelectorAll('#email').forEach(el => {
      el.textContent = `Email: ${settings.email}`;
    });

    // Teléfono
    document.querySelectorAll('#telefono').forEach(el => {
      el.textContent = `WhatsApp: ${settings.phone}`;
    });
  }

  /**
   * Detectar página actual y cargar contenido
   */
  async renderPageContent() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage === '/') {
      await this.loadHomepage();
    } else if (currentPage.includes('quienes-somos.html')) {
      await this.loadQuienesSomos();
    } else if (currentPage.includes('que-hacemos.html')) {
      await this.loadQueHacemos();
    } else if (currentPage.includes('como-vincularse.html')) {
      await this.loadComoVincularse();
    } else if (currentPage.includes('contactanos.html')) {
      await this.loadContactanos();
    }
  }

  /**
   * Cargar contenido de página de inicio
   */
  async loadHomepage() {
    const homepage = await this.loadJSON('/content/homepage.json');
    const schedules = await this.loadJSON('/content/horarios.json');
    const eventos = await this.loadJSON('/content/eventos.json');

    if (homepage) {
      // Hero
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        const h1 = heroContent.querySelector('h1');
        const subtitle = heroContent.querySelector('.hero-subtitle');
        const description = heroContent.querySelector('.hero-description');

        if (h1) h1.textContent = homepage.hero_title;
        if (subtitle) subtitle.textContent = homepage.hero_subtitle;
        if (description) description.textContent = homepage.hero_description;
      }

      // Historia
      const historyContent = document.querySelector('.history-content');
      if (historyContent) {
        const paragraphs = historyContent.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = homepage.history_p1;
        if (paragraphs[1]) paragraphs[1].textContent = homepage.history_p2;
        if (paragraphs[2]) paragraphs[2].textContent = homepage.history_p3;
        if (paragraphs[3]) paragraphs[3].textContent = homepage.history_p4;
      }
    }

    if (schedules && schedules.schedules) {
      const schedulesGrid = document.querySelector('.schedules-grid');
      if (schedulesGrid) {
        schedulesGrid.innerHTML = schedules.schedules.map(schedule => `
          <article class="schedule-card">
            <div class="schedule-day"><i class="fas fa-calendar-day"></i><h3>${schedule.day}</h3></div>
            <p class="schedule-time">${schedule.time}</p>
            <p class="schedule-activity">${schedule.activity}</p>
          </article>
        `).join('');
      }
    }

    // Cargar eventos
    if (eventos && eventos.eventos && eventos.eventos.length > 0) {
      const eventosGrid = document.querySelector('.eventos-grid');
      if (eventosGrid) {
        eventosGrid.innerHTML = eventos.eventos.map(evento => {
          const fechaInicio = new Date(evento.date);
          const fechaFin = evento.end_date ? new Date(evento.end_date) : null;
          const formatoFecha = this.formatearFecha(fechaInicio, fechaFin);
          
          return `
            <article class="evento-card">
              <div class="evento-image" style="background-image: url('${evento.image || '/assets/images/foto5.jpeg'}');">
                <div class="evento-type-badge" data-type="${evento.event_type || 'Otro'}">${evento.event_type || 'Evento'}</div>
              </div>
              <div class="evento-content">
                <div class="evento-date">
                  <i class="fas fa-calendar-alt"></i> ${formatoFecha}
                </div>
                <h3>${evento.title}</h3>
                <p class="evento-description">${evento.description || ''}</p>
                <div class="evento-location">
                  <i class="fas fa-map-marker-alt"></i> ${evento.location || 'Por confirmar'}
                </div>
              </div>
            </article>
          `;
        }).join('');
      }
    }
  }

  /**
   * Formatear fecha para mostrar
   */
  formatearFecha(fechaInicio, fechaFin) {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const inicio = fechaInicio.toLocaleDateString('es-ES', opciones);
    
    if (fechaFin && fechaInicio.getTime() !== fechaFin.getTime()) {
      const fin = fechaFin.toLocaleDateString('es-ES', opciones);
      return `${inicio} - ${fin}`;
    }
    return inicio;
  }

  /**
   * Cargar contenido de Quiénes Somos
   */
  async loadQuienesSomos() {
    const content = await this.loadJSON('/content/quienes-somos.json');

    if (content) {
      // Introducción
      const baptistIntro = document.querySelector('.baptist-intro p:first-of-type');
      if (baptistIntro) baptistIntro.textContent = content.baptist_intro;

      // Estadísticas
      const statItems = document.querySelectorAll('.stat-item');
      if (statItems[0]) {
        const h4 = statItems[0].querySelector('h4');
        if (h4) h4.textContent = content.members_worldwide;
      }
      if (statItems[1]) {
        const h4 = statItems[1].querySelector('h4');
        if (h4) h4.textContent = content.churches_worldwide;
      }

      // Misión, Visión, Reflexión
      const missionSection = document.querySelector('#mision');
      if (missionSection) {
        const p = missionSection.querySelector('p');
        if (p) p.innerHTML = this.markdownToHTML(content.mission);
      }

      const visionSection = document.querySelector('#vision');
      if (visionSection) {
        const p = visionSection.querySelector('p');
        if (p) p.innerHTML = this.markdownToHTML(content.vision);
      }

      const reflexionSection = document.querySelector('#reflexion');
      if (reflexionSection) {
        const p = reflexionSection.querySelector('p');
        if (p) p.innerHTML = this.markdownToHTML(content.reflection);
      }
    }
  }

  /**
   * Cargar contenido de Qué Hacemos
   */
  async loadQueHacemos() {
    const content = await this.loadJSON('/content/que-hacemos.json');

    if (content) {
      // Objetivo General
      const objectiveSection = document.querySelector('#objetivo-general');
      if (objectiveSection) {
        const quote = objectiveSection.querySelector('blockquote p');
        if (quote) quote.textContent = content.general_objective;
      }

      // Dónde operamos
      const whereSection = document.querySelector('#donde-operamos');
      if (whereSection) {
        const p = whereSection.querySelector('p');
        if (p) p.innerHTML = this.markdownToHTML(content.where_we_operate);
      }

      // Cómo operamos
      const howSection = document.querySelector('#como-operamos');
      if (howSection) {
        const p = howSection.querySelector('p');
        if (p) p.innerHTML = this.markdownToHTML(content.how_we_operate);
      }

      // Galería descripción
      const gallerySection = document.querySelector('#galeria-fotos');
      if (gallerySection) {
        const p = gallerySection.querySelector('p:first-of-type');
        if (p) p.textContent = content.gallery_description;
      }
    }
  }

  /**
   * Cargar contenido de Cómo Vincularse
   */
  async loadComoVincularse() {
    const content = await this.loadJSON('/content/como-vincularse.json');

    if (content) {
      // Voluntariado
      const volSection = document.querySelector('#voluntariado .voluntariado-card');
      if (volSection) {
        const h3 = volSection.querySelector('h3');
        const p = volSection.querySelectorAll('p')[1]; // Saltar el date-text
        if (h3) h3.querySelector('i').outerHTML + ' ' + (h3.textContent = content.volunteering_title);
        if (p) p.textContent = content.volunteering_content;
      }

      // Donaciones
      const donSection = document.querySelector('#donaciones .donaciones-card');
      if (donSection) {
        const h3 = donSection.querySelector('h3');
        const ps = donSection.querySelectorAll('.donaciones-card p');
        if (h3) h3.textContent = (h3.querySelector('i') ? content.donations_title : content.donations_title);
        if (ps[0]) ps[0].textContent = content.donations_p1;
        if (ps[1]) ps[1].textContent = content.donations_p2;
      }
    }
  }

  /**
   * Cargar contenido Contáctanos
   */
  async loadContactanos() {
    const settings = this.contentCache.settings || await this.loadJSON('/content/settings.json');

    if (settings) {
      const contactInfo = document.querySelectorAll('.contact-info');
      
      contactInfo.forEach(info => {
        const h3 = info.querySelector('h3');
        if (h3 && h3.textContent.includes('teléfono')) {
          const ps = info.querySelectorAll('p');
          if (ps[0]) ps[0].textContent = `WhatsApp: ${settings.phone}`;
          if (ps[1]) ps[1].textContent = `Email: ${settings.email}`;
        }
      });
    }
  }

  /**
   * Convertir markdown simple a HTML
   */
  markdownToHTML(text) {
    if (!text) return '';
    // Convertir **negrita** a <strong>
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Convertir *cursiva* a <em>
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Convertir saltos de línea
    text = text.replace(/\n\n/g, '</p><p>');
    return `<p>${text}</p>`;
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CMSLoader();
  });
} else {
  new CMSLoader();
}
