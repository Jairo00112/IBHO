/* ============================================================================
   CONFIGURACIÓN CENTRAL - Iglesia Bautista Huerto De Los Olivos
   ============================================================================
   Este archivo centraliza todos los números de teléfono, enlaces y textos
   importantes. Edita aquí para actualizar fácilmente todo el sitio.
   
   INSTRUCCIONES:
   1. Actualiza los valores a continuación
   2. Los cambios se aplicarán automáticamente en todo el sitio
   3. NO elimines las propiedades de los objetos
   ============================================================================
*/

window.IBHO_CONFIG = {
    // 🏢 INFORMACIÓN GENERAL DE LA IGLESIA
    church: {
        name: 'Iglesia Bautista Huerto De Los Olivos',
        shortName: 'IBHO',
        email: 'contacto@ibho.example.com',
        website: 'https://ibho.example.com',
        year_founded: 2010
    },

    // 📍 UBICACIONES Y DIRECCIONES
    locations: {
        main: {
            name: 'Iglesia Principal',
            address: 'Calle 46 #21-50, Barranquilla, Colombia',
            phone: '+57 316 768 2762',
            whatsapp: '573167682762',
            coordinates: '11.0041, -74.7788',
            googleMapsLink: 'https://maps.google.com/maps?q=Calle+46+21-50+Barranquilla'
        },
        
        codigoFe: {
            name: 'Fe en Crudo: Sede Girasoles (Código Fe Juvenil)',
            address: 'Calle 46D #10A-47, Barrio Los Girasoles, Barranquilla',
            phone: '+57 316 768 2762',
            whatsapp: '573167682762',
            coordinates: '11.0050, -74.7800',
            googleMapsLink: 'https://maps.google.com/maps?q=Calle+46D+10A-47+Los+Girasoles+Barranquilla'
        },
        
        santoDomingo: {
            name: 'Fe en Crudo: Sede Santo Domingo',
            address: 'Carrera 66 #1C - 65, Barrio Santo Domingo, Barranquilla',
            phone: '+57 316 768 2762',
            whatsapp: '573167682762',
            coordinates: '11.0030, -74.7770',
            googleMapsLink: 'https://maps.google.com/maps?q=Carrera+66+1C-65+Santo+Domingo+Barranquilla'
        }
    },

    // ⏰ HORARIOS
    schedules: {
        main: [
            { day: 'Domingo', time: '10:00 AM', activity: 'Culto de Adoración' },
            { day: 'Miércoles', time: '7:00 PM', activity: 'Estudio Bíblico' },
            { day: 'Sábado', time: '5:00 PM', activity: 'Código Fe Juvenil' }
        ],
        
        codigoFe: [
            { day: 'Sábado', time: '5:00 PM - 7:00 PM', activity: 'Encuentro Semanal' }
        ],
        
        santoDomingo: [
            { day: 'Domingo', time: '3:00 PM', activity: 'Culto Familiar' },
            { day: 'Martes', time: '6:30 PM', activity: 'Escuela Bíblica' },
            { day: 'Jueves', time: '7:00 PM', activity: 'Oración' }
        ],
        
        officeHours: {
            weekdays: '9:00 AM - 6:00 PM',
            weekendAndSunday: '9:00 AM - 1:00 PM'
        }
    },

    // 📱 REDES SOCIALES
    socialMedia: {
        twitter: {
            url: 'https://twitter.com/ibho0856',
            handle: '@ibho0856',
            color: '#1DA1F2'
        },
        
        facebook: {
            url: 'https://www.facebook.com/share/1DZo3cPURs/',
            handle: 'Iglesia Bautista Huerto De Los Olivos',
            color: '#1877F2'
        },
        
        instagram: {
            url: 'https://www.instagram.com/evangelismo_ibho',
            handle: '@evangelismo_ibho',
            color: '#E1306C'
        },
        
        whatsapp: {
            number: '573001234567',
            url: 'https://wa.me/573167282762',
            color: '#25D366'
        }
    },

    // 🎨 IDENTIDAD VISUAL
    colors: {
        primary: '#F39C12',      // Naranja
        secondary: '#3498DB',    // Azul
        dark: '#2C3E50',        // Azul oscuro
        white: '#FFFFFF',
        lightGray: '#ECF0F1',
        darkGray: '#2C3E50'
    },

    // 📖 VALORES Y MISIÓN
    mission: {
        name: 'Iglesia Bautista Huerto De Los Olivos',
        tagline: 'Una familia de fe en el corazón de Barranquilla',
        vision: 'Ser una iglesia que transforma ciudades con el evangelio, formando discípulos que impactan su generación.',
        mission: 'Llevar el amor de Cristo a través de relaciones auténticas, enseñanza bíblica y servicio a la comunidad.',
        values: ['Gracia', 'Verdad', 'Familia', 'Excelencia', 'Servicio']
    },

    // 🔧 CONFIGURACIÓN TÉCNICA
    technical: {
        language: 'es',
        country: 'CO',
        timezone: 'America/Bogota',
        currencyCode: 'COP',
        
        // Análisis (si agrega en futuro)
        googleAnalytics: '',  // ID de Google Analytics (UA-XXXXXXX-X)
        googleTagManager: '', // ID de GTM (GTM-XXXXXX)
        
        // Sitio
        siteName: 'IBHO',
        siteUrl: 'https://ibho.example.com',
        siteDescription: 'Iglesia Bautista Huerto De Los Olivos - Comunidad cristiana evangélica en Barranquilla'
    },

    // 🎯 MENSAJES PREDEFINIDOS
    messages: {
        codigoFeWhatsApp: 'Hola, me gustaría asistir a Código Fe Juvenil',
        santoDomingoWhatsApp: 'Hola, tengo una pregunta sobre la Sede Santo Domingo',
        generalWhatsApp: 'Hola IBHO, quisiera información...'
    }
};

// Exportar para uso en módulos (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.IBHO_CONFIG;
}

console.log('✅ Configuración cargada:', window.IBHO_CONFIG);
