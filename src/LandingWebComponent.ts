import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';
// Importar los estilos para que webpack los incluya en el bundle
import './styles/globals.css';
import './styles/presentation.css';
import './styles/requirements.css';
// Importar la función de inyección de estilos críticos
import { injectShadowStyles } from './utils/styleInjector';

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
    
    // SOLUCIÓN: Inyectar estilos críticos específicos que se pierden en la integración
    try {
      injectShadowStyles(shadow);
    } catch (e) {
      console.warn('Error inyectando estilos críticos:', e);
    }
    
    // Importar estilos explícitamente del DOM si están disponibles
    try {
      // Capturar estilos globales y añadirlos al Shadow DOM
      document.querySelectorAll('style').forEach(styleElement => {
        if (styleElement.id === 'landing-component-styles' || 
            styleElement.textContent?.includes('landing-component') ||
            styleElement.textContent?.includes('benefits-grid-modern')) {
          shadow.appendChild(styleElement.cloneNode(true));
        }
      });
      
      // También buscar estilos guardados por webpack
      if (typeof window !== 'undefined' && (window as any)._landingComponentStyles) {
        const webpackStyles = document.createElement('style');
        webpackStyles.textContent = (window as any)._landingComponentStyles.join('\n');
        shadow.appendChild(webpackStyles);
      }
    } catch (e) {
      console.warn('Error copying external styles:', e);
    }
    
    // Insertamos un CSS Reset completo para evitar cualquier estilo heredado
    const cssReset = document.createElement('style');
    cssReset.textContent = `
      /* CSS Reset completo */
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
    
    // Estilos base para el contenedor
    const style = document.createElement('style');
    style.textContent = `
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
        /* Force complete reset of all inherited styles within the shadow DOM */
        all: initial !important;
        /* Then re-apply only what we need */
        display: block !important;
        box-sizing: border-box !important;
        font-family: Arial, Helvetica, sans-serif !important;
        position: relative !important;
        background-color: transparent !important;
        color: #333333 !important;
        margin: 0 !important;
        padding: 0 !important;
        max-width: 375px !important;
        margin: 0 auto !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
      }
      .landing-component-container {
        width: 100%;
        height: 100%;
        /* Ensure our container contains floats */
        overflow: hidden;
      }
    `;
    
    // Estilos globales
    const globalStyles = document.createElement('style');
    globalStyles.textContent = `
      /* Reset extremadamente agresivo para evitar cualquier estilo heredado */
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
      
      /* Resetear completamente elementos HTML para garantizar que no hereden estilos */
      h1, h2, h3, h4, h5, h6, p, span, div, button, input, a, ul, ol, li {
        all: unset !important;
        box-sizing: border-box !important;
        display: block !important;
        line-height: normal !important;
        color: inherit !important;
      }
      
      /* Estilos específicos para elementos importantes */
      h1 {
        font-size: 24px !important;
        font-weight: bold !important;
        margin: 10px 0 !important;
      }
      
      h2 {
        font-size: 20px !important;
        font-weight: bold !important;
        margin: 8px 0 !important;
      }
      
      p {
        font-size: 16px !important;
        margin: 6px 0 !important;
        line-height: 1.4 !important;
      }
      
      button {
        cursor: pointer !important;
      }
      
      /* Contenedor principal de la app con estilos reforzados */
      .app {
        width: 100% !important;
        max-width: 375px !important;
        min-height: 100vh !important;
        min-height: 600px !important;
        background: var(--primary-color) !important;
        margin: 0 auto !important;
        position: relative !important;
        overflow-x: hidden !important;
        /* Forzar el estilo correcto incluso cuando se integra */
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
      
      /* Ensure the app container maintains its dimensions */
      .landing-component-container {
        width: 100% !important;
        height: 100% !important;
        min-height: 600px !important;
        /* Ensure our container contains floats */
        overflow: hidden !important;
        display: block !important;
        position: relative !important;
        max-width: 375px !important;
        margin: 0 auto !important;
      }
      
      /* Header con logos */
      .header-logos {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 20px !important;
        padding: 5px 10px !important;
        background-color: rgba(0, 0, 0, 0.2) !important;
        border-radius: 8px !important;
      }
      
      .header-logos-compact {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 10px !important;
        padding: 5px 10px !important;
        background-color: rgba(0, 0, 0, 0.2) !important;
        border-radius: 8px !important;
      }
      
      .bradescard-logo {
        font-size: 18px !important;
        font-weight: bold !important;
        color: white !important;
        padding: 4px !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
      }
      
      .promoda-logo {
        font-size: 18px !important;
        font-weight: bold !important;
        color: white !important;
        font-style: italic !important;
        padding: 4px !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
      }
      
      /* Botones estándar */
      .btn {
        display: inline-block;
        padding: 12px 24px;
        border: none;
        border-radius: 25px;
        background: white;
        color: var(--primary-color);
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        min-width: 120px;
        font-size: 14px;
        margin: 10px 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      
      .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
      }
    `;
    
    // Estilos de presentación
    const presentationStyles = document.createElement('style');
    presentationStyles.textContent = `
      /* === VISTA DE PRESENTACIÓN === */
      .presentation-view {
        background: var(--primary-color) !important;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
        color: white !important;
        text-align: center !important;
        padding: 12px !important;
        min-height: 100vh !important;
        min-height: 600px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        position: relative !important;
        overflow: hidden !important;
        width: 100% !important;
        max-width: 375px !important;
        margin: 0 auto !important;
        font-family: Arial, Helvetica, sans-serif !important;
      }
      
      /* Efecto de degradado sutil en el fondo con estilos reforzados */
      .presentation-view::before {
        content: "" !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: radial-gradient(
          circle at top right,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%
        ) !important;
        z-index: 0 !important;
        pointer-events: none !important;
      }
      
      /* Estilos adicionales para mejorar la visualización de contenido en la presentación */
      .presentation-view .content-section {
        position: relative !important;
        z-index: 1 !important;
        padding: 10px !important;
        margin: 10px auto !important;
        width: 100% !important;
        max-width: 350px !important;
      }
      
      /* Asegurar que los textos sean legibles */
      .presentation-view h1,
      .presentation-view h2,
      .presentation-view h3,
      .presentation-view p,
      .presentation-view span {
        color: white !important;
        text-align: center !important;
        margin: 8px 0 !important;
        padding: 0 !important;
      }
      
      .presentation-view h1 {
        font-size: 24px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
      }
      
      .presentation-view h2 {
        font-size: 20px !important;
        font-weight: bold !important;
      }
      
      .presentation-view p {
        font-size: 16px !important;
        line-height: 1.5 !important;
      }
      
      /* Header moderno con estilos reforzados */
      .header-logos-modern {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 10px !important;
        padding: 10px !important;
        position: relative !important;
        z-index: 1 !important;
        background-color: rgba(0, 0, 0, 0.2) !important;
        border-radius: 8px !important;
        width: 100% !important;
        max-width: 350px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      
      /* Asegurar que los logos se vean correctamente */
      .header-logos-modern .bradescard-logo,
      .header-logos-modern .promoda-logo {
        font-size: 18px !important;
        font-weight: bold !important;
        color: white !important;
        margin: 0 !important;
        padding: 0 !important;
        display: inline-block !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
      }
      
      .header-logos-modern .promoda-logo {
        font-style: italic !important;
      }
      
      /* Título principal moderno */
      .main-title-modern {
        margin-bottom: 15px;
        padding: 0 10px;
        position: relative;
        z-index: 1;
      }
      
      .main-title-modern h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
        color: white;
        text-align: center;
      }
      
      .main-title-modern p {
        font-size: 16px;
        color: white;
        margin-top: 5px;
        text-align: center;
      }
      
      .branded-text {
        font-style: italic;
        font-weight: bold;
      }
      
      .branded-text-secondary {
        opacity: 0.8;
        font-size: 0.9em;
      }
      
      /* Card visual moderno */
      .card-visual-modern {
        width: 80% !important;
        max-width: 300px !important;
        height: 180px !important;
        margin: 20px auto !important;
        background: linear-gradient(135deg, #333, #1a1a1a) !important;
        border-radius: 12px !important;
        position: relative !important;
        overflow: hidden !important;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
        z-index: 1 !important;
        transform: perspective(1000px) rotateX(10deg) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        padding: 20px !important;
        color: white !important;
      }
      
      /* Elementos de la tarjeta con estilos reforzados */
      .card-chip {
        width: 40px !important;
        height: 30px !important;
        background: linear-gradient(135deg, #ffd700, #ffaa00) !important;
        border-radius: 4px !important;
        margin-bottom: 30px !important;
        position: relative !important;
        z-index: 2 !important;
      }
      
      .card-logo {
        position: absolute !important;
        bottom: 20px !important;
        right: 20px !important;
        font-size: 18px !important;
        font-weight: bold !important;
        color: white !important;
        font-style: italic !important;
        z-index: 2 !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
      }
      
      .card-shine {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0) 80%
        ) !important;
        z-index: 1 !important;
        pointer-events: none !important;
      }
      
      /* Añadir elementos adicionales para mejorar el aspecto visual de la tarjeta */
      .card-number {
        font-size: 16px !important;
        letter-spacing: 2px !important;
        color: white !important;
        margin-bottom: 10px !important;
        font-family: "Courier New", monospace !important;
      }
      
      .card-holder {
        font-size: 14px !important;
        color: rgba(255,255,255,0.8) !important;
        position: absolute !important;
        bottom: 50px !important;
        left: 20px !important;
        font-weight: normal !important;
        text-transform: uppercase !important;
      }
      
      /* Botones en vista de presentación */
      .presentation-view .btn-primary {
        background: white !important;
        color: var(--primary-color) !important;
        display: inline-block !important;
        padding: 12px 24px !important;
        border: none !important;
        border-radius: 25px !important;
        font-weight: bold !important;
        text-transform: uppercase !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        text-align: center !important;
        min-width: 120px !important;
        font-size: 14px !important;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
        width: 80% !important;
        max-width: 250px !important;
        margin: 10px auto !important;
        text-decoration: none !important;
        outline: none !important;
        appearance: none !important;
      }
      
      .presentation-view .btn-secondary {
        background: transparent !important;
        color: white !important;
        border: 1px solid white !important;
        display: inline-block !important;
        padding: 12px 24px !important;
        border-radius: 25px !important;
        font-weight: bold !important;
        text-transform: uppercase !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        text-align: center !important;
        min-width: 120px !important;
        font-size: 14px !important;
        width: 80% !important;
        max-width: 250px !important;
        margin: 10px auto !important;
        text-decoration: none !important;
        outline: none !important;
        appearance: none !important;
      }
      
      /* Estilo hover para botones */
      .presentation-view .btn-primary:hover, 
      .presentation-view .btn-secondary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15) !important;
      }
      
      /* Contenedor de botones con estilos reforzados */
      .buttons-container {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        margin-top: 20px !important;
        padding: 10px 0 !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      /* Asegurar que los botones mantengan su estilo */
      .buttons-container button,
      .buttons-container .btn,
      .buttons-container .btn-primary,
      .buttons-container .btn-secondary {
        width: 80% !important;
        max-width: 250px !important;
        margin: 8px auto !important;
        display: block !important;
        text-align: center !important;
      }
    `;
    
    // Estilos de requerimientos
    const requirementsStyles = document.createElement('style');
    requirementsStyles.textContent = `
      /* === VISTA DE REQUISITOS === */
      .requirements-view {
        background: linear-gradient(to bottom, #ffffff, #f8f8f8) !important;
        color: var(--text-color) !important;
        padding: 14px !important;
        min-height: 100vh !important;
        min-height: 600px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        position: relative !important;
        overflow: hidden !important;
        width: 100% !important;
        max-width: 375px !important;
        margin: 0 auto !important;
        font-family: Arial, Helvetica, sans-serif !important;
      }
      
      /* Header moderno con logos - con estilos reforzados */
      .requirements-view .header-logos-modern {
        margin-bottom: 18px !important;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
        padding: 12px !important;
        border-radius: 10px !important;
        color: white !important;
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-shadow: 0 2px 10px rgba(233, 30, 99, 0.2) !important;
        width: 100% !important;
        z-index: 1 !important;
      }
      
      .requirements-view .bradescard-logo,
      .requirements-view .promoda-logo {
        color: white !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        letter-spacing: -0.3px !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
        padding: 4px !important;
        margin: 0 !important;
        display: inline-block !important;
      }
      
      /* Título de requisitos moderno */
      .requirements-title-modern {
        text-align: center;
        margin-bottom: 20px;
        position: relative;
      }
      
      .requirements-title-modern h2 {
        font-size: 22px;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 5px;
        letter-spacing: -0.5px;
      }
      
      .title-underline {
        height: 3px;
        width: 60px;
        background: linear-gradient(to right, var(--primary-color), rgba(233, 30, 99, 0.3));
        border-radius: 2px;
        margin: 6px auto 0;
      }
      
      /* Lista de requisitos moderna */
      .requirements-list-modern {
        margin-bottom: 25px;
      }
      
      .requirement-item-modern {
        display: flex;
        align-items: center;
        padding: 12px 10px;
        margin-bottom: 12px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        transition: transform 0.2s ease;
      }
      
      .requirement-icon-wrapper {
        flex-shrink: 0;
        width: 50px;
        display: flex;
        justify-content: center;
      }
      
      .requirement-text-modern {
        flex-grow: 1;
        padding: 0 10px;
      }
      
      .requirement-text-modern strong {
        display: block;
        font-size: 16px;
        color: var(--primary-color);
        margin-bottom: 2px;
      }
      
      .requirement-text-modern p {
        font-size: 13px;
        color: var(--text-light);
        margin: 0;
      }
      
      .requirement-check {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
      }
      
      /* Contenedor de botones moderno */
      .requirements-footer {
        margin-top: auto;
        padding-top: 20px;
      }
      
      .requirements-note {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        padding: 8px 15px;
        background: rgba(233, 30, 99, 0.06);
        border-radius: 20px;
        font-size: 12px;
        color: #666;
      }
      
      .note-icon {
        margin-right: 8px;
        font-size: 14px;
        color: var(--primary-color);
      }
      
      .buttons-container-modern {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 0;
      }
      
      .buttons-row {
        flex-direction: row;
        justify-content: space-between;
      }
      
      /* Botones en vista de requisitos */
      .requirements-view .btn {
        width: 100%;
        margin: 0;
        padding: 12px 0;
      }
      
      /* Botones en fila */
      .buttons-row .btn {
        width: 48%;
        padding: 12px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        font-weight: 600;
        transition: all 0.3s;
      }
      
      /* Botones específicos */
      .btn-continue {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        box-shadow: 0 4px 12px rgba(233, 30, 99, 0.25);
      }
      
      .btn-continue:hover {
        background: linear-gradient(135deg, var(--primary-dark), #c2185b);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(233, 30, 99, 0.3);
      }
      
      .btn-back {
        background: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
      }
      
      .btn-back:hover {
        background: rgba(233, 30, 99, 0.08);
        border-color: var(--primary-dark);
        color: var(--primary-dark);
      }
      
      .btn-text {
        margin: 0 5px;
      }
      
      .btn-icon {
        font-size: 16px;
      }
      
      .version-footer-modern {
        text-align: center !important;
        font-size: 11px !important;
        color: #999 !important;
        margin-top: 15px !important;
        padding: 5px !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      /* Ensure version display is consistent */
      .version-footer-modern .version-text {
        font-size: 10px !important;
        opacity: 0.7 !important;
        font-family: monospace !important;
      }
    `;
    
    // Garantizar que los estilos se apliquen correctamente - método mejorado
    // Creamos un contenedor para los estilos con ID para facilitar referencias
    const styleContainer = document.createElement('div');
    styleContainer.id = 'landing-styles-container';
    
    // Crear un estilo que contenga todo el CSS necesario para el componente
    const combinedStyles = document.createElement('style');
    combinedStyles.id = 'landing-component-all-styles';
    
    // Agregar todos los estilos en un único elemento
    try {
      // Texto CSS completo para el componente
      const cssText = `
      /* Reset básico para el componente */
      * {
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
      }
      
      /* Estilos base del componente */
      .landing-component-container {
        all: initial !important;
        display: block !important;
        width: 100% !important;
        max-width: 375px !important;
        min-height: 600px !important;
        margin: 0 auto !important;
        font-family: Arial, Helvetica, sans-serif !important;
        color: white !important;
        background-color: #e91e63 !important;
        overflow: auto !important;
        position: relative !important;
      }
      
      /* === VISTA DE PRESENTACIÓN === */
      .presentation-view {
        background: #e91e63 !important;
        background: linear-gradient(135deg, #e91e63, #c2185b) !important;
        color: white !important;
        text-align: center !important;
        padding: 12px !important;
        min-height: 600px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      /* Tarjeta de presentación */
      .card-visual-modern {
        width: 80% !important;
        max-width: 300px !important;
        height: 180px !important;
        margin: 20px auto !important;
        background: linear-gradient(135deg, #333, #1a1a1a) !important;
        border-radius: 12px !important;
        position: relative !important;
        overflow: hidden !important;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
        z-index: 1 !important;
        transform: perspective(1000px) rotateX(10deg) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        padding: 20px !important;
      }
      
      /* Botones */
      .presentation-view .btn-primary {
        background: white !important;
        color: #e91e63 !important;
        display: inline-block !important;
        padding: 12px 24px !important;
        border: none !important;
        border-radius: 25px !important;
        font-weight: bold !important;
        text-transform: uppercase !important;
        cursor: pointer !important;
        text-align: center !important;
        width: 80% !important;
        max-width: 250px !important;
        margin: 10px auto !important;
      }
      
      .presentation-view .btn-secondary {
        background: transparent !important;
        color: white !important;
        border: 1px solid white !important;
        display: inline-block !important;
        padding: 12px 24px !important;
        border-radius: 25px !important;
        font-weight: bold !important;
        text-transform: uppercase !important;
        cursor: pointer !important;
        text-align: center !important;
        width: 80% !important;
        max-width: 250px !important;
        margin: 10px auto !important;
      }
      `;
      
      combinedStyles.textContent = cssText;
      styleContainer.appendChild(combinedStyles);
      
      // También mantener los estilos originales como fallback
      styleContainer.appendChild(style);
      styleContainer.appendChild(globalStyles);
      styleContainer.appendChild(presentationStyles);
      styleContainer.appendChild(requirementsStyles);
    } catch (e) {
      console.warn('Error adoptando estilos:', e);
      // Fallback: usar los estilos explícitamente definidos
      styleContainer.appendChild(style);
      styleContainer.appendChild(globalStyles);
      styleContainer.appendChild(presentationStyles);
      styleContainer.appendChild(requirementsStyles);
    }
    
    shadow.appendChild(styleContainer);
    
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
