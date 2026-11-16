# Verificación

Revisión del 15 de noviembre de 2026.

- PASS: cuatro pruebas de la función de cálculo con Node 22+, incluyendo pérdida, equilibrio, costos nulos, comisión decimal y entradas inválidas.
- PASS: simulador usado en el navegador con publicidad de 50.000 y 35.000 COP; mostró pérdida de 15.000 y equilibrio de 0 respectivamente.
- PASS: precio vacío mostró «Faltan datos»; comisión de 101 % mostró «Revisa los valores»; restablecer recuperó 15.000 COP.
- PASS: los cuatro desplegables respondieron y las cinco casillas actualizaron el progreso a 5 de 5.
- PASS: navegación interna comprobada; todos los destinos corresponden a secciones existentes.
- PASS: sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 píxeles. Inspección visual de portada en escritorio y móvil.
- PASS: navegación por Tab comprobada con contorno visible; controles HTML nativos, etiquetas y región de resultados anunciable.
- PASS: consola sin errores ni advertencias durante la revisión.
- PASS: seis combinaciones principales de texto/fondo calculadas mediante luminancia WCAG, entre 6,28:1 y 12,89:1.

## Filtro editorial y visual

- PASS R-02: texto del sitio sin rayas largas.
- PASS R-03: cinco anchos comprobados y composiciones que se apilan en móvil.
- PASS R-17, R-18, R-36, R-38: ejemplo rotulado, fuentes oficiales enlazadas, sin testimonios ni estadísticas de mercado inventadas.
- PASS R-23: nombre en texto, sin logotipos ni fotografías generadas; composición derivada del encargo.
- PASS R-24, R-26: enlaces internos con destino, formularios y desplegables funcionales.
- PASS R-27: mensajes de datos vacíos e inválidos; no existe carga remota de datos que requiera un estado de espera.
- PASS R-28: sin preguntas frecuentes de relleno.
- PASS R-32, R-39: controles nativos, foco visible, etiquetas, idioma es-CO, landmarks y zoom permitido.
- PASS R-33: implementación directamente en archivos fuente.
- PASS R-34: un solo tema editorial; no hay un selector que prometa otro tema.
- PASS R-35: servidor ejecutado, pruebas y controles recorridos en navegador.
- PASS R-37: dirección declarada antes de implementar y documentada en DESIGN.md.
- PASS R-40: sin medios que causen cambios de tamaño ni scripts de terceros; script de aplicación modular.
- PASS Purpose-Gate: paleta, tipografía, composición y movimiento documentados en DESIGN.md. La sombra del recibo distingue el ejemplo; la flecha del CTA indica navegación.
- PASS Liveliness: energía 2, ritmo 3, movimiento 1; portada asimétrica, balance en columnas, desplegables y herramienta sobre panel oscuro.
- PASS Craftsmanship: contenido ordenado para comprender, evaluar, calcular y comprobar; sin funciones ajenas a la guía.

## Límites

No se midieron Lighthouse ni métricas de usuarios reales. No se realizó auditoría WCAG completa, prueba con lector de pantalla, teclado virtual de teléfono físico ni todos los navegadores. No se ejecutó el paquete de pruebas propio de taste-skill: el repositorio se utilizó como referencia visual, sin instalarlo ni copiar su implementación.
