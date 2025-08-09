/**
 * ESTILOS BASE Y RESET RESPONSIVOS
 * Reset completo para Shadow DOM y variables CSS
 */

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
`;
