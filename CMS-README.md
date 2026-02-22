# Configuración del CMS - Iglesia Bautista Huerto de los Olivos

## 🚀 Acceso al Panel Administrativo

Para acceder al panel de administración del CMS, visita:
```
https://tu-dominio.com/admin/
```

### Credenciales de Acceso
- **Usuario:** Configurado en tu proveedor de backend
- **Contraseña:** Configurada en tu proveedor de backend

## 📋 Colecciones Disponibles

### 1. Configuración General
- **Archivo:** `content/config.json`
- **Campos:** Teléfono, Email, Dirección, Horarios, URLs de redes sociales
- **Uso:** Configuración global del sitio web

### 2. Historia de la Iglesia
- **Carpeta:** `content/historia/`
- **Campos:** Título, Fecha, Imagen destacada, Resumen, Contenido
- **Uso:** Artículos sobre la historia de la iglesia

### 3. Estudios Bíblicos
- **Carpeta:** `content/estudios-biblicos/`
- **Campos:** Título, Fecha, Autor, Referencia Bíblica, Imagen, Resumen, Contenido
- **Uso:** Publicaciones de estudios bíblicos

### 4. Ministerios
- **Carpeta:** `content/ministerios/`
- **Campos:** Nombre, Descripción, Imagen, Líder, Horario, Contacto, Contenido detallado
- **Uso:** Información sobre los diferentes ministerios

### 5. Eventos Próximos
- **Carpeta:** `content/eventos/`
- **Campos:** Título, Fecha/Hora, Fecha fin, Descripción, Ubicación, Imagen, Tipo, Información adicional
- **Uso:** Calendario de eventos de la iglesia

### 6. Galería de Fotos
- **Carpeta:** `content/galeria/`
- **Campos:** Título, Imagen, Descripción, Categoría, Fecha
- **Uso:** Galería fotográfica del sitio web

### 7. Testimonios
- **Carpeta:** `content/testimonios/`
- **Campos:** Nombre, Testimonio, Foto, Fecha, Publicado
- **Uso:** Testimonios de miembros de la iglesia

## 🔧 Configuración del Backend

### Para Producción (Netlify)
El CMS está configurado para usar `git-gateway` que funciona automáticamente con Netlify.

### Para Desarrollo Local
Si necesitas desarrollo local, puedes usar el backend `proxy` o `test-repo`:

```yaml
backend:
  name: proxy
  proxy_url: http://localhost:8081/api/v1
```

O para pruebas:

```yaml
backend:
  name: test-repo
```

## 📸 Gestión de Imágenes

- **Carpeta de medios:** `assets/images/`
- **Formatos soportados:** JPG, PNG, GIF, WebP
- **Tamaño recomendado:** Máximo 2MB por imagen
- **Nombres de archivo:** Usar guiones bajos o guiones, no espacios

## 🔄 Sincronización

Los cambios realizados en el CMS se guardan automáticamente en el repositorio Git y se despliegan automáticamente si tienes integración continua configurada.

## 📖 Uso del Editor

### Markdown
El CMS usa Markdown para el contenido. Sintaxis básica:
- `# Título` - Encabezado principal
- `## Subtítulo` - Encabezado secundario
- `**texto**` - Texto en negrita
- `*texto*` - Texto en cursiva
- `[enlace](url)` - Enlaces
- `![alt](imagen.jpg)` - Imágenes

### Campos Especiales
- **Fecha/Hora:** Usa el selector de fecha del CMS
- **Imágenes:** Arrastra y suelta o selecciona desde el explorador
- **Listas:** Separa con saltos de línea o usa guiones

## 🆘 Solución de Problemas

### Error de autenticación
1. Verifica que tengas usuarios configurados en tu backend
2. Asegúrate de que el dominio esté en la lista blanca

### Imágenes no se cargan
1. Verifica que la carpeta `assets/images/` tenga permisos de escritura
2. Comprueba que las imágenes no excedan el límite de tamaño

### Cambios no aparecen
1. Espera a que se complete el despliegue
2. Limpia la caché del navegador
3. Verifica que los cambios se hayan guardado en Git

## 📞 Soporte

Para soporte técnico del CMS, consulta:
- [Documentación de Decap CMS](https://decapcms.org/docs/)
- [GitHub Issues](https://github.com/decaporg/decap-cms/issues)