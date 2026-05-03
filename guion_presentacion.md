# Guía de exposición ultra-detallada

Esta guía es el recurso definitivo para impartir la clase. Combina narrativa pedagógica, especificaciones técnicas de bajo nivel y dinámicas de interacción.

---

## Diapositiva 0: Apertura de Sesión y Visión Holística
**Visual:** Topología Integral (`Topologia.png`) | **Stickers:** `router.svg`, `wifi.svg`.

*   **Narrativa de Inicio:** "Bienvenidos a la sesión sobre el Módulo 13: Configuración de Redes Inalámbricas. Hoy no solo hablaremos de conectividad; hablaremos de arquitectura. La topología que ven en pantalla representa una red de campus moderna: desde el borde inalámbrico donde están los usuarios, hasta el núcleo donde reside el WLC y los servidores de autenticación."
*   **Punto Crítico:** "Fíjense en las líneas de puntos: representan los túneles lógicos sobre la infraestructura física. Esa es la esencia de lo que configuraremos hoy."
*   **Verificación de Aprendizaje:** "¿Qué componente de esta imagen creen que es el 'cerebro' que toma las decisiones de radiofrecuencia? (Respuesta: El WLC)."

---

## Diapositiva 1: 1. Introducción y Evolución Técnica
**Visual:** Dashboard de 3 Niveles | **Stickers:** `globe.svg`, `mobile.svg`.

*   **Tarjeta 1 - Objetivo (Click):** "El objetivo es la **Escalabilidad**. **Explicación Profunda:** No es lo mismo gestionar un AP que gestionar 5,000. Aquí aprenderemos la 'Gestión Centralizada'. Mientras un router doméstico es autónomo, en redes empresariales los APs son 'ligeros' (LWAP) y dependen totalmente del controlador."
*   **Tarjeta 2 - Evolución (Click):** "**Concepto: Ubicuidad.** Pasamos del estándar 802.11b (11 Mbps) al Wi-Fi 6 (hasta 9.6 Gbps). La evolución no es solo velocidad, es capacidad. Antes un AP soportaba 10 usuarios; hoy, un AP de alta densidad soporta más de 200 clientes simultáneos sin colapsar."
*   **Tarjeta 3 - Libertad vs Complejidad (Click):** "**Dato Técnico:** El Wi-Fi es una red de 'medio compartido' (Half-Duplex), como un walkie-talkie. A mayor cantidad de usuarios, más colisiones. Nuestra labor como ingenieros es minimizar esa complejidad mediante una planeación de canales correcta."

---

## Diapositiva 2: 2. El Router Inalámbrico Integrado (SOHO)
**Visual:** Hardware y Puertos | **Stickers:** `access_point.svg`, `ethernet.svg`.

*   **Tarjeta 1 - Puertos y Antenas (Click):** "**Análisis de Hardware:** El puerto **WAN (Wide Area Network)** suele ser de color distinto (azul/amarillo). Recibe una IP pública vía DHCP o PPPoE. Los puertos **LAN (Local Area Network)** son un switch integrado de capa 2. **Dato Curioso:** Las antenas usan una tecnología llamada MIMO (Multiple Input Multiple Output) para enviar múltiples ráfagas de datos por el aire al mismo tiempo."
*   **Tarjeta 2 - Servicios Consolidados (Click):** "**Profundización de Servicios:** 
    *   **Firewall:** Realiza SPI (Stateful Packet Inspection). 
    *   **NAT:** Realiza sobrecarga de direcciones (PAT). 
    *   **QoS:** Clasifica el tráfico usando bits de prioridad (CoS o DSCP)."

---

## Diapositiva 3: 3. Configuración: Pasos Iniciales y Hardening
**Visual:** Secuencia Metódica | **Stickers:** `tech_gear.svg`, `key_security.svg`.

"La seguridad no se añade al final; se construye desde el inicio:
1.  **Acceso:** Entramos a la GUI (Interfaz Gráfica) vía HTTP/HTTPS. La IP por defecto es una dirección de clase C privada (**192.168.0.1**).
2.  **Contraseña:** Cambio de credenciales de plano de gestión. **Explicación:** Esto protege el acceso al panel, no al Wi-Fi. Son dos cosas distintas.
3.  **Pool DHCP:** Definimos el 'Lease Time' (tiempo de préstamo). **Dato Técnico:** Si el tiempo es muy corto, hay mucho tráfico de control; si es muy largo, nos quedamos sin IPs para nuevos usuarios.
4.  **Nueva IP:** Movemos el router a un segmento 'no obvio' (ej. **10.10.10.1/24**). Esto es seguridad por oscuridad, una capa adicional mínima pero necesaria."

