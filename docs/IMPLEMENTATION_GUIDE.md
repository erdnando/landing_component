# Guía de Implementación y Buenas Prácticas

Este documento proporciona ejemplos de código y buenas prácticas para mantener la consistencia en el desarrollo de los componentes de la aplicación.

## Estructura de Componentes React

### Patrón de Componente Funcional

Todos los componentes deben seguir el patrón de componentes funcionales con TypeScript:

```tsx
import '../../styles/vista.css';
import React from 'react';

interface ComponenteProps {
  onAction: () => void;
  // Otras props...
}

const Componente: React.FC<ComponenteProps> = ({ 
  onAction,
  // Otras props destructuradas... 
}) => {
  // Lógica del componente

  return (
    <div className="componente-view">
      {/* Estructura del componente */}
    </div>
  );
};

export default Componente;
```

## Estructura de Archivos

### Organización de Archivos

```
src/
├── components/
│   ├── componenteA/
│   │   └── ComponenteA.tsx
│   └── componenteB/
│       └── ComponenteB.tsx
├── styles/
│   ├── componenteA.css
│   └── componenteB.css
└── core/
    └── ... (archivos core)
```

## Estilos CSS

### Nomenclatura de Clases

Utilizamos una variación de BEM (Block, Element, Modifier) para nombrar clases:

```css
/* Bloque */
.vista-nombre {
  /* propiedades */
}

/* Elemento */
.elemento-nombre {
  /* propiedades */
}

/* Modificador */
.elemento-nombre-moderno {
  /* propiedades */
}

/* Estado */
.elemento-nombre.active {
  /* propiedades */
}
```

### Organización de Estilos

```css
/* === SECCIÓN PRINCIPAL === */
/* Estilos generales de la vista */

/* Componente A */
/* Estilos del componente A */

/* Componente B */
/* Estilos del componente B */

/* Estados y animaciones */
/* Estilos para estados y animaciones */
```

## Buenas Prácticas

### 1. Componentes

✅ **Hacer**:
- Mantener componentes pequeños y enfocados
- Usar interfaces TypeScript para las props
- Usar destructuración de props
- Comentar secciones principales

❌ **Evitar**:
- Componentes monolíticos
- Lógica compleja en componentes de presentación
- Props sin tipar
- Estilos en línea excepto cuando sea necesario

### 2. Estilos

✅ **Hacer**:
- Mantener la consistencia con la guía de estilos
- Organizar CSS por secciones con comentarios
- Usar variables para valores repetidos
- Mantener la especificidad baja

❌ **Evitar**:
- Selectores demasiado específicos
- !important
- Estilos redundantes
- Valores hardcodeados sin significado semántico

### 3. Responsive

✅ **Hacer**:
- Probar en diferentes tamaños de pantalla
- Usar unidades relativas (rem, em, %)
- Considerar la accesibilidad táctil

❌ **Evitar**:
- Tamaños fijos para elementos interactivos
- Ignorar pantallas pequeñas

### 4. Accesibilidad

✅ **Hacer**:
- Usar contraste adecuado
- Incluir atributos aria cuando sea necesario
- Asegurar la navegación por teclado
- Tamaños de texto legibles

❌ **Evitar**:
- Elementos sin suficiente contraste
- Ignorar navegación por teclado
- Texto demasiado pequeño

## Ejemplos de Código

### Ejemplo de Botones en Fila

```tsx
<div className="buttons-container-modern buttons-row">
  <button className="btn btn-secondary btn-back" onClick={onBack}>
    <span className="btn-icon">←</span>
    <span className="btn-text">Volver</span>
  </button>
  <button className="btn btn-primary btn-continue" onClick={onContinue}>
    <span className="btn-text">¡Todo Listo!</span>
    <span className="btn-icon">→</span>
  </button>
</div>
```

### Ejemplo de Lista de Items

```tsx
<div className="requirements-list-modern">
  {requirements.map((req, index) => (
    <div className="requirement-item-modern" key={index}>
      <div className="requirement-icon-wrapper">
        {req.icon}
      </div>
      <div className="requirement-text-modern">
        <strong>{req.title}</strong>
        <p>{req.description}</p>
      </div>
      <div className="requirement-check">✓</div>
    </div>
  ))}
</div>
```

### Ejemplo de Estilos para Componentes

```css
/* Tarjetas de beneficio */
.benefit-card-modern {
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  margin-bottom: 10px;
  backdrop-filter: blur(4px);
  transition: transform 0.2s, background 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.benefit-card-modern:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
}
```

## Proceso de Desarrollo

1. **Revisar la documentación** antes de comenzar
2. **Seguir los lineamientos de estilo** para mantener consistencia
3. **Usar componentes existentes** cuando sea posible
4. **Documentar nuevos componentes** si son creados
5. **Revisar código** para asegurar calidad y consistencia

---

Este documento debe evolucionar con el proyecto. Se recomienda revisarlo y actualizarlo regularmente para reflejar las mejores prácticas actuales del equipo.
