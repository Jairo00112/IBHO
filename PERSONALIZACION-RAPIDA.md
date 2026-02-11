# ⚡ GUÍA RÁPIDA DE PERSONALIZACIONES

Para cuando necesites cambiar algo rápido. Las líneas de referencia son aproximadas.

## 1. CAMBIAR NÚMERO DE WHATSAPP

### En ToDO el sitio (botón flotante + secciones)

**Archivo:** `index.html`

Busca todas las instancias de `3001234567` y reemplaza:

```html
<!-- Botón flotante (línea ~82) -->
<a href="https://wa.me/573001234567">

<!-- Sección Código Fe (línea ~250) -->
<a href="https://wa.me/573001234567?text=...">

<!-- Sección Santo Domingo (línea ~340) -->
<a href="https://wa.me/573001345679?text=...">
```

**Formato correcto:** `57` + número sin espacios
Ejemplo: `573115551234` o `573001234567`

---

## 2. CAMBIAR NOMBRE DE LA IGLESIA

**Archivo:** `index.html`

```html
<!-- Línea 100 aprox -->
<span>IBHO</span>  <!-- Cambiar a siglas -->

<!-- Línea 230 aprox -->
<h1>Bienvenidos a la Iglesia Bautista Huerto De Los Olivos</h1>

<!-- Línea 460 aprox, CHANGELOG, README, etc -->
```

También en:
- `README.md` (título principal)
- `CHANGELOG.md` (referencias)
- `config.js` (en `church.name`)

---

## 3. CAMBIAR COLORES

**Archivo:** `css/style.css`

Líneas 10-13 (variables principales):

```css
:root {
    --color-primary: #F39C12;      /* ← CAMBIAR NARANJA */
    --color-secondary: #3498DB;    /* ← CAMBIAR AZUL */
    --color-dark: #2C3E50;         /* ← CAMBIAR AZUL OSCURO */
```

**Generador de colores:** https://www.colorhexa.com/

---

## 4. CAMBIAR LOGO/ICONO IGLESIA

En el header (línea ~95 de index.html):

```html
<!-- Actual -->
<i class="fas fa-church"></i>  <!-- Logo iglesia -->

<!-- Opciones alternas -->
<i class="fas fa-cross"></i>   <!-- Cruz -->
<i class="fas fa-heart"></i>   <!-- Corazón de fe -->
<i class="fas fa-home"></i>    <!-- Casa -->
```

Más iconos en: https://fontawesome.com/icons

---

## 5. CAMBIAR DIRECCIONES

**Archivo:** `index.html`

Sección de ubicación (busca "Calle 46"):

```html
<!-- Línea ~340: Sede Principal -->
<p><i class="fas fa-map-marker-alt"></i> Calle 46 #21-50, Barranquilla, Colombia</p>

<!-- Línea ~450: Código Fe -->
<p>Calle 46D #10A-47, Barrio Los Girasoles</p>

<!-- Línea ~540: Santo Domingo -->
<p>Carrera 66 #1C - 65, Barrio Santo Domingo, Barranquilla</p>
```

También actualizar en `config.js` (líneas 20-45).

---

## 6. CAMBIAR HORARIOS

**Archivo:** `index.html`

### Iglesia Principal (línea ~305)
```html
<p class="schedule-time">10:00 AM</p>
<p class="schedule-activity">Culto de Adoración</p>

<p class="schedule-time">7:00 PM</p>
<p class="schedule-activity">Estudio Bíblico</p>

<p class="schedule-time">5:00 PM</p>
<p class="schedule-activity">Código Fe Juvenil</p>
```

### Código Fe (línea ~410)
```html
<p class="event-time">5:00 PM - 7:00 PM</p>
```

### Santo Domingo (línea ~500)
```html
<li><strong>Domingo</strong> - 3:00 PM: Culto Familiar</li>
<li><strong>Martes</strong> - 6:30 PM: Escuela Bíblica</li>
<li><strong>Jueves</strong> - 7:00 PM: Oración</li>
```

