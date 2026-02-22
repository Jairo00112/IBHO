# 🚀 GUÍA DE DESPLIEGUE RÁPIDO

## Opción 1: Prueba Local (Antes de subir)

### Paso 1: Abrir el sitio localmente
1. Descarga la carpeta del proyecto
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador
4. ¡Listo! El sitio funciona completamente

### Paso 2: Verificar funcionalidades
- [ ] Menú de navegación funciona
- [ ] Botón flotante de WhatsApp visible
- [ ] Formulario de contacto se envía
- [ ] Mapas se cargan
- [ ] Imágenes se muestran
- [ ] Versión móvil se vea bien

---

## Opción 2: Servidor Local (Para desarrollo)

### Usar Python (si ya lo tienes instalado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: `http://localhost:8000`

### Usar Node.js (http-server)
```bash
# Instalar globalmente (una sola vez)
npm install -g http-server

# Ejecutar en la carpeta del proyecto
http-server

# Abre: http://localhost:8080
```

### Usar Live Server en VS Code
1. Abre el proyecto en VS Code
2. Instala extensión: "Live Server" (Ritwick Dey)
3. Click derecho en `index.html` → "Open with Live Server"
4. Se abrirá automáticamente en `http://localhost:5500`

---

## Opción 3: Subir a Hosting Web (Producción)

### Hostings recomendados en Colombia:
- **Bluehost** (~$3-5/mes) - Bueno, soporte es lento
- **Hostgator** (~$3-7/mes) - Confiable, buen soporte
- **Siteground** (~$3-4/mes) - Mejor calidad, un poco más caro
- **Namecheap** (~$3/mes) - Muy barato, servicio básico
- **A2Hosting** (~$3/mes) - Bueno para PHP/MySQL

### Pasos:
1. **Contratar hosting**
   - Compra un plan compartido (shared hosting)
   - Elige tu dominio (ej: `ibho.com.co`)

2. **Acceder vía FTP**
   - Descarga FileZilla o WinSCP
   - Usa credenciales del hosting
   - Dirección FTP: `ftp.tusitio.com`

3. **Subir archivos**
   - Conecta por FTP
   - Sube TODA la carpeta del proyecto
   - Asegúrate de que `index.html` esté en la raíz

4. **Verificar Upload**
   - Ve a `https://tusitio.com`
   - ¡Debería funcionar!

---

## Opción 4: GitHub Pages (100% Gratis)

### Paso a Paso:
1. **Crear cuenta GitHub** → https://github.com (gratis)

2. **Crear repositorio**
   - Click en "+" → "New repository"
   - Nombre: `ibho`
   - Público (Public)
   - NO inicialices con README

3. **Subir archivos (vía Git)**
   ```bash
   # En terminal, dentro de la carpeta del proyecto
   git init
   git add .
   git commit -m "Primera versión del sitio IBHO"
   git branch -M main
   git remote add origin https://github.com/TUNOMBRE/ibho.git
   git push -u origin main
   ```

4. **Habilitar GitHub Pages**
   - Ve a Configuración del repositorio
   - Busca "Pages" en el lado izquierdo
   - En "Source", selecciona "Deploy from branch"
   - Branch: `main`, carpeta: `/ (root)`
   - Click Save

5. **Tu sitio estará en:**
   ```
   https://TUNOMBRE.github.io/ibho
   ```

---

## Opción 5: Vercel (También muy fácil)

### Paso a Paso:
1. Ve a https://vercel.com
2. Conecta tu GitHub
3. Selecciona el repositorio `ibho`
4. Click "Deploy"
5. Listo! Tu sitio estará en `https://ibho.vercel.app`

---

## ✅ Checklist Antes de Lanzar

- [ ] Actualizar números de WhatsApp
- [ ] Actualizar redes sociales
- [ ] Cambiar direcciones por las reales
- [ ] Verificar horarios correctos
- [ ] Probar formulario de contacto
- [ ] Verificar mapas
- [ ] Agregar imágenes reales (opcional)
- [ ] Cambiar nombre de iglesia
- [ ] Revisar en móvil
- [ ] Revisar en diferentes navegadores

---

## 🔗 Comprar Dominio

### Proveedores de dominios:
- **Namecheap** - Fácil, barato
- **GoDaddy** - Más caro, pero popular
- **Registrar.com** - Buenas opciones .co
- **NIC.co** - Oficial para .co

### Tipos de dominio:
- `.com.co` - Para Colombia
- `.co` - Moderno, internacional
- `.com` - Universal, más caro
- `.org` - Para organizaciones

### Precios típicos:
- `.co` - $8-12/año
- `.com.co` - $10-15/año
- `.com` - $10-15/año

**Recomendación:** Compra el dominio en Namecheap, es barato y confiable.

---

## 🔍 Monitoreo Post-Lanzamiento

### Herramientas gratuitas:
1. **Google Search Console** - SEO
2. **Google Analytics** - Estadísticas
3. **Uptime Robot** - Ver si el sitio cae
4. **Cloudflare** - Protección y CDN gratis

---

## 🐛 Si Algo No Funciona

### Checklist de problemas comunes:

1. **Imágenes no cargan**
   - Verifica la URL
   - Comprueba que la imagen existe en ese URL

2. **Formulario no envía**
   - Abre la consola (F12)
   - Revisa si hay errores en JavaScript

3. **Mapas no carga**
   - Verifica el iframe de Google Maps
   - Comprueba de nuevo en un navegador incógnito

4. **Menú no responde en móvil**
   - Limpia caché (Ctrl+Shift+Delete)
   - Recarga la página (Ctrl+F5)

5. **Estilos CSS rotos**
   - Verifica que `css/style.css` existe
   - Revisa la ruta relativa

---

## 📊 Estadísticas Iniciales

**Velocidad de carga:**
- Desktop: ~1-2 segundos
- Móvil: ~2-3 segundos

**Puntuación Lighthouse:**
- Performance: 85-95
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Puedes verificar en: https://developers.google.com/speed/pagespeed/insights/

---

## 💬 Soporte

Si tienes dudas:
1. Lee el `README.md`
2. Revisa los comentarios en el código
3. Prueba en navegador incógnito
4. Limpia caché y cookies

---

**¡Éxito con tu sitio web!** 🙏

Última actualización: Febrero 2026
