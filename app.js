const slidesData = [
    {
        title: "Inicio: configuración de redes inalámbricas",
        isCover: true,
        content: [
            {
                type: "card",
                title: "Configuración de redes inalámbricas",
                text: "<b>Asignatura:</b> Conmutación y enrutamiento de redes de datos.<br><b>Docente:</b> Ing. Marvin Alejandro Arceo Alcocer.",
                details: `
                    <div style="display: flex; flex-direction: column; align-items: center; margin-top: -0.5rem;">
                        <b style="color: var(--primary-color); margin-bottom: 0.5rem;">Alumnos:</b>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; text-align: left; color: var(--text-main);">
                            <div>• Cauich Pat Pedro Antonio<br>• Corona Noh Gabriel Danneshe</div>
                            <div>• Dzul Dzul Juan José<br>• Huh Puc José Manuel</div>
                        </div>
                        <b style="margin-top: 0.8rem;">Grupo: 6° 'C'</b>
                    </div>
                `,
                image: "images/Topologia.png",
                fullWidth: true
            }
        ]
    },
    {
        title: "1. Introducción y evolución",
        content: [
            {
                type: "card",
                title: "Objetivo del módulo 13",
                text: "Implementar una red inalámbrica (WLAN) utilizando tanto un router inalámbrico para sitios remotos como un controlador (WLC) para entornos empresariales.",
                details: "Aprenderás a configurar SSID, canales, seguridad WPA2 (personal y enterprise), servicios como DHCP/NAT y técnicas de solución de problemas.",
                image: "images/PracticaWireless.png"
            },
            {
                type: "card",
                title: "De dial-up a la movilidad",
                text: "Atrás quedaron las conexiones dial-up lentas que bloqueaban la línea telefónica. Hoy, la movilidad es una necesidad.",
                details: "Las redes inalámbricas permiten conectar smartphones, laptops y tablets en cualquier lugar, pero requieren dispositivos intermediarios complejos y protocolos robustos.",
                image: "images/ImagenRouter.png"
            },
            {
                type: "card",
                title: "Relación: libertad versus complejidad",
                text: "A mayor libertad de movimiento, mayor es la necesidad de entender cómo interactúan los puntos de acceso con la infraestructura cableada.",
                details: "<b>Dependencia:</b> la señal de radio es solo el último tramo; detrás hay switches, routers y servidores de red coordinados.",
                image: "images/TopologiaSNMP.png"
            }
        ]
    },
    {
        title: "2. El router inalámbrico integrado",
        content: [
            {
                type: "card",
                title: "Puertos y antenas",
                text: "Un router doméstico combina puertos LAN para tu red interna, un puerto WAN para el ISP y antenas para Wi-Fi.",
                details: "• <b>LAN:</b> conexión cableada local.<br>• <b>WAN:</b> entrada de internet.<br>• <b>Antenas:</b> propagación de radiofrecuencia.",
                image: "images/ImagenRouter.png"
            },
            {
                type: "card",
                title: "Servicios del router",
                text: "Proveen seguridad (firewall), DHCP, NAT y calidad de servicio (QoS) en un solo chasis.",
                details: "Estos servicios permiten que múltiples dispositivos compartan internet de forma segura y eficiente.",
                image: "images/IPV4.png"
            }
        ]
    },
    {
        title: "3. Configuración: pasos iniciales",
        content: [
            {
                type: "steps",
                title: "Pasos para una red segura",
                steps: [
                    { n: 1, title: "Acceso", desc: "Entrar vía navegador a la IP default (ej: 192.168.0.1).", image: "images/IniciarSesion.png" },
                    { n: 2, title: "Contraseña", desc: "Cambiar 'admin' por una clave robusta inmediatamente.", image: "images/CambiarContraseña.png" },
                    { n: 3, title: "Pool DHCP", desc: "Definir el rango de IPs para los clientes internos.", image: "images/ServidorDHCP.png" },
                    { n: 4, title: "Nueva IP", desc: "Cambiar la IP del router (ej: 10.10.10.1) para ocultar defaults.", image: "images/IPV4.png" }
                ]
            }
        ]
    },
    {
        title: "4. Configuración: gestión y login",
        content: [
            {
                type: "card",
                title: "Gestión de IPs",
                text: "Al cambiar la dirección del router, perderás conexión temporalmente.",
                details: "Es vital anotar la nueva IP. El cliente recibirá una nueva IP automáticamente vía DHCP tras renovar la conexión.",
                image: "images/ImagenRouter.png"
            },
            {
                type: "card",
                title: "Login de seguridad",
                text: "El router siempre solicitará autorización. No dejes las credenciales de fábrica (admin/admin).",
                details: "Usa HTTPS siempre que sea posible para evitar que tus claves viajen en texto plano por la red inalámbrica.",
                image: "images/SesionWLC.png"
            }
        ]
    },
    {
        title: "5. Configuración inalámbrica avanzada",
        content: [
            {
                type: "card",
                title: "Nombre de red (SSID)",
                text: "El Service Set Identifier (SSID) es el nombre que los usuarios ven al buscar Wi-Fi.",
                details: "Se recomienda un nombre descriptivo pero que no revele información sensible de la empresa.",
                image: "images/ConfigurarSSID.png"
            },
            {
                type: "card",
                title: "Modos de red",
                text: "Selecciona el estándar (802.11 b/g/n/ac/ax) según la compatibilidad de tus dispositivos.",
                details: "<b>Tip:</b> el modo 'Mixed' asegura que dispositivos viejos puedan conectar, pero puede ralentizar la red.",
                image: "images/InfoPuntoAcceso.png"
            },
            {
                type: "card",
                title: "El servidor RADIUS",
                text: "802.1X es el estándar para control de acceso basado en puertos. En redes inalámbricas, centraliza la autenticación.",
                details: "El servidor RADIUS (como PC-A en nuestra topología) maneja la base de datos de usuarios, permitiendo que el WLC delegue la validación de credenciales.",
                image: "images/RADIUS.png"
            }
        ]
    },
    {
        title: "6. Redes de malla (Mesh)",
        content: [
            {
                type: "card",
                title: "¿Qué es Mesh?",
                text: "Un sistema de varios nodos que actúan como una única red Wi-Fi en toda la casa.",
                details: "A diferencia de los repetidores, los nodos se comunican entre sí para encontrar la ruta más rápida hacia el router.",
                image: "images/RedMalla.png",
                fullWidth: true
            },
            {
                type: "card",
                title: "Roaming fluido",
                text: "Te mueves por el edificio y tu dispositivo salta de un nodo a otro sin desconectarse.",
                details: "El sistema decide automáticamente a qué nodo conectarte basándose en la potencia de la señal.",
                image: "images/RedMalla.png",
                fullWidth: true
            }
        ]
    },
    {
        title: "7. NAT y calidad de servicio (QoS)",
        content: [
            {
                type: "card",
                title: "NAT (Traducción de direcciones)",
                text: "Permite que muchos dispositivos usen una única IP pública para salir a Internet.",
                details: "El router lleva un registro de qué dispositivo interno solicitó qué dato del exterior.",
                image: "images/NATIPV4.png"
            },
            {
                type: "card",
                title: "Calidad de servicio (QoS)",
                text: "Garantiza que el tráfico crítico (voz/video) pase antes que el correo o descargas.",
                details: "<b>Beneficio:</b> evita que una descarga pesada arruine una videoconferencia o llamada IP.",
                image: "images/Calidad.png"
            },
            {
                type: "card",
                title: "Reenvío de puertos",
                text: "Permite que servicios internos (Web, juegos) sean accesibles desde el exterior.",
                details: "<b>Regla:</b> mapea un puerto externo específico a la IP interna del servidor que provee el servicio.",
                image: "images/ReenviarPuertos.png"
            }
        ]
    },
    {
        title: "8. Arquitectura y topología WLC",
        content: [
            {
                type: "card",
                title: "¿Qué es un WLC?",
                text: "El Wireless LAN Controller (WLC) es el cerebro de la red inalámbrica empresarial, permitiendo la gestión centralizada de múltiples APs.",
                details: "A diferencia de los APs autónomos, los APs basados en controlador (LAPs) no requieren configuración manual individual. El WLC automatiza el despliegue, la gestión de canales y la potencia de radiofrecuencia.",
                image: "images/WLC.png",
                fullWidth: true
            },
            {
                type: "card",
                title: "LWAPP y CAPWAP",
                text: "Son los protocolos que permiten la comunicación entre los LAPs y el controlador central.",
                details: "Los LAPs usan túneles CAPWAP para encapsular el tráfico de datos y de control hacia el WLC. Esto permite que el controlador tome decisiones inteligentes sobre el roaming y el balanceo de carga.",
                image: "images/Topologia.png"
            },
            {
                type: "card",
                title: "Puertos vs interfaces",
                text: "En un WLC, los puertos son conexiones físicas y las interfaces son entidades virtuales lógicas.",
                details: "• <b>Puertos:</b> conectores físicos (troncales) hacia el switch.<br>• <b>Interfaces:</b> similares a las VLANs, cada WLAN se mapea a una interfaz virtual que lleva el tráfico a la red cableada.",
                image: "images/ConfiguracionAvanzada.png"
            }
        ]
    },
    {
        title: "9. Acceso y monitoreo del WLC",
        content: [
            {
                type: "card",
                title: "Acceso al dashboard",
                text: "Se accede mediante una dirección IP de gestión a través de un navegador web (HTTPS).",
                details: "Una vez autenticado, el administrador ve el 'Network summary', un panel que muestra APs asociados, clientes activos y posibles APs sospechosos (rogues).",
                image: "images/SesionWLC.png"
            },
            {
                type: "card",
                title: "Información del AP",
                text: "El WLC proporciona telemetría detallada de cada punto de acceso unido a la red.",
                details: "Desde el menú 'Access points', se puede verificar la dirección IP del AP (ej. 192.168.200.3), el puerto del switch al que está conectado vía CDP y su estado operativo actual.",
                image: "images/InfoPuntoAcceso.png"
            }
        ]
    },
    {
        title: "10. Configuración de WLAN en el WLC",
        content: [
            {
                type: "steps",
                title: "Proceso de configuración (7 pasos)",
                steps: [
                    { n: 1, title: "Crear", desc: "Definir nombre de perfil y SSID (ej. Wireless_LAN).", image: "images/NuevaWLAN.png" },
                    { n: 2, title: "Habilitar", desc: "Activar el estado de la WLAN para que sea visible.", image: "images/HabilitarWLAN.png" },
                    { n: 3, title: "Interfaz", desc: "Seleccionar la interfaz VLAN que llevará el tráfico.", image: "images/SeleccionarInterfaz.png" },
                    { n: 4, title: "Seguridad", desc: "Configurar WPA2-PSK o 802.1X (RADIUS).", image: "images/VerificarAES.png" },
                    { n: 5, title: "Verificar", desc: "Confirmar que la WLAN aparece en la lista de 'WLANs'.", image: "images/VerificarWLAN.png" },
                    { n: 6, title: "Monitorear", desc: "Ver clientes asociándose en tiempo real.", image: "images/MonitorearWLAN.png" },
                    { n: 7, title: "Detalles", desc: "Revisar IP y estadísticas de los clientes conectados.", image: "images/Detalles.png" }
                ]
            }
        ]
    },
    {
        title: "11. Seguridad enterprise (WPA2 enterprise)",
        content: [
            {
                type: "comparison",
                title: "Personal versus enterprise",
                left: { title: "WPA2 personal", desc: "Clave única para todos. Vulnerable si un empleado se va y conoce la clave." },
                right: { title: "WPA2 enterprise", desc: "Credenciales únicas (usuario/pass) validadas por un servidor externo RADIUS." }
            },
            {
                type: "card",
                title: "Servidor RADIUS (AAA)",
                text: "Maneja autenticación, autorización y auditoría. Centraliza la base de datos de usuarios.",
                details: "<b>Relación clave:</b> el WLC actúa como intermediario entre el cliente y el servidor RADIUS (ej: PC-A).",
                image: "images/RADIUS.png",
                fullWidth: true
            }
        ]
    },
    {
        title: "12. VLANs y DHCP en el WLC",
        content: [
            {
                type: "card",
                title: "Interfaces virtuales",
                text: "El WLC mapea WLANs a interfaces virtuales que están vinculadas a VLANs cableadas.",
                details: "<b>Ejemplo:</b> la WLAN 'Datos' se mapea a la VLAN 5. Todo el tráfico de esa WLAN sale al switch etiquetado con el ID 5.",
                image: "images/InfoPuntoAcceso.png"
            },
            {
                type: "card",
                title: "DHCP scope interno",
                text: "El controlador puede gestionar pools de direcciones IP para los APs o los clientes.",
                details: "Generalmente el WLC actúa como relay, pero para laboratorios puede asignar IPs directamente a los puntos de acceso.",
                image: "images/NombrarAlcance.png"
            }
        ]
    },
    {
        title: "13. Monitoreo y SNMP",
        content: [
            {
                type: "card",
                title: "SNMP (Monitoreo)",
                text: "Protocolo para enviar mensajes de gestión (traps) a un servidor central.",
                details: "Permite alertar sobre fallas de APs o saturación de canales en tiempo real.",
                image: "images/SNMPComunity.png"
            },
            {
                type: "card",
                title: "Estado de clientes",
                text: "Supervisión detallada de la señal (RSSI) y calidad de conexión de cada usuario.",
                details: "Ayuda a identificar zonas muertas o dispositivos con problemas de compatibilidad.",
                image: "images/NetworkSummary.png"
            }
        ]
    },
    {
        title: "14. Metodología de solución de problemas",
        content: [
            {
                type: "steps",
                title: "Metodología científica (6 pasos)",
                steps: [
                    { n: 1, title: "Identificar", desc: "Reunir información del usuario y del sistema.", image: "images/step1_identify.png" },
                    { n: 2, title: "Teoría", desc: "Causas probables (distancia, cables, configuración).", image: "images/step2_theory.png" },
                    { n: 3, title: "Validar", desc: "Probar la teoría para confirmar la raíz del problema.", image: "images/step3_validate.png" },
                    { n: 4, title: "Plan", desc: "Establecer pasos para corregir y ejecutar la solución.", image: "images/step4_plan.png" },
                    { n: 5, title: "Verificar", desc: "Asegurar que todo funcione y aplicar medidas preventivas.", image: "images/step5_verify.png" },
                    { n: 6, title: "Documentar", desc: "Registrar qué pasó y cómo se arregló para el futuro.", image: "images/step6_document.png" }
                ]
            }
        ]
    },
    {
        title: "15. Escenario: cliente inalámbrico",
        content: [
            {
                type: "card",
                title: "Cliente no conecta",
                text: "Usa 'ipconfig' para ver si tiene IP. Si no, revisa el servidor DHCP o la clave de seguridad.",
                details: "<b>Falla física:</b> revisa si el AP tiene energía (PoE) y si los cables están en buen estado.",
                image: "images/ClienteDesconectado.png"
            }
        ]
    },
    {
        title: "16. Escenario: red lenta y firmware",
        content: [
            {
                type: "card",
                title: "Red lenta o inestable",
                text: "Interferencias o mala ubicación pueden degradar la señal.",
                details: "Divide el tráfico entre las bandas de 2.4 GHz y 5 GHz para optimizar el rendimiento.",
                image: "images/RedLenta.png"
            },
            {
                type: "card",
                title: "Actualización de firmware",
                text: "Bugs y fallas de seguridad se corrigen actualizando el software del router o WLC.",
                details: "En entornos WLC, puedes pre-descargar el firmware a los APs para minimizar el tiempo de caída de la red.",
                image: "images/Firmware1.png"
            },
            {
                type: "card",
                title: "Optimización de cobertura",
                text: "Evita obstrucciones físicas como muebles o paredes gruesas que bloquean la señal de radio.",
                details: "Si el rango es insuficiente, considera el uso de extensores o puntos de acceso adicionales en malla.",
                image: "images/Firmware2.png"
            }
        ]
    },
    {
        title: "17. Laboratorios prácticos (Packet Tracer)",
        content: [
            {
                type: "steps",
                title: "PT: configuración de WPA2 enterprise",
                steps: [
                    { n: 1, title: "RADIUS", desc: "Configurar IP y secreto compartido en el servidor RADIUS.", image: "images/RADIUS2.png" },
                    { n: 2, title: "WLC", desc: "Agregar la IP del servidor RADIUS en la gestión del WLC.", image: "images/ConfigurarServidor.png" },
                    { n: 3, title: "WLAN", desc: "Crear WLAN 'CompanyName', asignar a VLAN 5 y seguridad 802.1X.", image: "images/NuevaWLAN.png" },
                    { n: 4, title: "Client", desc: "En PC-A Wireless Config, seleccionar perfil enterprise y usuario 'Bob'.", image: "images/TopologiaVLAN5.png" }
                ]
            }
        ]
    },
    {
        title: "18. Síntesis de procesos WLC",
        content: [
            {
                type: "card",
                title: "Gestión y aprovisionamiento",
                text: "La administración centralizada permite configurar múltiples APs desde una única interfaz web segura (HTTPS).",
                details: "<b>Procesos clave:</b><br>• <b>Acceso:</b> ingreso vía IP de gestión con credenciales AAA.<br>• <b>Creación de WLAN:</b> definición de SSID y mapeo a interfaces VLAN específicas.<br>• <b>Propagación:</b> los cambios se sincronizan automáticamente con todos los LAPs asociados.",
                image: "images/SesionWLC.png"
            }
        ]
    },
    {
        title: "19. Resumen de temas",
        content: [
            {
                type: "card",
                title: "Conceptos fundamentales",
                text: "La configuración inalámbrica exitosa depende de una base cableada sólida y servicios auxiliares bien configurados.",
                details: "<b>Relaciones clave:</b><br>• WLC gestiona LAPs vía CAPWAP.<br>• RADIUS centraliza la seguridad enterprise.<br>• NAT/DHCP permiten la conectividad IP y acceso a Internet.",
                image: "images/Topologia.png"
            }
        ]
    },
    {
        title: "Final de la presentación",
        isCover: true,
        content: [
            {
                type: "card",
                title: "¡Gracias por su atención!",
                text: "Configuración de redes inalámbricas",
                details: "<b>Módulo 13</b><br>Conmutación y enrutamiento de redes de datos.<br>ISC - 6° 'C'",
                image: "images/Final.png",
                fullWidth: true
            }
        ]
    }
];

