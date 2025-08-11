/**
 * ESTILOS RESPONSIVE BREAKPOINTS
 * Media queries y adaptaciones por dispositivo
 */

export const RESPONSIVE_STYLES = `
/* RESPONSIVE BREAKPOINTS */

/* Smartphones pequeños (320px - 374px) */
/* @media screen and (max-width: 374px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 12px !important;
    min-height: var(--height-xs) !important;
  }
  
  .app {
    min-height: var(--height-xs) !important;
  }
} */

/* Smartphones estándar (375px - 413px) */
/* @media screen and (min-width: 375px) and (max-width: 413px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 16px !important;
    min-height: var(--height-sm) !important;
  }
  
  .app {
    min-height: var(--height-sm) !important;
  }
}
 */
/* Smartphones grandes (414px - 479px) */
@media screen and (min-width: 414px) and (max-width: 479px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 20px !important;
    min-height: var(--height-md) !important;
  }
  
  .app {
    min-height: var(--height-md) !important;
  }
}

/* Phablets (480px - 767px) */
@media screen and (min-width: 480px) and (max-width: 767px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 24px !important;
    min-height: var(--height-lg) !important;
  }
  
  .app {
    min-height: var(--height-lg) !important;
  }
}

/* Tabletas pequeñas (768px - 833px) */
@media screen and (min-width: 768px) and (max-width: 833px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 32px !important;
    min-height: var(--height-xl) !important;
  }
  
  .app {
    min-height: var(--height-xl) !important;
  }
}

/* Tabletas medianas (834px - 1023px) */
@media screen and (min-width: 834px) and (max-width: 1023px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 40px !important;
    min-height: var(--height-xxl) !important;
  }
  
  .app {
    min-height: var(--height-xxl) !important;
  }
}

/* Tabletas grandes (1024px+) */
@media screen and (min-width: 1024px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 48px !important;
    min-height: var(--height-xxxl) !important;
  }
  
  .app {
    min-height: var(--height-xxxl) !important;
  }
}
`;
