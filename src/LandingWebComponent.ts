import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts

// Importar la función de inyección de estilos consolidados
import { injectMicrofrontendStyles, getAllMicrofrontendStyles, MICROFRONTEND_METADATA } from './styles/microfrontend-styles';

// CAPTURAR ESTILOS COMPILADOS POR WEBPACK
let webpackCompiledStyles: string = '';
try {
  // Capturar estilos durante el proceso de build
  if (typeof window !== 'undefined' && (window as any).__LANDING_STYLES__) {
    webpackCompiledStyles = (window as any).__LANDING_STYLES__;
  }
} catch (e) {
  console.warn('Could not load webpack compiled styles:', e);
}

/**
 * Función para consolidar TODOS los estilos del componente
 * Combina estilos embebidos, webpack y externos
 */
function getAllCompiledStyles(): string {
  let allStyles = '';
  
  // 1. Estilos críticos embebidos
  allStyles += getCriticalEmbeddedStyles();
  
  // 2. Estilos compilados por webpack (si están disponibles)
  if (webpackCompiledStyles) {
    allStyles += '\n' + webpackCompiledStyles;
  }
  
  // 3. Estilos guardados por webpack en window
  if (typeof window !== 'undefined') {
    if ((window as any)._landingComponentStyles) {
      allStyles += '\n' + (window as any)._landingComponentStyles.join('\n');
    }
    if ((window as any)._landingCriticalStyles) {
      allStyles += '\n' + (window as any)._landingCriticalStyles;
    }
  }
  
  // 4. Capturar estilos del DOM si están disponibles
  try {
    document.querySelectorAll('style').forEach(styleElement => {
      const content = styleElement.textContent || '';
      if (content.includes('landing-component') || 
          content.includes('benefits-grid-modern') ||
          content.includes('credit-card') ||
          content.includes('benefit-icon-wrapper') ||
          content.includes('presentation-view') ||
          content.includes('requirements-view')) {
        allStyles += '\n' + content;
      }
    });
  } catch (e) {
    console.warn('Error capturing DOM styles:', e);
  }
  
  return allStyles;
}

/**
 * Obtiene todos los estilos críticos consolidados
 * ACTUALIZADO: Ahora usa exclusivamente el punto único de verdad para microfrontend
 */
function getCriticalEmbeddedStyles(): string {
  return getAllMicrofrontendStyles();
}

/**
 * Web Component wrapper para nuestro LandingComponent
 * Permite integrar el componente React en cualquier aplicación como un elemento HTML personalizado
 */
class LandingWebComponent extends HTMLElement {
  private root: Root | null = null;
  private mountPoint: HTMLElement | null = null;

  // Props que se pueden pasar al componente
  private sessionId: string | null = null;
  private userId: string | null = null;
  private flowContext: any = null;
  private config: any = {};
  private inputData: any = null;
  
  // Información del componente
  private readonly version: string = '1.0.0';
  private readonly componentId: string = 'landing';
  
  // Tracking time metrics
  private horaInicio: string = '';
  private ultimaInteraccion: string = '';

  // Observar cambios en los atributos
  static get observedAttributes() {
    return ['session-id', 'user-id', 'config', 'flow-context'];
  }

