# 📋 Ejemplo de Integración Vue.js - Landing Component

## 🎯 Component Vue.js para Integración

Aquí tienes un ejemplo completo de cómo integrar el Landing Web Component en una aplicación Vue.js:

### **LandingWrapper.vue**

```vue
<template>
  <div class="landing-wrapper">
    <!-- Status indicator -->
    <div v-if="!componentReady" class="loading-status">
      <div class="spinner"></div>
      <p>Cargando componente Landing...</p>
    </div>

    <!-- Error state -->
    <div v-if="error" class="error-status">
      <h3>❌ Error de Integración</h3>
      <p>{{ error }}</p>
      <button @click="retryLoad" class="retry-btn">Reintentar</button>
    </div>

    <!-- Landing Web Component -->
    <landing-web-component 
      v-show="componentReady && !error"
      :session-id="sessionId"
      :user-id="userId"
      :config="configJson"
      :flow-context="flowContextJson"
      ref="landingComponent"
      class="landing-component">
    </landing-web-component>

    <!-- Debug Info (solo en desarrollo) -->
    <div v-if="isDevelopment" class="debug-info">
      <h4>🔍 Debug Info:</h4>
      <pre>{{ debugInfo }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingWrapper',
  props: {
    sessionId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    flowContext: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      componentReady: false,
      error: null,
      config: {
        title: 'Tarjeta Bradescard',
        primaryColor: '#e91e63',
        environment: 'vue-production',
        version: '1.0.0'
      },
      debugInfo: {
        loadTime: null,
        events: [],
        lastInteraction: null
      },
      isDevelopment: process.env.NODE_ENV === 'development'
    };
  },
  computed: {
    configJson() {
      return JSON.stringify(this.config);
    },
    flowContextJson() {
      return JSON.stringify(this.flowContext);
    }
  },
  async mounted() {
    await this.loadLandingComponent();
  },
  beforeUnmount() {
    this.cleanupEventListeners();
  },
  methods: {
    async loadLandingComponent() {
      try {
        const startTime = Date.now();
        this.error = null;

        // Verificar si ya está cargado
        if (customElements.get('landing-web-component')) {
          this.debugInfo.loadTime = 'Already loaded';
          this.setupEventListeners();
          return;
        }

        // Cargar el script del Web Component
        await this.loadScript('/dist/landing-v1.0.0.js'); // Ajusta la ruta según tu configuración
        
        this.debugInfo.loadTime = `${Date.now() - startTime}ms`;
        
        // Esperar a que el elemento customizado esté disponible
        await this.waitForCustomElement('landing-web-component');
        
        // Configurar event listeners
        this.$nextTick(() => {
          this.setupEventListeners();
        });

      } catch (error) {
        console.error('Error loading Landing Component:', error);
        this.error = `Error cargando componente: ${error.message}`;
      }
    },

    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(); // Script ya cargado
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    },

    waitForCustomElement(tagName, timeout = 5000) {
      return new Promise((resolve, reject) => {
        if (customElements.get(tagName)) {
          resolve();
          return;
        }

        const timer = setTimeout(() => {
          reject(new Error(`Timeout waiting for custom element: ${tagName}`));
        }, timeout);

        const checkForElement = () => {
          if (customElements.get(tagName)) {
            clearTimeout(timer);
            resolve();
          } else {
            setTimeout(checkForElement, 100);
          }
        };

        checkForElement();
      });
    },

    setupEventListeners() {
      const landingComponent = this.$refs.landingComponent;
      
      if (!landingComponent) {
        console.warn('Landing component ref not available');
        return;
      }

      // Component Ready
      landingComponent.addEventListener('component-ready', this.onComponentReady);
      
      // Output Data (formulario completado)
      landingComponent.addEventListener('output-data', this.onOutputData);
      
      // Navigation Request
      landingComponent.addEventListener('request-navigation', this.onNavigationRequest);
      
      // Data Changed
      landingComponent.addEventListener('data-changed', this.onDataChanged);
      
      // Error
      landingComponent.addEventListener('node-error', this.onComponentError);

      console.log('✅ Event listeners configured');
    },

    cleanupEventListeners() {
      const landingComponent = this.$refs.landingComponent;
      
      if (landingComponent) {
        landingComponent.removeEventListener('component-ready', this.onComponentReady);
        landingComponent.removeEventListener('output-data', this.onOutputData);
        landingComponent.removeEventListener('request-navigation', this.onNavigationRequest);
        landingComponent.removeEventListener('data-changed', this.onDataChanged);
        landingComponent.removeEventListener('node-error', this.onComponentError);
      }
    },

    // Event Handlers
    onComponentReady(event) {
      console.log('🚀 Landing Component Ready:', event.detail);
      this.componentReady = true;
      this.debugInfo.events.push({
        type: 'ready',
        timestamp: new Date().toISOString(),
        detail: event.detail
      });

      // Emitir evento para el padre
      this.$emit('component-ready', event.detail);
    },

    onOutputData(event) {
      console.log('📤 Output Data Received:', event.detail);
      this.debugInfo.lastInteraction = new Date().toISOString();
      this.debugInfo.events.push({
        type: 'output',
        timestamp: new Date().toISOString(),
        detail: event.detail
      });

      // Emitir al componente padre
      this.$emit('form-completed', event.detail);

      // Navegación automática (opcional)
      this.navigateToNext(event.detail);
    },

    onNavigationRequest(event) {
      console.log('🔄 Navigation Request:', event.detail);
      const { direction } = event.detail;
      
      if (direction === 'previous') {
        this.$emit('navigate-back', event.detail);
        // Usar Vue Router si está disponible
        if (this.$router) {
          this.$router.go(-1);
        }
      }
    },

    onDataChanged(event) {
      console.log('📝 Data Changed:', event.detail);
      this.debugInfo.lastInteraction = new Date().toISOString();
      this.$emit('data-changed', event.detail);
    },

    onComponentError(event) {
      console.error('❌ Component Error:', event.detail);
      this.error = `Error del componente: ${event.detail.error}`;
      this.$emit('component-error', event.detail);
    },

    // Navigation Methods
    navigateToNext(data) {
      // Lógica de navegación personalizada
      console.log('Navigating to next step with data:', data);
      
      if (this.$router) {
        this.$router.push({
          name: 'NextStep',
          params: { 
            landingData: data,
            sessionId: this.sessionId 
          }
        });
      }
    },

    retryLoad() {
      this.error = null;
      this.componentReady = false;
      this.loadLandingComponent();
    },

    // Métodos públicos para controlar el componente
    setInputData(data) {
      const landingComponent = this.$refs.landingComponent;
      if (landingComponent && landingComponent.setInputData) {
        landingComponent.setInputData(data);
      }
    },

    getOutputData() {
      const landingComponent = this.$refs.landingComponent;
      if (landingComponent && landingComponent.getOutputData) {
        return landingComponent.getOutputData();
      }
      return null;
    }
  }
};
</script>

<style scoped>
.landing-wrapper {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  position: relative;
}

.loading-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #e91e63;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-status {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.error-status h3 {
  color: #721c24;
  margin: 0 0 10px 0;
}

.error-status p {
  color: #721c24;
  margin: 0 0 15px 0;
}

.retry-btn {
  background: #e91e63;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}

.retry-btn:hover {
  background: #c2185b;
}

.landing-component {
  width: 100%;
  display: block;
}

.debug-info {
  margin-top: 20px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  font-size: 12px;
}

.debug-info h4 {
  margin: 0 0 10px 0;
  color: #495057;
}

.debug-info pre {
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 3px;
  padding: 10px;
  margin: 0;
  overflow-x: auto;
  white-space: pre-wrap;
}
</style>
```

