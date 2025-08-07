# Guía Rápida de Integración - Componente Landing Web v1.0.0

> **¡IMPORTANTE!** Esta versión incluye soluciones para los problemas de estilos reportados.

## Instalación

### Opción 1: Todo incluido (Recomendada)
```html
<!-- Bundle del componente (incluye todo) -->
<script src="ruta/a/landing-v1.0.0.js"></script>
```

### Opción 2: Con dependencias externas
```html
<!-- Dependencias externas -->
<script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

<!-- Bundle del componente -->
<script src="ruta/a/landing-v1.0.0.js"></script>
```

### Opción 3: Con script de inicialización (para problemas de registro)
```html
<!-- Script de inicialización (soluciona problemas de registro) -->
<script src="ruta/a/integration-init.js"></script>
<!-- Bundle del componente -->
<script src="ruta/a/landing-v1.0.0.js"></script>
```

## Uso Básico

```html
<!-- Insertar en el HTML donde deseas mostrar el componente -->
<landing-web-component 
  session-id="mi-sesion-123"
  user-id="usuario-456"
  config='{"title":"Tarjeta de Crédito Personalizada"}'>
</landing-web-component>
```

## Atributos Soportados

- **session-id**: ID de sesión para tracking
- **user-id**: ID del usuario actual
- **config**: Configuración en formato JSON string

## Propiedades JavaScript

```javascript
const landingComponent = document.querySelector('landing-web-component');

// Establecer contexto del flujo
landingComponent.flowContextData = {
  step: 'landing',
  previousSteps: ['welcome']
};

// Pasar datos de entrada
landingComponent.inputDataValue = {
  prefilledData: {
    email: 'usuario@ejemplo.com'
  }
};
```

## Eventos Emitidos

| Evento | Descripción |
|--------|-------------|
| `component-ready` | Componente inicializado |
| `output-data` | Datos completados (siguiente paso) |
| `request-navigation` | Solicitud para navegar (ej: botón "Volver") |
| `data-changed` | Los datos han cambiado |
| `node-error` | Ocurrió un error |

```javascript
// Escuchar el evento principal (completado del formulario)
landingComponent.addEventListener('output-data', (event) => {
  const data = event.detail;
  console.log('Datos completados:', data);
  // Procesamiento posterior...
});
```

---

Para una guía completa con ejemplos detallados, consulta [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)
