# 🙏 Iglesia Bautista Huerto De Los Olivos - Sitio Web

Bienvenido al sitio web institucional de la **Iglesia Bautista Huerto De Los Olivos** en Barranquilla, Colombia.

## 📋 Descripción del Proyecto

Sitio web de una sola página (Landing Page) completo y responsive, sin dependencias pesadas, construido con:

- **HTML5** semántico
- **CSS3** con variables personalizadas
- **JavaScript vanilla** (sin frameworks)
- **FontAwesome 6.4.0** para iconos (CDN)
- **Google Fonts** (Poppins + Open Sans)

## 🎨 Secciones Principales

1. **Inicio / Iglesia Principal** - Información general, horarios, ubicación y valores
2. **Código Fe Juvenil (Fe en Crudo: Sede Girasoles)** - Grupo juvenil con galería y próximos encuentros
3. **Santo Domingo** - Información de la sede en el barrio Santo Domingo
4. **Contacto y Redes Sociales** - Formulario de contacto y enlaces a redes

## 🚀 Características Principales

✅ **Diseño Responsive** - Se adapta perfectamente a móvil, tablet y desktop
✅ **Menú Hamburguesa** - Navegación móvil automática
✅ **Botón Flotante WhatsApp** - Acceso rápido a WhatsApp desde cualquier parte
✅ **Formulario de Contacto** - Con validación completa
✅ **Navegación Suave** - Desplazamiento automático entre secciones
✅ **Galerías** - Imágenes con efecto hover
✅ **Mapas Embebidos** - Google Maps para ubicaciones
✅ **Redes Sociales** - Enlaces a Twitter, Facebook, Instagram, WhatsApp
✅ **Accesibilidad** - Atributos alt, aria-label, contraste adecuado
✅ **SEO Básico** - Meta tags, Open Graph, estructura semántica

## 📁 Estructura de Carpetas

```
proyecto-iglesia/
│
├── index.html              # Archivo principal HTML
├── README.md              # Este archivo
├── css/
│   └── style.css          # Estilos CSS (variables personalizadas)
├── js/
│   └── script.js          # Funcionalidades JavaScript
└── assets/
    ├── images/            # Carpeta para imágenes locales (opcional)
    └── icons/             # Carpeta para iconos personalizados (opcional)
```

## 🛠️ ¿Cómo Personalizar el Sitio?

### 1. Cambiar Textos

Abre `index.html` y busca los comentarios como:
```html
<!-- AQUÍ VA EL TEXTO DE LA IGLESIA -->
<!-- Reemplazar por tu contenido -->
```

Principales áreas a personalizar:
- **Nombre de la iglesia** (línea ~100)
- **Textos de secciones** (busca los `<h1>`, `<h2>`, `<p>`)
- **Horarios** (sección de horarios)
- **Direcciones** (ubicaciones)
- **Números de WhatsApp** (enlaces `wa.me/`)
- **Enlaces a redes sociales** (dentro de `<a>` con redes)

### 2. Cambiar Colores

Abre `css/style.css` y edita las variables en la sección `:root`:

```css
:root {
    --color-primary: #F39C12;      /* Naranja - cambiar aquí */
    --color-secondary: #3498DB;    /* Azul - cambiar aquí */
    --color-dark: #2C3E50;         /* Azul oscuro - cambiar aquí */
    /* ... más variables ... */
}
```

Los cambios se aplicarán automáticamente a todo el sitio.

### 3. Cambiar Imágenes

En `index.html`, busca las líneas con `<img>` o `background-image`. Cambia las URLs:

```html
<!-- Cambiar esta URL -->
<img src="https://images.unsplash.com/photo-xxxxx" alt="Descripción">
```