---

## 7. CAMBIAR REDES SOCIALES

**Archivo:** `index.html`

Sección de Contacto (línea ~720):

```html
<!-- Twitter -->
<a href="https://twitter.com/ibho0856">
    
<!-- Facebook -->
<a href="https://www.facebook.com/share/1DZo3cPURs/">

<!-- Instagram -->
<a href="https://www.instagram.com/evangelismo_ibho">
```

También en Footer (línea ~860) y `config.js` (líneas 60-80).

---

## 8. CAMBIAR IMÁGENES

**Archivo:** `index.html`

### Hero (línea ~210)
```html
<div class="hero" style="background-image: url('https://images.unsplash.com/photo-xxxxx');">
```

### Galería Código Fe (línea ~438)
```html
<img src="https://images.unsplash.com/photo-xxxxx" alt="Descripción">
```

**Sitios de imágenes gratis:**
- Unsplash.com (busca "church", "youth", "community")
- Pexels.com
- Pixabay.com

---

## 9. CAMBIAR MAPAS

**Archivo:** `index.html`

### Mapa Iglesia Principal (línea ~360)
```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

**Pasos para cambiar:**
1. Ve a https://www.google.com/maps
2. Busca tu dirección
3. Click derecho → "Compartir o insertar mapa"
4. Selecciona "Insertar" → Copia el iframe
5. Reemplaza el src anterior

---

## 10. CAMBIAR TEXTOS DE SECCIONES

**Archivo:** `index.html`

Busca los principales `<h1>`, `<h2>`, `<p>`:

```html
<!-- Línea ~210 -->
<h1>Bienvenidos a...</h1>
<p class="hero-subtitle">Una familia de fe...</p>
<p class="hero-description">Somos una comunidad...</p>

<!-- Línea ~270 -->
<h2 class="section-title">Nuestra Identidad</h2>

<!-- Tarjetas de identidad -->
<h3>Visión</h3>
<p>Ser una iglesia que transforma...</p>

<h3>Misión</h3>
<p>Llevar el amor de Cristo...</p>

<h3>Valores</h3>
<p><strong>Gracia, Verdad, Familia, Excelencia, Servicio.</strong></p>
```

---

## 11. CAMBIAR MENSAJES DE FORMULARIO

**Archivo:** `index.html`

```html
<!-- Línea ~670 -->
<h3>Envíanos tu Mensaje</h3>

<!-- Línea ~690 -->
<label for="name">Nombre *</label>
<input placeholder="Tu nombre completo">

<label for="email">Correo Electrónico *</label>
<input placeholder="tu@correo.com">

<!-- Línea ~720 -->
<button type="submit">
    <i class="fas fa-paper-plane"></i> Enviar Mensaje
</button>
```

**Archivo:** `js/script.js` (líneas 95-115)

```javascript
errors.name = 'El nombre es requerido';  // ← Cambiar texto
errors.email = 'El correo es requerido';  // ← Cambiar texto
errors.message = 'El mensaje es requerido';  // ← Cambiar texto
```

---

## 12. CAMBIAR TIPOGRAFÍA

**Archivo:** `css/style.css`

```css
/* Línea 41 */
--font-display: 'Poppins', sans-serif;  /* Títulos */
--font-body: 'Open Sans', sans-serif;   /* Cuerpo */
```

**Alternativas en Google Fonts:**
- Montserrat (moderna)
- Roboto (limpia)
- Lato (amigable)
- Playfair Display (elegante)

---

## 13. CAMBIAR TAMAÑOS DE LETRA

**Archivo:** `css/style.css`

```css
/* Línea 47 aprox */
--text-base: 1rem;       /* 16px - cambiar a 1.1rem o 0.9rem */
--text-lg: 1.125rem;     /* 18px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
```

---

## 14. CAMBIAR ESPACIOS (PADDING/MARGIN)

**Archivo:** `css/style.css`

```css
/* Línea 60 aprox */
--space-md: 1rem;        /* 16px */
--space-lg: 1.5rem;      /* 24px */
--space-xl: 2rem;        /* 32px */
--space-2xl: 3rem;       /* 48px */
--space-3xl: 4rem;       /* 64px */
```

---

## 15. CAMBIAR SOMBRAS

**Archivo:** `css/style.css`

```css
/* Línea 75 aprox */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