  // Método para formatear fechas con milisegundos: dd/MM/yyyy HH:mm:ss.SSS
  private formatTimestamp(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  constructor() {
    super();
    // Iniciar tracking de tiempo
    this.horaInicio = this.formatTimestamp(new Date());
    this.ultimaInteraccion = this.horaInicio;
    
    // Crear shadow DOM para encapsular estilos
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Punto de montaje para React
    this.mountPoint = document.createElement('div');
    this.mountPoint.className = 'landing-component-container';
    
    // SOLUCIÓN CONSOLIDADA: Una sola inyección de estilos
    try {
      // Inyectar estilos consolidados del microfrontend
      injectMicrofrontendStyles(shadow);
      
      console.log('🎨 Microfrontend Styles - Consolidados cargados:', MICROFRONTEND_METADATA);
    } catch (e) {
      console.warn('Error inyectando estilos consolidados:', e);
    }
    
    // 3. Crear contenedor consolidado de estilos
    const masterStyleContainer = document.createElement('div');
    masterStyleContainer.id = 'landing-master-styles';
    
    // 4. Agregar estilos consolidados
    const consolidatedStyles = document.createElement('style');
    consolidatedStyles.id = 'landing-consolidated-styles';
    consolidatedStyles.textContent = getAllCompiledStyles();
    masterStyleContainer.appendChild(consolidatedStyles);
    
    // 6. Capturar estilos del DOM principal si están disponibles
    try {
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(element => {
        if (element.tagName === 'STYLE') {
          const content = element.textContent || '';
          if (content.includes('landing-component') || 
              content.includes('benefits-grid-modern') ||
              content.includes('credit-card') ||
              content.includes('benefit-icon-wrapper') ||
              content.includes('presentation-view') ||
              content.includes('requirements-view')) {
            const clonedStyle = element.cloneNode(true) as HTMLStyleElement;
            clonedStyle.id = `cloned-${Date.now()}-${Math.random()}`;
            masterStyleContainer.appendChild(clonedStyle);
          }
        }
      });
    } catch (e) {
      console.warn('Error copying external styles:', e);
    }
    
    // 3. Logging para debugging
    console.log('🎨 Landing Component - Estilos cargados:', {
      microfrontendStylesConsolidated: true,
      consolidatedStyles: getAllCompiledStyles().length,
      masterStylesCount: masterStyleContainer.children.length,
      architecture: MICROFRONTEND_METADATA.architecture
    });
    
    // CSS Reset básico (mantenido por compatibilidad)
    const cssReset = document.createElement('style');
    cssReset.textContent = `
      /* CSS Reset básico - redundante pero mantenido por seguridad */
      *, *::before, *::after {
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
        background: none !important;
        border: none !important;
        outline: none !important;
        color: inherit !important;
        font-family: inherit !important;
      }
    `;
    shadow.appendChild(cssReset);
    
    // Estilos base del host (simplificados)
    const hostStyles = document.createElement('style');
    hostStyles.textContent = `
      :host {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        min-height: 600px !important;
        --primary-color: #e91e63;
        --primary-dark: #c2185b;
        --primary-light: #f48fb1;
        --text-color: #333333;
        --text-light: #666666;
        all: initial !important;
        display: block !important;
        box-sizing: border-box !important;
        font-family: Arial, Helvetica, sans-serif !important;
        position: relative !important;
        background-color: transparent !important;
        color: #333333 !important;
        margin: 0 auto !important;
        padding: 0 !important;
        max-width: 375px !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
      }
      .landing-component-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    `;
    
    shadow.appendChild(hostStyles);
    
    // 5. Agregar primero el contenedor maestro de estilos consolidados
    shadow.appendChild(masterStyleContainer);
    
    // 6. Luego agregar los estilos básicos del host
    shadow.appendChild(hostStyles);
    
    // Contenedor para el punto de montaje con estilos inline completos
    const mountWrapper = document.createElement('div');
    mountWrapper.className = 'landing-mount-wrapper';
    mountWrapper.style.cssText = `
      all: initial !important; 
      display: block !important; 
      width: 100% !important; 
      height: 100% !important; 
      min-height: 600px !important;
      max-width: 375px !important;
      margin: 0 auto !important;
      font-family: Arial, Helvetica, sans-serif !important;
      box-sizing: border-box !important;
      overflow: auto !important;
      background-color: var(--primary-color, #e91e63) !important;
      color: white !important;
    `;
    mountWrapper.appendChild(this.mountPoint);
    mountWrapper.part = 'container'; // Expose for external styling
    
    shadow.appendChild(mountWrapper);
  }

  connectedCallback() {
    this.render();
    
    // Notificar que el componente está listo después de asegurar que el DOM está renderizado
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('component-ready', {
        detail: {
          componentId: this.componentId,
          version: this.version,
          ready: true,
          horaInicio: this.horaInicio
        },
        bubbles: true,
        composed: true
      }));
    }, 100);
    
    // Agregar listeners para rastrear interacción
    this.shadowRoot?.addEventListener('click', this.updateInteractionTime.bind(this));
    this.shadowRoot?.addEventListener('keydown', this.updateInteractionTime.bind(this));
  }
  
  // Método para actualizar el tiempo de la última interacción
  private updateInteractionTime() {
    this.ultimaInteraccion = this.formatTimestamp(new Date());
  }

  disconnectedCallback() {
    // Registrar tiempo de salida
    const horaFin = this.formatTimestamp(new Date());
    const tiempoTotal = Date.now() - new Date(this.horaInicio.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).getTime();
    
    // Enviar evento con métricas de tiempo al desmontar
    this.dispatchEvent(new CustomEvent('component-unloaded', {
      detail: {
        componentId: this.componentId,
        horaInicio: this.horaInicio,
        horaFin: horaFin,
        ultimaInteraccion: this.ultimaInteraccion,
        tiempoTotal: tiempoTotal, // tiempo en milisegundos
        tiempoTotalFormateado: this.formatDuration(tiempoTotal)
      },
      bubbles: true,
      composed: true
    }));
    
    // Eliminar event listeners
    this.shadowRoot?.removeEventListener('click', this.updateInteractionTime);
    this.shadowRoot?.removeEventListener('keydown', this.updateInteractionTime);
    
    // Limpiar al desmontar
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
  
  // Método para formatear duración en formato legible
  private formatDuration(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${(milliseconds % 1000).toString().padStart(3, '0')}`;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    
    switch (name) {
      case 'session-id':
        this.sessionId = newValue;
        break;
      case 'user-id':
        this.userId = newValue;
        break;
      case 'config':
        try {
          this.config = JSON.parse(newValue);
        } catch (e) {
          console.error('Error parsing config:', e);
        }
        break;
      case 'flow-context':
        try {
          this.flowContext = JSON.parse(newValue);
        } catch (e) {
          console.warn('Invalid flow-context JSON:', newValue);
        }
        break;
    }
    
    this.render();
  }

  // Métodos para establecer propiedades complejas que no pueden ser atributos
  set flowContextData(data: any) {
    this.flowContext = data;
    this.render();
  }
  
  set inputDataValue(data: any) {
    this.inputData = data;
    this.render();
  }

  // Renderizar el componente React con optimizaciones
  private render() {
    if (!this.mountPoint) return;
    
    // Asegurar que el elemento esté correctamente configurado antes de renderizar
    if (this.shadowRoot) {
      const appContainer = this.shadowRoot.querySelector('.landing-component-container');
      if (appContainer) {
        // Reforzar estilos críticos directamente en el contenedor
        appContainer.setAttribute('style', 
          'all: initial !important; ' +
          'display: block !important; ' +
          'width: 100% !important; ' + 
          'height: 100% !important; ' +
          'min-height: 600px !important; ' +
          'max-width: 375px !important; ' +
          'margin: 0 auto !important; ' +
          'font-family: Arial, Helvetica, sans-serif !important; ' +
          'box-sizing: border-box !important;'
        );
      }
    }
    
    // Propiedades para pasar al componente React
    const props = {
      sessionId: this.sessionId,
      userId: this.userId,
      flowContext: this.flowContext,
      config: this.config,
      inputData: this.inputData,
      // Callbacks para eventos
      onNext: (data: any) => {
        // Actualizar última interacción
        this.updateInteractionTime();
        
        const horaFin = this.formatTimestamp(new Date());
        const tiempoTotal = Date.now() - new Date(this.horaInicio.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).getTime();
        
        this.dispatchEvent(new CustomEvent('output-data', {
          detail: {
            stepCompleted: true,
            data: data,
            nextAction: 'continue',
            // Métricas de tiempo
            horaInicio: this.horaInicio,
            horaFin: horaFin,
            ultimaInteraccion: this.ultimaInteraccion,
            tiempoTotal: tiempoTotal, // tiempo en milisegundos
            tiempoTotalFormateado: this.formatDuration(tiempoTotal)
          },
          bubbles: true,
          composed: true
        }));
      },
      onPrevious: (_data: any) => {
        // Actualizar última interacción
        this.updateInteractionTime();
        
        this.dispatchEvent(new CustomEvent('request-navigation', {
          detail: { 
            direction: 'previous',
            // Métricas de tiempo
            horaInicio: this.horaInicio,
            horaActual: this.formatTimestamp(new Date()),
            ultimaInteraccion: this.ultimaInteraccion
          },
          bubbles: true,
          composed: true
        }));
      },
      onDataChange: (data: any) => {
        // Actualizar última interacción
        this.updateInteractionTime();
        
        this.dispatchEvent(new CustomEvent('data-changed', {
          detail: {
            ...data,
            // Métricas de tiempo
            horaInicio: this.horaInicio,
            horaCambio: this.formatTimestamp(new Date()),
            ultimaInteraccion: this.ultimaInteraccion
          },
          bubbles: true,
          composed: true
        }));
      },
      onError: (error: string, code: string = 'ERROR', recoverable: boolean = true) => {
        this.dispatchEvent(new CustomEvent('node-error', {
          detail: { 
            error: error,
            code: code,
            recoverable: recoverable
          },
          bubbles: true,
          composed: true
        }));
      }
      // Eliminamos onReady ya que ahora manejamos component-ready en connectedCallback
    };

    // Crear o reutilizar la raíz de React con manejo optimizado
    try {
      if (!this.root) {
        this.root = createRoot(this.mountPoint);
        
        // Aplicar un estilo de reseteo adicional al contenedor de React
        if (this.mountPoint) {
          const resetStyle = document.createElement('style');
          resetStyle.textContent = `
            #react-root {
              all: initial !important;
              display: block !important;
              width: 100% !important;
              height: 100% !important;
              min-height: 600px !important;
              font-family: Arial, Helvetica, sans-serif !important;
              box-sizing: border-box !important;
            }
          `;
          this.mountPoint.appendChild(resetStyle);
          
          // Crear un contenedor específico para la aplicación React
          const reactRoot = document.createElement('div');
          reactRoot.id = 'react-root';
          this.mountPoint.appendChild(reactRoot);
        }
      }
      
      // Renderizar el componente React con las props
      // @ts-ignore - Props personalizadas para nuestro componente App
      // Renderizar usando JSX-like approach con casting para evitar errores de TypeScript
      this.root.render(
        React.createElement(
          React.StrictMode, 
          null,
          React.createElement(App as any, props as any)
        )
      );
    } catch (error) {
      console.error('Error rendering React component:', error);
    }
  }
}

// Registrar el componente web y asegurar que está disponible globalmente
try {
  // Verificar si ya está definido para evitar errores
  if (!customElements.get('landing-web-component')) {
    customElements.define('landing-web-component', LandingWebComponent);
    console.log('✅ Web Component "landing-web-component" registrado correctamente');
  }
  
  // Asegurarse de que el componente está disponible globalmente para integración
  if (window) {
    // @ts-ignore
    window.LandingWebComponent = LandingWebComponent;
    // @ts-ignore
    window.landingComponentVersion = '1.0.0';
    console.log('✅ Web Component disponible globalmente');
  }
} catch (error) {
  console.error('❌ Error al registrar el componente web:', error);
}

export default LandingWebComponent;