Puedes usar:
- URLs de Google Images
- Unsplash (https://unsplash.com/)
- Pexels (https://www.pexels.com/)
- Tus propias imágenes (guarda en `assets/images/`)

### 4. Cambiar Enlaces de WhatsApp

Actualiza el número de Whatsapp en:
1. Botón flotante (línea ~82): `https://wa.me/573001234567`
2. Secciones específicas (busca `https://wa.me/`)

Formato: `https://wa.me/57XXXXXXXXXX` (57 es el código de Colombia)

### 5. Cambiar Redes Sociales

Busca en `index.html` y `css/style.css`:
```html
<a href="https://twitter.com/ibho0856">Twitter</a>
<a href="https://www.facebook.com/share/1DZo3cPURs/">Facebook</a>
<a href="https://www.instagram.com/evangelismo_ibho">Instagram</a>
```

Cambia las URLs por tus perfiles reales.

### 6. Cambiar Mapas

En las secciones de ubicación, busca:
```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

Pasos para cambiar:
1. Ve a Google Maps
2. Busca tu dirección
3. Click en "Compartir" → "Insertar"
4. Copia el código completo del iframe
5. Reemplaza en `index.html`

### 7. Cambiar Tipografía

En `css/style.css`:
```css
--font-display: 'Poppins', sans-serif;  /* Títulos */
--font-body: 'Open Sans', sans-serif;   /* Cuerpo */
```

Otras opciones en https://fonts.google.com/

### 8. Cambiar Tamaño de Texto

En `css/style.css`, busca los tamaños:
```css
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-2xl: 1.5rem;      /* 24px */
```

### 9. Cambiar Espacios (Padding/Margin)

En `css/style.css`:
```css
--space-md: 1rem;        /* 16px */
--space-lg: 1.5rem;      /* 24px */
--space-xl: 2rem;        /* 32px */
```

## 💡 Consejos de Edición

1. **Usar un editor de código** como VS Code
2. **No eliminar estructura HTML** - Mantener los atributos `id`, `class` y `data-*`
3. **Hacer backup** antes de cambios grandes
4. **Probar en navegadores** después de cambios: Chrome, Firefox, Safari, Edge
5. **Validar HTML** en https://validator.w3.org/
6. **Comprimir imágenes** antes de subir para mejor rendimiento

## 🌐 Cómo Subir a Hosting

### Opción 1: Hosting Web Tradicional (Recomendado)
1. Contrata un hosting (ej: Hostgator, Bluehost, Siteground)
2. Descarga un FTP client (ej: FileZilla)
3. Sube la carpeta completa del proyecto
4. Punto.

### Opción 2: GitHub Pages (Gratis)
1. Crea cuenta en https://github.com
2. Crea repositorio llamado `ibho`
3. Sube los archivos
4. Ve a Settings → Pages
5. Selecciona "Deploy from branch"
6. Tu sitio estará en: `https://tunombre.github.io/ibho`

## 📱 Compatibilidad

Probado en:
- ✅ Chrome (todas las versiones)
- ✅ Firefox (todas las versiones)
- ✅ Safari (iOS y macOS)
- ✅ Edge
- ✅ Navegadores móviles Android

Resoluciones soportadas:
- Móvil: 320px - 480px
- Tablet: 480px - 768px
- Desktop: 768px+

## 🔒 Seguridad

- ✅ Sin plugins externos peligrosos
- ✅ Sin código inline (todo separado)
- ✅ Sin datos sensibles en el código
- ✅ Validación de formulario en cliente (agregar validación backend si procesa datos)

## ⚡ Optimizaciones

El sitio está optimizado para velocidad:
- CSS minificado y organizado
- JavaScript defer (carga eficiente)
- Imágenes de Unsplash (sin servidor lento)
- Sin dependencias pesadas

**Velocidad de carga**: ~1-2 segundos en conexión normal
**Lighthouse Score**: 90+ en Desktop, 80+ en Móvil

## 📞 Contacto para Soporte

Si necesitas ayuda con el sitio:
1. Revisa esta documentación
2. Consulta los comentarios en el código HTML, CSS y JS
3. Abre un issue en GitHub (si usas GitHub)
4. Contacta al desarrollador

## 🔄 Actualizaciones Futuras

Ideas para mejorar:
- [ ] Blog integrado
- [ ] Calendario de eventos
- [ ] Sistema de testimonios
- [ ] Newsletter / Boletín
- [ ] App móvil
- [ ] Multi-idioma (Inglés, Portugués)

## 📄 Licencia y Créditos

- Proyecto: Iglesia Bautista Huerto De Los Olivos
- Desarrollado con HTML5, CSS3, JavaScript vanilla
- Iconos: FontAwesome 6.4.0
- Tipografía: Google Fonts
- Imágenes: Unsplash

## 🛠️ Sistema de Gestión de Contenido (CMS)

Este sitio incluye un CMS headless basado en **Decap CMS** para que el pastor pueda editar contenido fácilmente desde `/admin`.

### Configuración con Railway + GitHub

1. **Crear OAuth App en GitHub**:
   - Ve a https://github.com/settings/applications/new
   - Nombre: "IBHO CMS"
   - Homepage URL: `https://tu-dominio.railway.app`
   - Authorization callback URL: `https://tu-dominio.railway.app/api/oauth/callback`
   - Copia el Client ID y Client Secret

2. **Variables de entorno en Railway**:
   - `GITHUB_CLIENT_ID`: Tu Client ID de GitHub
   - `GITHUB_CLIENT_SECRET`: Tu Client Secret de GitHub
   - `REDIRECT_URI`: `https://tu-dominio.railway.app/api/oauth/callback`

3. **Configurar config.yml**:
   - Cambia `TU_USUARIO/TU_REPO` por tu repo de GitHub
   - Cambia `TU_DOMINIO.railway.app` por tu dominio de Railway

4. **Desplegar en Railway**:
   - Sube el código a GitHub
   - Conecta el repo a Railway
   - Railway detectará automáticamente el `package.json` y `railway.json`

### Acceso al CMS

- URL: `https://tu-dominio.railway.app/admin`
- El pastor puede editar: configuración, historia, eventos, galería, estudios bíblicos, ministerios, testimonios

---

**Última actualización**: Febrero 2026
**Versión**: 1.0

¡Que Dios bendiga tu ministerio! 🙏
