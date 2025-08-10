/**
 * CardFlipAnimation.ts
 * Proporciona la funcionalidad para animar la tarjeta de crédito con un giro de moneda
 */

/**
 * Detecta el navegador para aplicar estilos específicos
 * @returns El nombre del navegador detectado
 */
const detectBrowser = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Importante: El orden de detección es crucial porque algunos navegadores
  // incluyen cadenas de otros en su userAgent
  
  // Edge (incluye nuevo Edge basado en Chromium)
  if (userAgent.indexOf('edge') > -1 || userAgent.indexOf('edg/') > -1 || (!!(window as any).StyleMedia)) {
    return 'edge';
  }
  // Internet Explorer
  else if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || !!(document as any).documentMode) {
    return 'ie';
  }
  // Firefox
  else if (userAgent.indexOf('firefox') > -1) {
    return 'firefox';
  }
  // Safari (excluye Chrome)
  else if ((userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) || /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    return 'safari';
  }
  // Chrome
  else if (userAgent.indexOf('chrome') > -1) {
    return 'chrome';
  }
  // Opera
  else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr/') > -1) {
    return 'opera';
  }
  // Navegador desconocido
  else {
    return 'unknown';
  }
};

/**
 * Añade la animación de giro tipo moneda a la tarjeta de crédito
 * @param autoPlayAnimation Si es true, la tarjeta girará automáticamente al cargar
 */
export const initializeCardFlipAnimation = (autoPlayAnimation = false): void => {
  // Detectar el navegador para aplicar ajustes específicos
  const browserName = detectBrowser();
  
  // Agregar una clase específica al body para ajustes CSS específicos del navegador
  document.body.classList.add(`${browserName}-browser`);
  
  // Determinar si el navegador soporta transformaciones 3D
  const has3DSupport = ((): boolean => {
    // Verificar soporte de transformaciones 3D
    const el = document.createElement('p');
    const transforms = {
      'webkitTransform': '-webkit-transform',
      'OTransform': '-o-transform',
      'msTransform': '-ms-transform',
      'MozTransform': '-moz-transform',
      'transform': 'transform'
    };

    // Prueba todas las propiedades de transformación
    for (const t in transforms) {
      if (el.style[t as any] !== undefined) {
        return true;
      }
    }
    return false;
  })();
  
  // Si no hay soporte 3D, agregar clase para usar animación fallback
  if (!has3DSupport) {
    document.body.classList.add('no-3d-support');
  }
  
  // Agregar información de depuración al console para ayudar a diagnosticar problemas
  console.log(`[CardFlipAnimation] Browser: ${browserName}, 3D Support: ${has3DSupport}`);
  
  // Esperar a que el DOM esté completamente cargado
  window.addEventListener('load', () => {
    setupCardAnimation(autoPlayAnimation, browserName, has3DSupport);
  });

  // Comprobar el estado actual del documento
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Si ya está cargado o interactivo, configurar con un pequeño retraso para asegurar
    // que todos los elementos estén disponibles
    setTimeout(() => {
      setupCardAnimation(autoPlayAnimation, browserName, has3DSupport);
    }, 100);
  }
};

/**
 * Configura la animación de la tarjeta
 * @param autoPlayAnimation Si es true, la tarjeta girará automáticamente al cargar
 * @param browserName El nombre del navegador detectado
 * @param has3DSupport Indica si el navegador soporta transformaciones 3D
 */
