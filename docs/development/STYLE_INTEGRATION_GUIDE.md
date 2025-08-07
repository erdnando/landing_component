# Guía de Integración de Estilos

Este documento proporciona instrucciones para asegurar que los estilos del componente `landing-web-component` se mantengan correctamente cuando se integra en otras aplicaciones.

## Problemas comunes

Cuando se integra el componente en otras aplicaciones, los estilos pueden verse afectados por:

1. Estilos globales del host que sobrescriben los del componente
2. Reset CSS agresivos que eliminan estilos base
3. Estilos específicos que colisionan con los del componente
4. Problemas de encapsulación del Shadow DOM

## Soluciones implementadas

Hemos implementado varias capas de protección:

### 1. Aislamiento con Shadow DOM

El componente utiliza Shadow DOM con modo `open` para encapsular sus estilos. Esto proporciona una primera capa de aislamiento.

### 2. Estilos con `!important`

Todos los estilos del componente utilizan la declaración `!important` para asegurar que no sean sobrescritos.

### 3. Reset CSS interno

El componente incluye su propio reset CSS que se aplica solo dentro del Shadow DOM.

### 4. Inyección de estilos globales

Se inyectan estilos globales para asegurar que el componente mantenga su apariencia.

### 5. Estilos inline de respaldo

Los elementos críticos tienen estilos inline como última capa de protección.

## Instrucciones para integración

1. **Incluir el bundle completo**: Asegúrate de incluir el archivo `landing-v1.0.0.js` completo.

2. **No usar reset CSS agresivos**: Si tu aplicación utiliza reset CSS agresivos, considera excluir el componente:
   ```css
   landing-web-component {
     all: initial;
   }
   ```

3. **Asegurar las dimensiones**: Proporciona un contenedor con las dimensiones adecuadas:
   ```html
   <div style="width: 100%; max-width: 375px; margin: 0 auto;">
     <landing-web-component></landing-web-component>
   </div>
   ```

4. **Variables CSS personalizables**: Puedes personalizar algunos aspectos usando variables CSS:
   ```css
   landing-web-component {
     --landing-primary-color: #e91e63;
     --landing-primary-dark: #c2185b;
   }
   ```

5. **Evitar selectores específicos**: No uses selectores CSS que apunten al interior del componente.

## Solución de problemas

Si los estilos siguen sin aplicarse correctamente:

1. **Inspeccionar el Shadow DOM**: Usa las herramientas de desarrollo para verificar si los estilos están presentes en el Shadow DOM.

2. **Forzar estilos**: Puedes agregar una hoja de estilos externa:
   ```html
   <link rel="stylesheet" href="landing-component-styles.css">
   ```

3. **Estilos inline extremos**: Como último recurso, usa el atributo `style` en el componente:
   ```html
   <landing-web-component style="display: block; width: 100%; max-width: 375px; min-height: 600px; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;"></landing-web-component>
   ```

4. **Contenedor aislado**: Coloca el componente en un iframe si todo lo demás falla.