---

## 16. CAMBIAR RADIO DE BORDES

**Archivo:** `css/style.css`

```css
/* Línea 80 aprox */
--border-radius-md: 0.5rem;    /* Cambiar para más/menos redondez */
--border-radius-lg: 1rem;
--border-radius-xl: 1.5rem;
```

---

## 17. AÑADIR NUEVA SECCIÓN

**En `index.html` después de Contacto:**

```html
<!-- NUEVA SECCIÓN (copiar estructura existente) -->
<section id="nueva-seccion" class="section">
    <div class="container">
        <h2 class="section-title">Título de la Nueva Sección</h2>
        
        <!-- Contenido aquí -->
        
    </div>
</section>
```

**Luego añade en el menú (línea ~78):**

```html
<li class="nav-item">
    <a href="#nueva-seccion" class="nav-link" data-section="nueva-seccion">tu Enlace</a>
</li>
```

---

## 18. CAMBIAR DESCRIPCIÓN META

**Archivo:** `index.html`

```html
<!-- Línea 12 -->
<meta name="description" content="TU NUEVA DESCRIPCIÓN AQUÍ (máx 160 caracteres)">

<meta name="keywords" content="palabra1, palabra2, palabra3">
```

---

## 19. CAMBIAR FAVICON

Opción 1: Usa emoji (ya incluido)
```html
<!-- Línea 20 - cambiar el símbolo -->
<link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg>✝</svg>">
```

Opción 2: Usa un archivo PNG
```html
<link rel="icon" type="image/png" href="assets/icons/favicon.png">
```

---

## 20. CAMBIAR EMAIL DE LA IGLESIA

**Archivo:** `index.html` - Busca contacto@ibho y reemplaza
**Archivo:** `config.js` - Línea 13

```javascript
email: 'tucorreo@iglesia.com',
```

---

## 🎨 COMBINACIONES DE COLORES RECOMENDADAS

Si quieres cambiar el color primario:

```css
/* Opción 1: Verde (natura, crecimiento) */
--color-primary: #27AE60;
--color-secondary: #3498DB;

/* Opción 2: Rojo (pasión, fe) */
--color-primary: #E74C3C;
--color-secondary: #3498DB;

/* Opción 3: Púrpura (realeza, fe) */
--color-primary: #9B59B6;
--color-secondary: #3498DB;

/* Opción 4: Azul (confianza) */
--color-primary: #2980B9;
--color-secondary: #3498DB;
```

---

## 📞 NÚMEROS DE TELÉFONO

**Formato correcto:**
- ✅ 573001234567 (correcto)
- ❌ 57 3001 234567 (espacios)
- ❌ +57 3001234567 (+ lo agrega automáticamente)
- ❌ 03001234567 (sin 57)

---

## ✏️ TIPS DE EDICIÓN

1. **Haz cambios de a uno** - Prueba después de cada cambio
2. **Usa Ctrl+F para buscar** - Para cambios globales
3. **Guarda una copia** - Por si algo sale mal
4. **Vacía caché** - Ctrl+Shift+Delete después de cambios CSS
5. **Prueba en móvil** - F12 → Modo móvil

---

## 🆘 SI ALGO SE ROMPE

1. Cierra el archivo sin guardar (deshacer cambios)
2. Abre una copia anterior
3. Restaura desde Git (si usas control de versiones)
4. Contacta al desarrollador

---

## 📱 PRUEBAS RÁPIDAS

```bash
# Abrir en navegador
# En Windows: Double-click en index.html

# Abrir terminal y ejecutar
python -m http.server 8000

# Luego abre: http://localhost:8000
```

---

¡Listo para personalizar! 🎨

Última actualización: Febrero 2026