---

## Diapositiva 4: 4. Gestión de Direccionamiento y TLS
**Visual:** Detalles de IP y Login.

*   **Tarjeta 1 - Gestión de IPs (Click):** "**Escenario de Falla:** Al cambiar la IP, el router deja de responder en la .1. El servidor DHCP se reinicia. **Acción de Clase:** Expliquen que si el navegador se queda 'cargando', deben verificar su propia IP con `ipconfig /all` para ver quién es su nuevo Gateway."
*   **Tarjeta 2 - Login Seguro (Click):** "**Criptografía básica:** HTTPS utiliza certificados SSL/TLS. Al entrar, el navegador nos advierte 'Conexión no segura' porque el router usa un certificado autofirmado. Debemos explicar que esto es normal en redes locales, pero que el tráfico sí viaja cifrado."

---

## Diapositiva 5: 5. Configuración Inalámbrica Avanzada (Radio)
**Visual:** SSID, Modos y RADIUS | **Stickers:** `frequency_24.svg`, `frequency_5.svg`.

*   **Tarjeta 1 - SSID (Click):** "**Manejo de Espectro:** Podemos tener varios SSIDs en un mismo AP. Esto se llama BSSID (Basic Service Set Identifier). Cada uno puede pertenecer a una VLAN distinta."
*   **Tarjeta 2 - Modos de Red (Click):** "**Física de Radio:** 2.4 GHz tiene solo 3 canales que no se tocan (1, 6, 11). 5 GHz tiene más de 20 canales. **Pregunta:** ¿Por qué 5GHz es más rápida? Porque los canales son más anchos (80MHz vs 20MHz), permitiendo que viajen más datos por segundo."
*   **Tarjeta 3 - RADIUS (802.1X) (Click):** "**Protocolo de Seguridad:** Usamos WPA2-Enterprise. El AP no guarda claves; encapsula el usuario/clave en paquetes RADIUS y los envía al servidor AAA. Es el estándar de oro en corporativos."

---

## Diapositiva 6: 6. Redes de Malla (Mesh / Wireless Bridge)
**Visual:** Ilustración de Nodos (`RedMalla.png`).

*   **Tarjeta 1 - ¿Qué es Mesh? (Click):** "**Concepto: Backhaul Inalámbrico.** Los nodos Mesh usan una radio dedicada solo para hablar entre ellos (Backhaul) y otra radio para los usuarios. Esto evita que la velocidad caiga a la mitad en cada salto, un problema común de los repetidores viejos."
*   **Tarjeta 2 - Roaming Fluido (Click):** "**Algoritmo de Cambio:** Gracias al estándar **802.11k y 802.11v**, el router le avisa al celular: 'Oye, el nodo de la cocina tiene mejor señal que yo, múdate'. El celular acepta y el cambio ocurre en milisegundos."

---

## Diapositiva 7: 7. NAT, PAT y Calidad de Servicio
**Visual:** Servicios de Capa 4 | **Stickers:** `cloud.svg`, `data_packet.svg`.

*   **Tarjeta 1 - NAT (Click):** "**Explicación de Puertos:** NAT usa una técnica llamada PAT (Port Address Translation). Asocia una IP interna + un puerto interno con la IP pública + un puerto externo. Sin esto, solo una persona podría navegar a la vez."
*   **Tarjeta 2 - QoS (Click):** "**Concepto Vital: Latencia vs Jitter.** El tráfico de tiempo real tiene dos enemigos. La latencia es el retraso total; pero el **Jitter** es la variación de ese retraso. 
    *   **Analogía de Clase:** Imaginen que piden una pizza. La latencia es que llegue en 40 min. El Jitter es que un día llegue en 20 min y otro en 2 horas; esa inconsistencia es lo que rompe la red. 
    *   **Impacto en Gaming:** El Jitter causa los famosos 'lag spikes' donde tu personaje se teletransporta. 
    *   **Impacto en Llamadas:** Es lo que hace que la voz suene metálica o robótica. 
    *   **Marcado de Paquetes:** Usamos valores DSCP (EF) para que el router priorice estos paquetes y los envíe con un ritmo constante, eliminando el tartamudeo."
*   **Tarjeta 3 - Reenvío de Puertos (Click):** "**Seguridad:** Tengan cuidado. Abrir el puerto 3389 (RDP) al mundo es una invitación a ataques de fuerza bruta. Siempre usen puertos no estándar o VPNs."

---

## Diapositiva 8: 8. Arquitectura WLC y Protocolo CAPWAP
**Visual:** Controlador Empresarial | **Stickers:** `wlc_controller.svg`, `network_node.svg`.