// Mapa de stickers FIJOS por diapositiva (2 únicos por tema)
const SLIDE_STICKERS = {
    0: ['images/svg/router.svg', 'images/svg/wifi.svg'],
    1: ['images/svg/globe.svg', 'images/svg/mobile.svg'],
    2: ['images/svg/access_point.svg', 'images/svg/ethernet.svg'],
    3: ['images/svg/tech_gear.svg', 'images/svg/key_security.svg'],
    4: ['images/svg/password_vault.svg', 'images/svg/identity.svg'],
    5: ['images/svg/frequency_24.svg', 'images/svg/frequency_5.svg'],
    6: ['images/svg/mesh_node.svg', 'images/svg/antenna.svg'],
    7: ['images/svg/cloud.svg', 'images/svg/data_packet.svg'],
    8: ['images/svg/wlc_controller.svg', 'images/svg/network_node.svg'],
    9: ['images/svg/ssh_terminal.svg', 'images/svg/laptop.svg'],
    10: ['images/svg/wifi_6.svg', 'images/svg/vlan_tag.svg'],
    11: ['images/svg/security.svg', 'images/svg/server.svg'],
    12: ['images/svg/fiber_optic.svg', 'images/svg/dns_search.svg'],
    13: ['images/svg/ping_radar.svg', 'images/svg/database.svg'],
    14: ['images/svg/shield_star.svg', 'images/svg/bio_scan.svg'],
    15: ['images/svg/ip_block.svg', 'images/svg/signal_bars.svg'],
    16: ['images/svg/cooling_fan.svg', 'images/svg/power_cord.svg'],
    17: ['images/svg/stack_cable.svg', 'images/svg/module_card.svg'],
    18: ['images/svg/antenna_tower.svg', 'images/svg/satellite.svg'],
    19: ['images/svg/roaming.svg', 'images/svg/heart_wifi.svg'],
    20: ['images/svg/firewall.svg', 'images/svg/vpn_tunnel.svg']
};