## 🚀 Uso en la aplicación Vue.js

### **En tu componente padre:**

```vue
<template>
  <div class="app">
    <LandingWrapper
      :session-id="sessionId"
      :user-id="userId"
      :flow-context="flowContext"
      @component-ready="handleComponentReady"
      @form-completed="handleFormCompleted"
      @navigate-back="handleNavigateBack"
      @component-error="handleComponentError"
      ref="landingWrapper"
    />
  </div>
</template>

<script>
import LandingWrapper from '@/components/LandingWrapper.vue';

export default {
  name: 'LandingPage',
  components: {
    LandingWrapper
  },
  data() {
    return {
      sessionId: this.$route.params.sessionId || 'default-session',
      userId: this.$store.state.user.id,
      flowContext: {
        currentStep: 'landing',
        previousStep: 'welcome',
        nextStep: 'form-data'
      }
    };
  },
  methods: {
    handleComponentReady(detail) {
      console.log('Landing component is ready:', detail);
      // Registrar métricas, analytics, etc.
    },

    handleFormCompleted(data) {
      console.log('Form completed:', data);
      
      // Guardar datos en Vuex store
      this.$store.commit('landing/setFormData', data);
      
      // Navegar al siguiente paso
      this.$router.push({
        name: 'DataCapture',
        params: { 
          sessionId: this.sessionId,
          landingData: data
        }
      });
    },

    handleNavigateBack(detail) {
      console.log('Navigate back requested:', detail);
      this.$router.go(-1);
    },

    handleComponentError(error) {
      console.error('Component error:', error);
      // Mostrar notificación de error
      this.$notify.error('Error en el componente Landing');
    }
  }
};
</script>
```

## ✅ Características Implementadas

- **✅ Carga dinámica** del Web Component con manejo de errores
- **✅ Event listeners** completos con cleanup automático
- **✅ Estado de loading** y error con UI feedback
- **✅ Integración con Vue Router** para navegación
- **✅ Props reactivos** que se pasan al Web Component
- **✅ Debug mode** para desarrollo
- **✅ Métodos públicos** para controlar el componente
- **✅ Cleanup automático** en unmount

## 🔧 Configuración de Webpack Dev Server

Para servir el componente durante desarrollo, ajusta tu `vue.config.js`:

```javascript
// vue.config.js
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    // Servir archivos estáticos adicionales
    static: [
      {
        directory: path.join(__dirname, 'node_modules/@your-org/landing-component/dist'),
        publicPath: '/landing-component'
      }
    ]
  }
};
```

## 🎯 Resultado Final

Con esta implementación:

1. **Desarrollo**: Fácil testing y debugging
2. **Producción**: Integración robusta con manejo de errores
3. **Mantenibilidad**: Código limpio y bien estructurado
4. **Reusabilidad**: Wrapper reutilizable en múltiples páginas