*   **Tarjeta 1 - WLC (Click):** "**Capa de Control:** El WLC maneja la configuración de RF, la autenticación y la seguridad de forma centralizada. Si un AP se rompe, pones uno nuevo y el WLC le 'inyecta' la configuración en segundos."
*   **Tarjeta 2 - CAPWAP (Click):** "**Deep Dive:** CAPWAP usa dos puertos UDP: 
    *   **5246 (Control):** Para comandos de configuración (Cifrado con DTLS).
    *   **5247 (Data):** Para el tráfico real de los usuarios."
*   **Tarjeta 3 - Puertos/Interfaces (Click):** "**Lógica de Red:** Las interfaces virtuales son como 'tarjetas de red falsas' que el WLC usa para separar el tráfico por VLANs. Esto permite cumplir con normativas de seguridad (ej. aislar red de invitados)."

---

## Diapositiva 9: 9. Dashboard y Telemetría del WLC
**Visual:** Interfaz de Monitoreo.

*   **Tarjeta 1 - Dashboard (Click):** "**Métricas Críticas:** Buscamos el 'Client Count' y el 'Noise Floor'. Un ruido mayor a -85dBm indica interferencia grave que degradará la experiencia del usuario."
*   **Tarjeta 2 - Información del AP (Click):** "**Análisis de Radio:** Podemos ver qué AP tiene más clientes. Si un AP tiene 50 usuarios y el de al lado tiene 2, el WLC puede usar 'Load Balancing' para mover usuarios al AP menos cargado."

---

## Diapositiva 10: 10. Configuración WLAN: Flujo de 7 Pasos
**Visual:** Secuencia Interactiva con Evidencia.

"Este es el procedimiento estándar de la industria (Cisco/Meraki):
1.  **Crear:** (Click) Definimos el SSID **'Wireless_LAN'**. Es el nombre de capa 2.
2.  **Habilitar:** (Click) Sin marcar 'Enabled', el radio no emite energía.
3.  **Interfaz:** (Click) Vinculamos la WLAN a la Interfaz de Gestión o una VLAN de datos específica.
4.  **Seguridad:** (Click) Seleccionamos **WPA2+AES**. **Concepto:** AES es el estándar de cifrado simétrico más seguro disponible para Wi-Fi comercial."
5.  **Verificar:** Confirmamos el mapeo de interfaces.
6.  **Monitorear:** Verificamos el estado 'UP' del SSID.
7.  **Detalles:** Revisamos que los clientes obtengan IP del segmento correcto.

---

## Diapositiva 11: 11. Seguridad Enterprise y RADIUS
**Visual:** Diagrama AAA (`RADIUS.png`).

*   **Personal vs Enterprise (Click):** "**Seguridad de Identidad:** En 'Personal' la seguridad es sobre el equipo. En 'Enterprise' es sobre el **Usuario**. Esto permite revocar accesos sin afectar a los demás."
*   **RADIUS (Click):** "**Proceso AAA:** 
    *   **Autenticación:** ¿Eres quién dices ser?
    *   **Autorización:** ¿A qué tienes permiso? (ej. VLAN 10).
    *   **Auditoría:** ¿Cuánto tiempo estuviste y qué hiciste?"

---

## Diapositiva 12: 12. VLANs y DHCP (Aprovisionamiento)
**Visual:** Segmentación y Servidores.

*   **Interfaces Virtuales (Click):** "**Concepto:** Trunking inalámbrico. El cable que va al AP lleva todas las VLANs etiquetadas (802.1Q), y el AP las reparte por diferentes SSIDs."
*   **DHCP Scope (Click):** "**Dato Técnico:** El WLC usa la opción 43 de DHCP para que los APs nuevos 'encuentren' al controlador en la red sin saber su IP de antemano. Se llama 'Zero Touch Provisioning'."

---

## Diapositiva 13: 13. Monitoreo, SNMP y Métricas de Calidad
**Visual:** Gestión Remota | **Stickers:** `radar_tracking.svg`, `database_storage.svg`.

*   **SNMP (Click):** "**Arquitectura:** Tenemos el MIB (Management Information Base), que es como el diccionario de lo que el WLC sabe. El software de monitoreo consulta estos datos cada 5 minutos."
*   **Estado de Clientes (Click):** "**Métricas Pro: RSSI vs SNR.** 
    *   **RSSI:** Qué tan fuerte es la señal. 
    *   **SNR:** Qué tan limpia es la señal (Señal menos Ruido). Un SNR de 25dB es excelente; 10dB es inusable."

---

## Diapositiva 14: 14. Metodología de Troubleshooting (Ingeniería)
**Visual:** 6 Ilustraciones Digitales Técnicas.