// Map themes to slides (simplified lookup)
const SLIDE_THEMES = {
    1: 'wireless',      // Inicio
    2: 'wireless',      // Intro
    3: 'hardware',      // Integrated Router
    4: 'hardware',      // Initial Config
    5: 'wireless',      // Advanced Wireless
    6: 'wireless',      // Mesh
    7: 'connectivity',  // NAT/QoS
    8: 'hardware',      // WLC Intro
    9: 'hardware',      // WLC Monitor
    10: 'hardware',     // WLC WLAN Config
    11: 'security',     // Security Enterprise
    12: 'security',     // Auth/SNMP
    13: 'connectivity', // Monitoring
    14: 'connectivity', // Troubleshooting I (Metodología)
    15: 'connectivity', // Scenario: Client
    16: 'connectivity', // Scenario: Red lenta
    17: 'connectivity', // Lab Enterprise
    18: 'wireless',     // Síntesis
    19: 'wireless',     // Resumen final
    20: 'wireless'      // Final
};

let currentSlide = 0;
let isExpandedAll = false;

window.openModal = (slideIndex, contentIndex) => {
    const item = slidesData[slideIndex].content[contentIndex];
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2>${item.title}</h2>
        <div class="modal-text">${item.text}</div>
        <div class="modal-details">${item.details}</div>
        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
};

