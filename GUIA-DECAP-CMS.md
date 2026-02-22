# 🚀 Guía Completa: Cómo Usar Decap CMS

## Paso 1: Acceder al Panel Administrativo

1. **Abre tu navegador web**
2. **Ve a la URL del panel:**
   ```
   https://tu-dominio.com/admin/
   ```
   *(Reemplaza `tu-dominio.com` con tu dominio real)*

3. **Inicia sesión** con tus credenciales

---

## Paso 2: Entender la Interfaz

### Barra Lateral Izquierda
- **Colecciones**: Las diferentes secciones de contenido
- **Media**: Gestión de imágenes y archivos
- **Settings**: Configuración del CMS

### Área Principal
- **Lista de elementos**: Contenido existente
- **Botón "New [Colección]"**: Crear nuevo contenido

---

## Paso 3: Crear y Editar Contenido

### Crear un Nuevo Elemento

1. **Haz clic en una colección** (ej: "Estudios Bíblicos")
2. **Haz clic en "New Estudios Bíblicos"**
3. **Llena los campos requeridos**

### Campos Comunes

#### Texto Simple
```
Título: Mi Primer Estudio Bíblico
```
*Escribe directamente en el campo*

#### Área de Texto Grande
```
Descripción: Este estudio explora...
```
*Campo más grande para texto largo*

#### Selector de Fecha
- **Haz clic en el calendario** 📅
- **Selecciona fecha y hora**
- **Formato:** DD/MM/YYYY HH:MM

#### Imágenes
- **Arrastrar y soltar** desde tu computadora
- **O haz clic para seleccionar** desde el explorador
- **Formatos:** JPG, PNG, GIF, WebP
- **Tamaño máximo:** 2MB recomendado

#### Listas
```
Valores:
- Fe
- Esperanza
- Amor
```
*Cada línea es un elemento de la lista*

#### Selectores (Desplegables)
- **Haz clic en el campo**
- **Selecciona una opción** de la lista

---

## Paso 4: Usar Markdown para Contenido

Decap CMS usa **Markdown** para el contenido rico. Aquí la sintaxis básica:

### Encabezados
```markdown
# Título Principal (H1)
## Subtítulo (H2)
### Sección (H3)
#### Subsección (H4)
```

### Texto Formateado
```markdown
**Texto en negrita**
*Texto en cursiva*
~~Texto tachado~~
```

### Listas
```markdown
Lista numerada:
1. Primer punto
2. Segundo punto

Lista con viñetas:
- Elemento 1
- Elemento 2
  - Subelemento
```

### Enlaces e Imágenes
```markdown
[Texto del enlace](https://ejemplo.com)
![Texto alternativo](imagen.jpg)
```

### Citas y Código
```markdown
> Esta es una cita bíblica

`código inline`

```
Bloque de código
con múltiples líneas
```
```

---

## Paso 5: Gestionar Contenido por Colección

### 📋 Configuración General
**Ubicación:** Archivo único `content/config.json`

Campos principales:
- **Teléfono**: Número de contacto
- **Email**: Correo electrónico
- **Dirección**: Ubicación física
- **Horarios**: Horario de atención
- **URLs de redes sociales**: Facebook, Instagram, Twitter

### 📖 Historia de la Iglesia
**Ubicación:** `content/historia/`

Para crear una entrada histórica:
1. **Título**: "Nuestra Fundación"
2. **Fecha**: Selecciona la fecha del evento
3. **Imagen destacada**: Sube una foto histórica
4. **Resumen**: Breve descripción (aparece en listas)
5. **Contenido**: Historia completa en Markdown

### 📚 Estudios Bíblicos
**Ubicación:** `content/estudios-biblicos/`

Campos específicos:
- **Autor**: Nombre del pastor o líder
- **Referencia Bíblica**: Ej: "Juan 3:16"
- **Imagen destacada**: Ilustración del estudio

### 👥 Ministerios
**Ubicación:** `content/ministerios/`

Información detallada de cada ministerio:
- **Líder**: Nombre del responsable
- **Horario**: Días y horas de reunión
- **Contacto**: Email o teléfono específico

### 📅 Eventos
**Ubicación:** `content/eventos/`

Campos importantes:
- **Fecha y Hora**: Inicio del evento
- **Fecha de fin**: Para eventos de varios días
- **Tipo de evento**: Culto, Conferencia, etc.
- **Ubicación**: Lugar específico

