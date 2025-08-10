export const RESET_STYLES = `
/* Reset completo para Shadow DOM y modo desarrollo */
*, *::before, *::after {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  font-family: inherit !important;
  border: none !important;
  outline: none !important;
  text-decoration: none !important;
  background-color: transparent !important;
}

/* Reset específico para el body en modo desarrollo */
body {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #f5f5f5 !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

/* Reset para el elemento root en modo desarrollo */
#root {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100% !important;
  background-color: #f5f5f5 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: flex-start !important;
}

/* SISTEMA DE BREAKPOINTS RESPONSIVOS */
:root {
  /* Pequeños smartphones (iPhone SE, 5/5s) */
  --bp-xs: 320px;
  /* Smartphones estándar (iPhone 6/7/8) */
  --bp-sm: 375px;
  /* Smartphones grandes (iPhone Plus, Galaxy S) */
  --bp-md: 414px;
  /* Phablets (iPhone Max, Pixel XL) */
  --bp-lg: 480px;
  /* Tabletas pequeñas vertical */
  --bp-xl: 768px;
  /* Tabletas medianas vertical */
  --bp-xxl: 834px;
  /* Tabletas grandes vertical */
  --bp-xxxl: 1024px;

  /* Variables de espaciado responsivo */
  --spacing-xs: clamp(8px, 2vw, 12px);
  --spacing-sm: clamp(12px, 3vw, 16px);
  --spacing-md: clamp(16px, 4vw, 24px);
  --spacing-lg: clamp(24px, 6vw, 32px);
  --spacing-xl: clamp(32px, 8vw, 48px);

  /* Variables de tipografía responsiva */
  --font-size-xs: clamp(10px, 2.5vw, 12px);
  --font-size-sm: clamp(12px, 3vw, 14px);
  --font-size-md: clamp(14px, 3.5vw, 16px);
  --font-size-lg: clamp(16px, 4vw, 20px);
  --font-size-xl: clamp(20px, 5vw, 28px);
  --font-size-xxl: clamp(28px, 7vw, 36px);
  --font-size-hero: clamp(32px, 8vw, 48px);

  /* Variables de dimensiones responsivas */
  --container-width: clamp(320px, 100vw, 100vw);
  --container-max-width: min(100vw, 1024px);
  --container-height: clamp(568px, 100vh, 100vh);
  --content-padding: clamp(16px, 4vw, 32px);
  --border-radius: clamp(8px, 2vw, 16px);

  /* Variables de altura por breakpoint */
  --height-xs: clamp(568px, 100vh, 100vh);      /* iPhone SE */
  --height-sm: clamp(667px, 100vh, 100vh);      /* iPhone 6/7/8 */
  --height-md: clamp(736px, 100vh, 100vh);      /* iPhone Plus */
  --height-lg: clamp(800px, 100vh, 100vh);      /* Phablets */
  --height-xl: clamp(1024px, 100vh, 100vh);     /* iPad Mini */
  --height-xxl: clamp(1112px, 100vh, 100vh);    /* iPad */
  --height-xxxl: clamp(1366px, 100vh, 100vh);   /* iPad Pro */
}

/* Contenedor principal del componente - COMPLETAMENTE RESPONSIVO */
.landing-component-container,
.basicos-component-container,
.legales-component-container,
.sms-component-container,
.ine-component-container,
.selfie-component-container,
.capturarapida-component-container,
.capturacompleta-component-container,
.altaproducto-component-container {
  all: initial !important;
  display: block !important;
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  height: 100% !important;
  min-height: var(--container-height) !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: white !important;
  background-color: transparent !important;
  overflow: auto !important;
  position: relative !important;
  padding: var(--content-padding) !important;
}

/* Reset de elementos HTML específicos */
h1, h2, h3, h4, h5, h6, p, span, div, button, input, a, ul, ol, li {
  all: unset !important;
  box-sizing: border-box !important;
  display: block !important;
  line-height: normal !important;
  color: inherit !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

/* Contenedor de la aplicación - RESPONSIVO */
.app {
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  height: auto !important;
  min-height: var(--container-height) !important;
  background: transparent;
  margin: 0 auto !important;
  position: relative !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  display: flex !important;
  flex-direction: column !important;
  box-sizing: border-box !important;
  font-family: Arial, sans-serif !important;
  color: white !important;
  z-index: 1 !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

/* Capa del loading para cross-fade */
.loading-layer {
  position: absolute !important;
  inset: 0 !important;
  z-index: 100 !important;
  pointer-events: none !important; /* El propio LoadingView tiene su overlay para bloquear */
}

/* RESPONSIVE BREAKPOINTS */

/* Smartphones pequeños (320px - 374px) */
@media screen and (max-width: 374px) {
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
}

/* Smartphones estándar (375px - 413px) */
@media screen and (min-width: 375px) and (max-width: 413px) {
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