window.closeModal = () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.querySelector('.modal-content');
    modalOverlay.classList.remove('active');
    modalContent.classList.remove('fullscreen'); // Reset maximize state
    document.body.style.overflow = ''; // Restore scroll
};

window.openModalWithData = (title, text, image) => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2>${title}</h2>
        <div class="modal-text">${text}</div>
        ${image ? `<img src="${image}" alt="${title}">` : ''}
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.toggleMaximize = () => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.toggle('fullscreen');
};

function init() {
    // Load saved slide from localStorage
    const savedSlide = localStorage.getItem('currentSlide');
    if (savedSlide !== null) {
        currentSlide = parseInt(savedSlide, 10);
        if (isNaN(currentSlide) || currentSlide < 0 || currentSlide >= slidesData.length) {
            currentSlide = 0;
        }
    }

    renderSlide();
    updateControls();

    document.getElementById('nextBtn').onclick = nextSlide;
    document.getElementById('prevBtn').onclick = prevSlide;

    const slideInput = document.getElementById('slideInput');
    if (slideInput) {
        slideInput.onchange = (e) => {
            let val = parseInt(e.target.value, 10) - 1;
            if (!isNaN(val) && val >= 0 && val < slidesData.length) {
                currentSlide = val;
                renderSlide();
                updateControls();
            } else {
                e.target.value = currentSlide + 1;
            }
        };
        // Also jump on Enter key
        slideInput.onkeydown = (e) => {
            if (e.key === 'Enter') slideInput.blur();
        };
    }

    const expandBtn = document.getElementById('expandAllBtn');
    if (expandBtn) expandBtn.style.display = 'none';

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') closeModal();
    });
}

