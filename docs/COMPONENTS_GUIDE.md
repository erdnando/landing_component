# Guía de Componentes UI

Este documento proporciona una guía detallada de los componentes UI utilizados en las vistas de la aplicación. Sirve como referencia para la implementación consistente de elementos visuales en futuras actualizaciones o nuevas vistas.

## Estructura de las Vistas

### PresentationView

La vista de presentación es la primera pantalla que ve el usuario. Está diseñada para captar la atención y presentar los beneficios clave de la tarjeta.

#### Elementos Principales:

1. **Header con Logos**
   - Clase: `header-logos-modern`
   - Contiene: Logos de Bradescard y Promoda

2. **Título Principal**
   - Clase: `main-title-modern`
   - Estilo: Texto grande, centrado, con subtítulo en estilo más ligero

3. **Tarjetas de Beneficios**
   - Clase: `benefits-container-modern`
   - Contiene: 4 tarjetas de beneficios con iconos y descripciones
   - Cada tarjeta tiene: icono, título fuerte y descripción

4. **Badge Promocional**
   - Clase: `promo-badge`
   - Estilo: Fondo semitransparente con iconos de estrellas

5. **Imagen de la Tarjeta**
   - Clase: `card-image-container`
   - Características: Efecto 3D con sombras y brillo

6. **Instrucción Simple**
   - Clase: `simple-instruction-container`
   - Contiene: Icono y texto informativo

7. **Botón de Acción Principal**
   - Clase: `btn-start-modern`
   - Ubicación: Por encima del footer
   - Estilo: Botón blanco con texto rosa y flecha

8. **Footer Legal**
   - Clase: `legal-footer-modern`
   - Ubicación: Al final de la vista

### RequirementsView

La vista de requisitos muestra los elementos necesarios para proceder con la aplicación.

#### Elementos Principales:

1. **Header con Logos**
   - Clase: `header-logos-modern`
   - Contiene: Logos de Bradescard, Promoda y mini tarjeta

2. **Título de Sección**
   - Clase: `requirements-title-modern`
   - Estilo: Título con línea decorativa debajo

3. **Lista de Requisitos**
   - Clase: `requirements-list-modern`
   - Cada ítem contiene:
     - Icono representativo
     - Texto descriptivo con título fuerte
     - Check de confirmación

4. **Botones de Acción**
   - Contenedor: `buttons-container-modern buttons-row`
   - Ubicación: Por encima del texto informativo
   - Botones: "Volver" (secundario, izquierda) y "¡Todo Listo!" (primario, derecha)

5. **Nota Informativa**
   - Clase: `requirements-note`
   - Ubicación: Debajo de los botones
   - Estilo: Icono informativo y texto descriptivo

6. **Footer con Versión**
   - Clase: `version-footer-modern`
   - Ubicación: Al final de la vista

## Componentes Reutilizables

### Botones

#### Botón Primario
```html
<button class="btn btn-primary btn-continue">
  <span class="btn-text">¡Todo Listo!</span>
  <span class="btn-icon">→</span>
</button>
```

#### Botón Secundario
```html
<button class="btn btn-secondary btn-back">
  <span class="btn-icon">←</span>
  <span class="btn-text">Volver</span>
</button>
```

#### Contenedor de Botones en Fila
```html
<div class="buttons-container-modern buttons-row">
  <!-- Botones aquí -->
</div>
```

### Tarjetas Informativas

#### Tarjeta de Requisito
```html
<div class="requirement-item-modern">
  <div class="requirement-icon-wrapper">
    <!-- SVG o imagen del icono -->
  </div>
  <div class="requirement-text-modern">
    <strong>Título del requisito</strong>
    <p>Descripción del requisito</p>
  </div>
  <div class="requirement-check">✓</div>
</div>
```

#### Tarjeta de Beneficio
```html
<div class="benefit-card-modern">
  <div class="benefit-icon-wrapper">
    <span class="benefit-icon">%</span>
  </div>
  <div class="benefit-desc">
    <strong>Título del beneficio</strong>
    <p>Descripción del beneficio</p>
  </div>
</div>
```

### Notas Informativas

```html
<div class="requirements-note">
  <div class="note-icon">ⓘ</div>
  <p>Texto informativo</p>
</div>
```

### Headers

#### Header de Presentación
```html
<div className="header-logos-modern">
  <div className="bradescard-logo">bradescard</div>
  <div className="promoda-logo">Promoda</div>
</div>
```

#### Header de Requisitos
```html
<div className="header-logos-modern">
  <div className="bradescard-logo">bradescard</div>
  <div className="promoda-logo">Promoda</div>
  <div className="card-mini-modern">
    <div className="card-chip-mini"></div>
    <div className="card-shine-mini"></div>
  </div>
</div>
```

## Implementación de Iconos

### Iconos en SVG
Para mantener la máxima calidad y escalabilidad, se recomienda usar SVG para iconos.

Ejemplo de implementación:
```html
<svg width="24" height="40" viewBox="0 0 40 60" fill="none">
  <rect x="6" y="8" width="28" height="48" rx="6" fill="#F5F5F5" stroke="#e91e63" strokeWidth="1.5"/>
  <circle cx="20" cy="14" r="2" fill="#e91e63"/>
  <path d="M16 52 L24 52" stroke="#e91e63" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
```

## Animaciones y Efectos

### Efecto Hover en Botones
Los botones primarios y secundarios tienen efectos de hover que incluyen:
- Cambio sutil en el color de fondo
- Elevación (transform: translateY(-2px))
- Aumento de sombra
- Movimiento de iconos de flecha

### Efectos en Tarjetas
Las tarjetas de beneficios y requisitos tienen efectos sutiles:
- Ligera elevación en hover
- Cambio sutil en el fondo
- Transiciones suaves

## Adaptación Responsiva

Aunque la aplicación tiene un ancho fijo máximo de 375px, asegúrate de:
- Usar unidades relativas cuando sea posible (em, rem)
- Implementar media queries para pantallas extremadamente pequeñas
- Mantener los elementos touch-friendly (mínimo 44px para elementos interactivos)

---

Este documento debe ser consultado al desarrollar nuevos componentes o modificar los existentes. Cualquier desviación de estas pautas debe estar justificada y documentada.
