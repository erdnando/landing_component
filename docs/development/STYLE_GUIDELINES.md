# Lineamientos de Estilo y Look & Feel

Este documento define los lineamientos de estilo y diseño para los componentes externos de Flow Designer. Todos los desarrolladores deben seguir estas pautas para mantener la consistencia visual y la experiencia de usuario.

## 🎨 Paleta de Colores

### Colores Principales
- **Rosa Principal**: `#e91e63` (usado en gradientes, botones y acentos)
- **Rosa Secundario**: `#d81b60` (usado en gradientes y efectos hover)
- **Rosa Oscuro**: `#c2185b` (usado en efectos hover de botones)
- **Blanco**: `#ffffff` (fondo de la vista de requisitos, texto sobre fondos oscuros)
- **Negro Suave**: `#333333` (texto principal en fondos claros)

### Colores Secundarios
- **Gris Claro**: `#f8f8f8` (gradiente de fondo en vista de requisitos)
- **Gris Medio**: `#666666` (texto secundario)
- **Gris Oscuro**: `#1a1a1a` (usado en representaciones de tarjetas)
- **Dorado**: `#ffd700` a `#ffaa00` (gradiente usado para chips de tarjetas)

## 📏 Tipografía

- **Familia**: Sistema por defecto (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
- **Tamaños**:
  - **Títulos**: 18px - 24px
  - **Texto principal**: 14px - 16px
  - **Texto secundario**: 11px - 13px
  - **Notas al pie/Versiones**: 10px - 11px

- **Pesos**:
  - Títulos y botones: 600 - 700 (semi-bold, bold)
  - Texto principal: 400 - 500 (regular, medium)
  - Texto destacado: 600 (semi-bold)

## 🧩 Componentes

### Headers
- Fondo con gradiente rosa (`#e91e63` a `#d81b60`)
- Logos alineados a los extremos
- Tamaño de texto: 16px - 18px
- Sombras sutiles para profundidad

### Botones

#### Estilo General
- Bordes redondeados (`border-radius: 30px`)
- Padding vertical: 12px
- Efectos de transición en hover (300ms)
- Transformación en hover (translateY(-2px))
- Sombras para dar profundidad
- Incluyen iconos de flechas para indicar dirección

#### Botón Primario
- Fondo: Gradiente rosa (`#e91e63` a `#d81b60`)
- Texto blanco
- Sombra: `0 4px 12px rgba(233, 30, 99, 0.25)`
- Hover: Oscurecimiento del gradiente y aumento de sombra

#### Botón Secundario
- Fondo transparente
- Borde de 1px en color rosa (`#e91e63`)
- Texto rosa
- Hover: Fondo rosa semitransparente (`rgba(233, 30, 99, 0.08)`)

### Tarjetas/Items
- Bordes redondeados (`border-radius: 10px` o `12px` para elementos más grandes)
- Sombras sutiles (`box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12)`)
- Efectos hover con transformaciones sutiles
- Padding interno consistente (12px - 15px)

### Iconos
- Tamaño consistente (16px - 24px)
- Animaciones sutiles en interacciones
- Para iconos de flecha: transformaciones en hover para indicar dirección

## 📱 Estructura de las Vistas

### General
- Ancho máximo: 375px
- Altura mínima: 100vh
- Padding interno: 12px - 14px
- Estructura principal: flex column
- Overflow hidden para evitar scrollbars horizontales

### Vista de Presentación
- Fondo: Gradiente rosa con efectos radiales sutiles
- Contenido centrado
- Flujo vertical con elementos destacados
- Botón principal a 12px del borde inferior
- Versión debajo del botón principal

### Vista de Requisitos
- Fondo: Blanco a gris muy claro
- Header con logos en contenedor destacado
- Lista de requisitos con iconos y checks
- Botones en fila horizontal arriba del texto informativo
- Texto informativo centrado entre botones y versión
- Versión al final de la vista

## 🖼️ Efectos Visuales

### Fondos
- Gradientes lineales y radiales para profundidad
- Efectos sutiles de brillo en elementos destacados
- Transparencias para capas superpuestas (0.06 - 0.1)

### Animaciones y Transiciones
- Duración de transiciones: 200ms - 300ms
- Curvas de aceleración suaves (ease, ease-in-out)
- Transformaciones en hover (translateY, scale)
- Animaciones sutiles en iconos de botones

### Sombras
- Sombras principales: `0 2px 8px rgba(0, 0, 0, 0.12)`
- Sombras en hover: `0 5px 15px rgba(233, 30, 99, 0.3)`
- Sombras en tarjetas: `0 2px 10px rgba(233, 30, 99, 0.2)`
- Sombras en texto para contraste: `0 1px 2px rgba(0, 0, 0, 0.1)`

## 📐 Espaciado

### Márgenes
- Entre secciones principales: 15px - 20px
- Entre elementos relacionados: 8px - 12px
- Márgenes internos (padding): 10px - 15px
- Gap en elementos flexbox: 10px

### Alineación
- Botones en vista de presentación: Centrados horizontalmente
- Botones en vista de requisitos: En fila con espacio equidistante
- Elementos informativos: Centrados
- Elementos de lista: Alineados a la izquierda con estructura consistente

## 🌟 Consistencia entre Vistas

### Elementos Comunes
- Mantener la misma paleta de colores
- Mismos estilos de botones con variaciones contextuales
- Misma familia tipográfica y jerarquía de texto
- Footer con versión en la misma posición relativa
- Transiciones y animaciones similares

### Ubicación de Botones
- Los botones principales deben aparecer en posiciones similares en todas las vistas
- En la vista de requisitos, los botones deben estar por encima de la nota informativa
- Mantener padding y márgenes consistentes alrededor de los botones

## 🛠️ Implementación Técnica

- Usar CSS moderno (flexbox, gradientes, variables CSS)
- Organizar estilos por vista y componente
- Evitar estilos en línea excepto para ajustes dinámicos
- Mantener nombres de clases descriptivos y consistentes
- Usar BEM o una metodología similar para nombrar clases

---

Este documento es un recurso vivo que puede evolucionar con el proyecto. Cualquier modificación debe respetar la esencia del diseño y ser consensuada con el equipo.