function renderSlide() {
    const container = document.getElementById('slideContainer');
    const data = slidesData[currentSlide];

    const slide = document.createElement('div');
    slide.className = `slide active slide-index-${currentSlide}`;

    let html = data.isCover ? '' : `<h2 class="slide-title">${data.title}</h2>`;

    if (!data.isCover) {
        const stickers = SLIDE_STICKERS[currentSlide] || SLIDE_STICKERS[0];

        const anchors = [
            { bottom: '3%', left: '18%', origin: 'translateX(0)' },
            { bottom: '3%', right: '18%', origin: 'translateX(0)' }
        ];

        anchors.forEach((pos, idx) => {
            const img = stickers[idx];

            // Deterministic rotation based on slide index
            const rot = ((currentSlide * 17 + idx * 23) % 16 - 8);

            const styleString = Object.entries(pos)
                .filter(([k]) => k !== 'origin')
                .map(([k, v]) => `${k}:${v}`).join('; ');

            html += `<img src="${img}" class="slide-decoration" style="${styleString}; transform: ${pos.origin} rotate(${rot}deg)">`;
        });
    }

    const hasSpecialItems = data.content.some(item => item.type !== 'card');
    const sparseClass = (data.content.length <= 2 && !data.isCover && !hasSpecialItems) ? 'sparse-grid' : '';
    const layout12Class = (data.content.length === 3 && !data.isCover && !hasSpecialItems) ? 'layout-1-2' : '';
    html += `<div class="content-grid ${sparseClass} ${layout12Class} ${data.isCover ? 'cover-grid' : ''}">`;

    const cardsData = data.content.filter(c => c.type === 'card');
    const hasOddCards = cardsData.length % 2 !== 0;

    data.content.forEach((item, index) => {
        const isFixed = data.isCover || item.type !== 'card';
        const expandedClass = (isExpandedAll || isFixed) ? 'expanded' : '';
        const fixedClass = isFixed ? 'expanded-fixed' : '';

        // Improved Orphan Detection
        const nonFullWidthCards = cardsData.filter(c => !c.fullWidth);
        const isLastOrphan = !item.fullWidth && item === nonFullWidthCards[nonFullWidthCards.length - 1] && nonFullWidthCards.length % 2 !== 0;
        const orphanClass = isLastOrphan ? 'orphan' : '';

        if (item.type === 'card') {
            const clickHandler = data.isCover ? '' : `onclick="openModal(${currentSlide}, ${index})"`;
            html += `
                <div class="card ${expandedClass} ${fixedClass} ${item.fullWidth ? 'full-width' : ''} ${orphanClass}" ${clickHandler}>
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                    <div class="details">
                        <p>${item.details}</p>
                        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
                    </div>
                </div>
            `;
        } else if (item.type === 'steps') {
            const stepCount = item.steps.length;
            html += `
                <div class="card expanded">
                    <h3>${item.title}</h3>
                    <div class="steps-container steps-count-${stepCount}">
                        ${item.steps.map(s => {
                const hasImage = s.image ? s.image : '';
                return `
                                <div class="step-card" onclick="openModalWithData('${s.title}', '${s.desc.replace(/'/g, "\\'")}', '${hasImage}')" style="cursor: pointer">
                                    <div class="step-number">${s.n}</div>
                                    <strong>${s.title}</strong>
                                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">${s.desc}</p>
                                </div>
                            `;
            }).join('')}
                    </div>
                </div>
            `;
        } else if (item.type === 'comparison') {
            html += `
                <div class="card expanded">
                    <h3>${item.title}</h3>
                    <div class="comparison-container">
                        <div class="comparison-box">
                            <strong>${item.left.title}</strong>
                            <p>${item.left.desc}</p>
                        </div>
                        <div class="comparison-box alt">
                            <strong>${item.right.title}</strong>
                            <p>${item.right.desc}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    html += `</div>`;
    slide.innerHTML = html;

    container.innerHTML = '';
    container.appendChild(slide);

    // Update interactive indicator
    const slideInput = document.getElementById('slideInput');
    const slideTotal = document.getElementById('slideTotal');
    if (slideInput) slideInput.value = currentSlide + 1;
    if (slideTotal) slideTotal.innerText = `/ ${slidesData.length}`;

    const progress = ((currentSlide + 1) / slidesData.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Persistence
    localStorage.setItem('currentSlide', currentSlide);

    // Ensure we start at the top of the new slide
    window.scrollTo(0, 0);
}

function nextSlide() {
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        isExpandedAll = false; // Reset expansion state for new slide
        document.getElementById('expandAllBtn').innerText = '↔ Expandir Todo';
        renderSlide();
        updateControls();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        isExpandedAll = false; // Reset expansion state for new slide
        document.getElementById('expandAllBtn').innerText = '↔ Expandir Todo';
        renderSlide();
        updateControls();
    }
}

function updateControls() {
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').innerText = currentSlide === slidesData.length - 1 ? 'Finalizar' : 'Siguiente';
    if (currentSlide === slidesData.length - 1) {
        document.getElementById('nextBtn').innerHTML = 'Finalizar <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Siguiente <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    adjustViewport(); // Ejecutar después de que el DOM esté listo
});

/**
 * Optimizador de Visibilidad Móvil (Modo Computadora Automático)
 * Usa dimensiones físicas (screen.*) para detección confiable.
 */
function isMobileLandscape() {
    // Usa screen.width/height que son las dimensiones físicas reales del dispositivo
    // y no se ven afectadas por el meta viewport
    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    const isLandscape = screen.width > screen.height;
    const isSmallScreen = Math.min(screen.width, screen.height) < 600;
    return isTouchDevice && isLandscape && isSmallScreen;
}

function adjustViewport() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (isMobileLandscape()) {
        // Modo Horizontal en Móvil: Forzamos vista de escritorio
        viewport.setAttribute('content', 'width=1600');
        document.body.classList.add('mobile-landscape-opt');
    } else {
        // Modo Normal: escala estándar
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        document.body.classList.remove('mobile-landscape-opt');
    }
}

// Escuchar cambios de orientación
window.addEventListener('resize', adjustViewport);
window.addEventListener('orientationchange', () => {
    // Pequeño delay para que el navegador actualice screen.width/height
    setTimeout(adjustViewport, 100);
});
