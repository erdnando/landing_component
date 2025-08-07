/**
 * Script de inicialización para uso en integración
 * Este script garantiza que el componente web esté registrado correctamente
 * cuando se carga como un script externo.
 */

// Función para verificar si el componente está registrado
function checkComponentRegistration() {
  if (customElements.get('landing-web-component')) {
    console.log('✅ Componente landing-web-component ya está registrado');
    return true;
  }
  return false;
}

// Función para verificar si el componente está disponible globalmente
function checkGlobalAvailability() {
  // @ts-ignore
  if (window.LandingWebComponent) {
    console.log('✅ Componente disponible globalmente como window.LandingWebComponent');
    return true;
  }
  return false;
}

// Función para registrar el componente manualmente si es necesario
function ensureComponentRegistration() {
  if (!checkComponentRegistration()) {
    if (checkGlobalAvailability()) {
      try {
        // @ts-ignore
        customElements.define('landing-web-component', window.LandingWebComponent);
        console.log('✅ Componente registrado manualmente usando la referencia global');
        return true;
      } catch (error) {
        console.error('❌ Error al registrar el componente manualmente:', error);
      }
    } else {
      console.error('❌ No se puede registrar el componente: no está disponible globalmente');
      return false;
    }
  }
  return true;
}

// Auto-ejecutar el registro al cargar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureComponentRegistration);
} else {
  ensureComponentRegistration();
}

// Exportar funciones de utilidad
export {
  checkComponentRegistration,
  checkGlobalAvailability,
  ensureComponentRegistration
};

// Auto-verificar cada segundo durante 10 segundos en caso de carga tardía
let attempts = 0;
const intervalId = setInterval(() => {
  if (checkComponentRegistration() || attempts >= 10) {
    clearInterval(intervalId);
    if (attempts >= 10 && !checkComponentRegistration()) {
      console.error('❌ No se pudo registrar el componente después de varios intentos');
    }
  }
  attempts++;
}, 1000);