"Para resolver fallas, no adivinamos; aplicamos el método científico:
1.  **Identificar:** (Click) [Imagen: Alertas Críticas] ¿Es falla de área o de un solo dispositivo?
2.  **Teoría:** (Click) [Imagen: Hipótesis y Datos] ¿Falla de capa 1 (cable), capa 2 (Wi-Fi) o capa 3 (IP)?
3.  **Validar:** (Click) [Imagen: Test de Servidor] Usamos `ping` para conectividad y `tracert` para ver dónde se pierde el paquete.
4.  **Plan:** (Click) [Imagen: Plan de Acción] Definimos si el cambio es en el WLC o en el Switch de acceso.
5.  **Verificar:** (Click) [Imagen: Conexión Exitosa] Confirmamos que el **Handshake** de 4 vías de WPA2 se completa con éxito.
6.  **Documentar:** (Click) [Imagen: Reporte Final] Guardamos la 'Lección Aprendida' para reducir el tiempo de respuesta la próxima vez."

---

## Diapositiva 15: 15. Escenario: Falla de Cliente (APIPA)
**Visual:** `ClienteDesconectado.png` | **Stickers:** `ip_block.svg`, `signal_lost.svg`.

*   **Análisis Clínico (Click):** "Si ven una IP **169.254.x.x**, el cliente se auto-asignó esa IP porque el servidor DHCP no respondió. **Causa probable:** El túnel CAPWAP del AP está caído o la VLAN en el switch no está permitida en el puerto del AP."

---

## Diapositiva 16: 16. Escenario: Rendimiento y Radiofrecuencia
**Visual:** Optimización de Canales.

*   **Red Lenta (Click):** "**Análisis de Performance:** Una red puede tener 'muchas megas' y aun así ir mal. ¿Por qué? Por el **Jitter**. Si los paquetes de tu juego llegan desordenados, el servidor no sabe dónde estás. 
    *   **Causa Inalámbrica:** Las interferencias de un microondas o un motor eléctrico causan micro-cortes que disparan el Jitter. 
    *   **Solución:** Cambiar a la banda de 5 GHz. Al tener más canales y menos ruido, la entrega de paquetes es más 'rítmica' y constante, eliminando el lag en juegos y el tartamudeo en llamadas."
*   **Firmware (Click):** "**Estabilidad:** Los fabricantes lanzan parches para 'bugs' de seguridad (como KRACK o Dragonblood). Mantener el firmware al día es la defensa número 1."
*   **Optimización (Click):** "**Obstáculos:** Los espejos y el agua (plantas/personas) absorben la señal de 2.4GHz. El metal la refleja, causando un efecto llamado 'Multi-path' que confunde al receptor."

---

## Diapositiva 17: 17. Laboratorio Final: Packet Tracer
**Visual:** Topología en Simulación.

"Este laboratorio es el examen final de integración:
1.  **RADIUS:** Configuramos el IP y el secreto compartido en el servidor.
2.  **WLC:** Apuntamos la autenticación de la WLAN al servidor RADIUS.
3.  **WLAN:** Creamos **'CompanyName'** con WPA2-Enterprise.
4.  **Client:** El usuario **'Bob'** se conecta. **Éxito:** Si Bob navega, significa que el túnel CAPWAP, el enlace troncal (Trunk) y la base de datos de RADIUS están sincronizados."

---

## Diapositiva 18: 18. Síntesis y Mejores Prácticas WLC
**Visual:** Dashboard Técnico | **Stickers:** `broadcast_tower.svg`, `satellite_dish.svg`.

*   **Resumen Técnico (Click):** "La gestión centralizada permite funciones avanzadas como **RRM (Radio Resource Management)**: el WLC escucha el ruido y, si detecta un microondas cerca, le ordena a los APs cambiar de canal automáticamente sin que el usuario lo note."

---

## Diapositiva 19: 19. Resumen de Conceptos de Clase
**Visual:** Topología de Cierre.

"Hoy hemos aprendido que el Wi-Fi es 10% aire y 90% infraestructura cableada. Sin un DHCP configurado, sin VLANs etiquetadas y sin un WLC que coordine, el Wi-Fi es solo interferencia. El verdadero ingeniero diseña lo invisible para que lo visible funcione."

---

## Diapositiva 20: 20. Conclusión y Feedback
**Visual:** Robot Final | **Stickers:** `firewall.svg`, `vpn_tunnel.svg`.

"Hemos concluido el Módulo 13. Ahora tienen las herramientas para configurar desde una casa hasta una corporación. ¿Tienen alguna duda técnica sobre CAPWAP, RADIUS o la segmentación de VLANs que vimos hoy?"
