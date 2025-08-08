# Lecciones Aprendidas y Problemáticas Resueltas

## 7. Adaptación a SPA clásico y despliegue Docker/nginx
- **Lección:** Para microfrontends que deben funcionar como SPA clásico, es mejor simplificar el entrypoint y el proceso de build para que siempre monten la app React en `#root`.
- **Problemática:** El modo dual (SPA + Web Component) complicaba el arranque y podía dejar la app sin montar si faltaba el elemento `#root`.
- **Solución:** Se eliminó la lógica de Web Component en el entrypoint y se forzó el montaje en `#root` siempre. Se automatizó la generación de `dist/index.html` con el script correcto y se verificó que el contenedor Docker sirva la app correctamente usando nginx y SPA routing.

## 8. Automatización de index.html y scripts
- **Lección:** Es fundamental que el archivo `index.html` en producción incluya el script principal del bundle generado.
- **Problemática:** El build no generaba un `index.html` con el script inyectado, lo que resultaba en una página en blanco tras el despliegue.
- **Solución:** Se automatizó la copia y edición de `index.html` para asegurar que siempre incluya `<script src="landing-v1.0.0.js"></script>` antes de `</body>`, garantizando el arranque de la app.

## 9. Despliegue y pruebas en Docker
- **Lección:** Probar el contenedor localmente con `docker run -p 3001:80 ...` y verificar que la app responde en el navegador es esencial antes de cualquier entrega.
- **Problemática:** El contenedor exponía el puerto pero la app no se veía por problemas de build, rutas o scripts.
- **Solución:** Se revisó el build, la estructura de archivos, el `nginx.conf` (con `try_files ... /index.html` para SPA) y se corrigió la integración para que la app funcione correctamente en cualquier entorno.

## 1. Integración Microfrontend + Wizard
- **Lección:** Es fundamental seguir una convención clara para la comunicación entre el microfrontend y el host (wizard), usando eventos personalizados y atributos/props.
- **Problemática:** Dificultad para que el wizard capture eventos internos de React.
- **Solución:** Se emite un evento `next-step` con `bubbles: true` y `composed: true` desde el custom element raíz, asegurando propagación fuera del Shadow DOM y React.

## 2. Emisión de Eventos desde React
- **Lección:** React no expone el custom element directamente, por lo que se debe buscar el nodo host manualmente.
- **Problemática:** El evento no era capturado por el host si se emitía desde un nodo hijo o sin burbujeo.
- **Solución:** Se localiza el custom element (`landing-web-component`) y se usa `dispatchEvent` con las opciones correctas.

## 3. Debug y Transparencia
- **Lección:** Es clave loguear la emisión de eventos y los datos enviados para facilitar la integración y el troubleshooting.
- **Problemática:** Sin logs, era difícil saber si el evento se disparaba y qué datos se enviaban.
- **Solución:** Se agregó un `console.log` antes de emitir el evento, mostrando el payload.

## 4. Responsividad Visual
- **Lección:** Los microfrontends deben adaptarse a cualquier altura de viewport móvil, sin forzar scroll innecesario.
- **Problemática:** El diseño original forzaba scroll vertical y no aprovechaba el 100% del alto disponible.
- **Solución:** Se usó `100dvh`, `flex:1` en el grid y tarjetas, y media queries para ajustar el layout según la altura.

## 5. Consolidación de Estilos
- **Lección:** Centralizar los estilos en un solo archivo facilita el mantenimiento y asegura el aislamiento en el bundle del microfrontend.
- **Problemática:** Estilos dispersos y colisiones con el host.
- **Solución:** Se consolidaron todos los estilos en `microfrontend-styles.ts` y se inyectan en el Shadow DOM.

## 6. Buenas Prácticas de Comunicación
- **Lección:** Documentar claramente las variables de entrada y salida, y validar los datos antes de emitir eventos.
- **Problemática:** Ambigüedad sobre qué datos espera y emite cada microfrontend.
- **Solución:** Se siguió la guía de integración y se documentó el contrato de eventos y props.

---

**Resumen:**
- Usar eventos personalizados con burbujeo y composición para comunicación microfrontend-host.
- Loguear siempre la emisión de eventos y los datos enviados.
- Adaptar el layout a cualquier altura de viewport móvil.
- Consolidar y aislar los estilos para evitar fugas y colisiones.
- Documentar el contrato de integración y validar los datos intercambiados.

- Simplificar el entrypoint para SPA si no se requiere Web Component.
- Automatizar la generación de `index.html` con el script correcto.
- Probar siempre el despliegue en Docker/nginx y validar en el navegador.
