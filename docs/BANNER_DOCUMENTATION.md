## 🖼️ Banner de cabecera

El componente RequirementsView ahora incluye soporte para un banner de imagen en la cabecera.

### Integración del banner

Hay dos formas de integrar el banner:

#### 1. Usando la prop bannerImage

```jsx
<RequirementsView 
  onContinue={handleContinue}
  bannerImage="https://example.com/path/to/banner.jpg"
/>
```

#### 2. Reemplazando la imagen por defecto

Coloca tu imagen de banner en:

```
public/images/header-banner.png
```

#### Recomendaciones para la imagen

- **Dimensiones**: 1200px × 300px (relación 4:1)
- **Formato**: PNG o JPG con buena compresión
- **Contenido**: Incluir elementos de marca como logotipos y colores corporativos
- **Diseño**: Dejar espacio para los logos que se posicionan sobre la imagen

### Personalización del banner

Los estilos del banner se pueden personalizar en:

```
src/styles/views/requirements.styles.new.ts
```

### Ejemplo de la imagen de la documentación

La imagen proporcionada en la documentación (con la tarjeta negra y los logos) es un buen ejemplo del tipo de banner que funciona bien con este diseño.