### 📸 Galería de Fotos
**Ubicación:** `content/galeria/`

Para cada imagen:
- **Categoría**: Cultos, Eventos, Ministerios, etc.
- **Descripción**: Contexto de la foto

### 💬 Testimonios
**Ubicación:** `content/testimonios/`

Campos simples:
- **Nombre**: Nombre de la persona
- **Testimonio**: Su experiencia
- **Publicado**: ✓ para mostrar en el sitio

---

## Paso 6: Guardar y Publicar

### Guardar Cambios
1. **Haz clic en "Save"** (Guardar)
2. **Elige el estado:**
   - **Save as draft**: Borrador (no visible)
   - **Publish**: Publicar (visible en el sitio)

### Estados de Publicación
- **Draft**: Borrador - Solo visible en el CMS
- **Published**: Publicado - Visible en el sitio web
- **Scheduled**: Programado - Se publicará en fecha futura

---

## Paso 7: Gestionar Imágenes

### Subir Imágenes
1. **Ve a "Media"** en la barra lateral
2. **Arrastrar y soltar** imágenes
3. **O haz clic en "Upload"**

### Usar Imágenes en Contenido
1. **En un campo de imagen**: Selecciona desde la biblioteca
2. **En contenido Markdown**:
   ```markdown
   ![Descripción](ruta/a/la/imagen.jpg)
   ```

### Organizar Imágenes
- **Nombres descriptivos**: `estudio-biblico-juan-3.jpg`
- **Carpetas**: Se organizan automáticamente por fecha
- **Optimización**: Mantén imágenes bajo 2MB

---

## Paso 8: Flujo de Trabajo Recomendado

### Para Contenido Nuevo
1. **Crear borrador** con información básica
2. **Agregar imágenes** y contenido detallado
3. **Revisar ortografía** y formato
4. **Publicar** cuando esté listo

### Para Ediciones
1. **Abrir elemento existente**
2. **Hacer cambios necesarios**
3. **Guardar como borrador** para revisión
4. **Publicar** cuando esté aprobado

### Para Eventos
1. **Crear evento** con anticipación
2. **Incluir todos los detalles**
3. **Agregar imagen promocional**
4. **Programar publicación** si es necesario

---

## Paso 9: Solución de Problemas

### Problema: No puedo acceder al CMS
**Solución:**
- Verifica la URL: `https://tu-dominio.com/admin/`
- Confirma que el sitio esté desplegado
- Revisa credenciales de acceso

### Problema: Cambios no aparecen en el sitio
**Solución:**
- Espera 1-2 minutos para el despliegue
- Limpia caché del navegador (Ctrl+F5)
- Verifica que esté "Publicado", no "Borrador"

### Problema: Imágenes no se cargan
**Solución:**
- Verifica tamaño (máximo 2MB)
- Formato soportado (JPG, PNG, GIF, WebP)
- Nombre sin caracteres especiales

### Problema: Error al guardar
**Solución:**
- Campos requeridos marcados con *
- Verifica formato de email y URLs
- Revisa sintaxis Markdown

---

## Paso 10: Consejos Avanzados

### Atajos de Teclado
- `Ctrl+S` (o `Cmd+S`): Guardar
- `Ctrl+B`: Negrita (en campos de texto)
- `Ctrl+I`: Cursiva (en campos de texto)

### Plantillas Rápidas
Guarda borradores como plantillas para contenido similar.

### Programación de Contenido
Usa "Scheduled" para publicar automáticamente en fechas específicas.

### Colaboración
- Un editor puede crear borradores
- Otro puede revisar y publicar
- Historial de cambios disponible

---

## 📞 Soporte y Recursos

### Documentación Oficial
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

### Comunidad
- [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
- [Discord Community](https://decapcms.org/chat/)

### Contacto Local
Para soporte específico de tu sitio, contacta a tu administrador técnico.

---

## ✅ Checklist de Verificación

Antes de publicar:
- [ ] Título claro y descriptivo
- [ ] Imágenes con texto alternativo
- [ ] Enlaces funcionando
- [ ] Ortografía correcta
- [ ] Formato consistente
- [ ] Información de contacto actualizada
- [ ] Fechas y horarios correctos

¡Tu sitio web ahora es completamente gestionable a través de Decap CMS!