const setupCardAnimation = (autoPlayAnimation = false, browserName = 'unknown', has3DSupport = true): void => {
  try {
    // Buscar la tarjeta de crédito en el DOM
    const creditCard = document.querySelector('.credit-card');
    const cardImage = document.querySelector('.card-image');
    
    if (creditCard && cardImage) {
      // Verificar si el navegador soporta animaciones
      const animationSupported = 'animation' in document.documentElement.style || 
                                'webkitAnimation' in document.documentElement.style || 
                                'mozAnimation' in document.documentElement.style || 
                                'OAnimation' in document.documentElement.style ||
                                'msAnimation' in document.documentElement.style;
      
      // Si no hay soporte para animaciones, ajustamos con un enfoque alternativo o salimos
      if (!animationSupported) {
        console.warn(`[${browserName}] Este navegador no soporta animaciones CSS estándar.`);
        
        // En algunos navegadores podemos usar un enfoque basado en JavaScript
        if (['ie', 'edge', 'unknown'].includes(browserName)) {
          console.log(`Usando fallback para ${browserName}`);
          // La clase ya está aplicada al body, los estilos CSS se encargarán
        } else {
          return; // Para otros navegadores no soportados, salimos de la función
        }
      }
      
      // Registrar información de soporte 3D
      if (!has3DSupport) {
        console.log(`[${browserName}] Sin soporte 3D completo, usando animación alternativa`);
      }
      
      // Asegurarnos de que el navegador soporte la API de CSS Custom Properties
      const cssVarsSupported = window.CSS && CSS.supports('--test', '0');
      
      // Contador para llevar el control de cuántos clics se han hecho
      let rotations = 0;
      let isAnimating = false;
      
      /**
       * Función para activar la animación de giro
       */
      const playFlipAnimation = () => {
        // Evitar múltiples animaciones mientras una está en curso
        if (isAnimating) return;
        isAnimating = true;
        
        // Notificar que la animación está comenzando
        console.log(`[${browserName}] Iniciando animación de tarjeta`);
        
        // Detener cualquier animación anterior
        cardImage.classList.remove('card-flip-animation');
        
        // Método principal para activar la animación según el tipo de navegador
        const startAnimation = () => {
          // Calcular el número de vueltas (entre 3 y 4)
          const numRotations = 3 + (rotations % 2);
          rotations++;
          
          // Si el navegador es antiguo o tiene soporte limitado, usar un enfoque alternativo
          if (!has3DSupport || ['ie', 'edge'].includes(browserName)) {
            // Para navegadores sin buen soporte 3D, solo aplicamos la clase
            cardImage.classList.add('card-flip-animation');
            return;
          }
          
          try {
            // Establecer la propiedad CSS personalizada para el número de rotaciones
            // Solo si el navegador soporta CSS Variables
            if (cssVarsSupported) {
              (cardImage as HTMLElement).style.setProperty('--num-rotations', `${numRotations}`);
            } else {
              // Fallback para navegadores antiguos - usar un valor fijo de rotación
              console.log('CSS Variables no soportadas, usando valor fijo para animación');
            }
          } catch (e) {
            console.error('Error al establecer propiedad CSS personalizada:', e);
          }
          
          // Aplicar la clase que activa la animación
          cardImage.classList.add('card-flip-animation');
        };
        
        try {
          // Forzar un reflow para reiniciar la animación
          void (cardImage as HTMLElement).offsetWidth;
          
          // En Safari necesitamos un pequeño retraso adicional para mayor fiabilidad
          if (browserName === 'safari') {
            setTimeout(() => {
              startAnimation();
            }, 50);
          } else {
            startAnimation();
          }
        } catch (e) {
          console.warn(`Error al forzar reflow: ${e}. Usando método alternativo.`);
          // Fallback si offsetWidth causa problemas
          setTimeout(() => {
            startAnimation();
          }, 50);
        }
        
        // Restaurar la posibilidad de hacer clic después de la animación
        setTimeout(() => {
          isAnimating = false;
        }, 2000); // Un poco más que la duración de la animación para asegurarnos
      };
      
      // Añadir listener para el clic con comprobación de errores
      try {
        creditCard.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          playFlipAnimation();
        });
        
        // También permitir hacer clic en el contenedor de la imagen para la animación
        cardImage.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!isAnimating) {
            playFlipAnimation();
          }
        });
      } catch (e) {
        console.error('Error al agregar event listeners:', e);
      }
      
      // Si autoPlayAnimation es true, reproducir la animación automáticamente después de un breve retraso
      if (autoPlayAnimation) {
        setTimeout(() => {
          try {
            playFlipAnimation();
          } catch (e) {
            console.error('Error al iniciar animación automática:', e);
          }
        }, 1000); // Aumentamos a 1000ms para dar más tiempo a los navegadores más lentos
      }
    }
  } catch (e) {
    console.error('Error general en setupCardAnimation:', e);
  }
};
