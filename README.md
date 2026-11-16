# Dropshipping en Colombia

Sitio educativo en español que presenta ventajas, riesgos, contexto colombiano y un simulador de contribución por pedido. Las cifras del ejemplo son ilustrativas, no datos de mercado ni previsiones de ingresos.

## Ejecutar

Requiere Node.js 22 o posterior. No requiere instalar dependencias.

```sh
npm start
```

Abre http://127.0.0.1:4173. Para verificar la lógica del simulador:

```sh
npm test
```

## Archivos

- `dist/`: sitio estático listo para servir por HTTP o publicar.
- `dist/calculator.js`: cálculo y validación de valores.
- `tests/`: pruebas de margen, equilibrio, pérdidas y entradas inválidas.
- `DESIGN.md`: decisiones de diseño y relación con la referencia.

## Alcance del simulador

Contribución = precio − producto − envío − publicidad − comisión porcentual − reserva por incidencias.

No calcula utilidad neta ni volumen de ventas. Excluye impuestos, costos fijos y remuneración. Una tarifa fija de pasarela debe incorporarse a los costos. La reserva debe reflejar la experiencia real de rechazos y devoluciones por pedido entregado. El flujo de caja y el costo de adquisición requieren medición aparte.

## Contenido y privacidad

Las fuentes oficiales de SIC, DIAN y el Estatuto del Consumidor se enlazan dentro del sitio. Revisión editorial: 15 de noviembre de 2026. No se prescriben tasas tributarias universales. No hay analítica, rastreadores, cuentas, formularios de contacto ni envío de datos del simulador. La lista de verificación no persiste al recargar.

## Referencia visual

[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill), revisión `f6b76575f949707b4e3c37cd86cb44b0b98643e8`. Se adaptan principios de jerarquía tipográfica, alineación, composición editorial e interacción discreta. Implementación original sin copiar código ni imágenes del repositorio.
