# React to Web Component Integration Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Component Architecture](#component-architecture)
3. [Style Integration Best Practices](#style-integration-best-practices)
4. [Event Handling](#event-handling)
5. [Shadow DOM Usage](#shadow-dom-usage)
6. [Webpack Configuration](#webpack-configuration)
7. [Time Tracking Integration](#time-tracking-integration)
8. [Common Issues and Solutions](#common-issues-and-solutions)
9. [Testing and Validation](#testing-and-validation)
10. [Performance Considerations](#performance-considerations)
11. [Maintenance and Versioning](#maintenance-and-versioning)

## Introduction

This guide documents the best practices, lessons learned, and solutions for developing React components wrapped as web components (custom elements) using Shadow DOM. It's designed to streamline the development process for future components and avoid common pitfalls encountered during the development of the initial Landing component.

### Purpose of Web Components

Web components provide a standard way to create reusable, encapsulated custom elements that can be used in any HTML application, regardless of the framework. By wrapping React components as web components, we can:

- **Achieve framework-independent integration**
- **Encapsulate styles and functionality**
- **Create a consistent API across different components**
- **Enable isolated testing and development**

## Component Architecture

### Basic Structure

Each component should follow this file structure:

```
ComponentName/
├── src/
│   ├── ComponentNameWebComponent.ts       # Web component wrapper
│   ├── App.tsx                           # Main React component
│   ├── index.ts                          # Entry point
│   ├── styles/                           # CSS styles
│   │   ├── globals.css                   # Global styles
│   │   └── component-specific.css        # Component-specific styles
│   └── components/                       # React sub-components
├── package.json                          # Dependencies and scripts
├── tsconfig.json                         # TypeScript configuration
├── webpack.config.js                     # Build configuration
└── public/                               # Test HTML files
```

### Component Wrapper Pattern

Follow this pattern for the web component wrapper:

1. **Import all styles** at the top of the file
2. **Create a shadow DOM** in the constructor
3. **Embed all styles directly** in the shadow DOM
4. **Define a mount point** for the React component
5. **Implement standard lifecycle callbacks**
6. **Register the custom element**

## Style Integration Best Practices

### Critical Issue: Style Encapsulation

The most common issue encountered was **styles not being preserved when integrating the component**. 

#### Solution: Embed All Styles in Shadow DOM

```typescript
constructor() {
  super();
  // Create shadow DOM for style encapsulation
  const shadow = this.attachShadow({ mode: 'open' });
  
  // Mount point for React
  this.mountPoint = document.createElement('div');
  this.mountPoint.className = 'component-container';
  
  // Create style elements for each CSS file
  const baseStyle = document.createElement('style');
  const globalStyles = document.createElement('style');
  const componentStyles = document.createElement('style');
  
  // Populate style elements with CSS content
  baseStyle.textContent = `/* Base styles */`;
  globalStyles.textContent = `/* Global styles */`;
  componentStyles.textContent = `/* Component styles */`;
  
  // Append all styles and mount point to shadow DOM
  shadow.appendChild(baseStyle);
  shadow.appendChild(globalStyles);
  shadow.appendChild(componentStyles);
  shadow.appendChild(this.mountPoint);
}
```

### Import CSS Files for Webpack Processing

Always import CSS files at the top of your web component file:

```typescript
import './styles/globals.css';
import './styles/component-specific.css';
```

This ensures webpack processes these files and makes them available for inclusion in the shadow DOM.

## Event Handling

### Custom Events for External Communication

Use custom events to communicate with the parent application:

```typescript
// Send data to parent
this.dispatchEvent(new CustomEvent('output-data', {
  detail: {
    data: data,
    horaInicio: this.horaInicio, // Timestamp when component was initialized
    horaFin: new Date().toISOString(), // Current timestamp when event is dispatched
    tiempoTotal: Date.now() - new Date(this.horaInicio).getTime(), // Duration in milliseconds
    // Additional properties
  },
  bubbles: true,
  composed: true  // Important! Allows event to cross shadow DOM boundary
}));
```

### React Component Communication

Pass callback functions to React components:

```typescript
const props = {
  // Data props
  config: this.config,
  
  // Event callbacks
  onNext: (data: any) => {
    this.dispatchEvent(new CustomEvent('output-data', {
      detail: { 
        data,
        horaInicio: this.horaInicio,
        horaFin: this.formatTimestamp(new Date()),
        tiempoTotal: Date.now() - new Date(this.horaInicio).getTime()
      },
      bubbles: true,
      composed: true
    }));
  },
  
  onError: (error: string, code: string = 'ERROR', recoverable: boolean = true) => {
    this.dispatchEvent(new CustomEvent('node-error', {
      detail: { error, code, recoverable },
      bubbles: true,
      composed: true
    }));
  }
};
```

## Shadow DOM Usage

### Mode Configuration

Always use open mode for the shadow DOM to allow external inspection:

```typescript
this.attachShadow({ mode: 'open' });
```

### CSS Variables for Theming

Define CSS variables at the `:host` level to allow for external customization:

```css
:host {
  --primary-color: #e91e63;
  --primary-dark: #c2185b;
  --text-color: #333333;
}
```

This allows parent applications to override these variables if needed.

## Webpack Configuration

### Critical Configuration: Include All Dependencies

To ensure styles and dependencies are properly bundled:

```javascript
// webpack.config.js
module.exports = {
  // ...other config
  
  // Include everything in the bundle for maximum compatibility
  externals: {},  // Empty object means nothing is external
  
  module: {
    rules: [
      // CSS processing rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Other rules...
    ],
  },
};
```

### Style Loader Configuration

Ensure style loaders are properly configured:

```javascript
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
}
```

## Time Tracking Integration

Components should implement automatic time tracking to provide valuable metrics about usage patterns and duration. This data is essential for analytics, performance monitoring, and user experience optimization.

### Required Time Metrics

Each component should track and output the following metrics:

```typescript
// Properties to define in the web component class
private horaInicio: string = '';    // Component initialization time
private ultimaInteraccion: string = '';  // Last user interaction time
```

### Timestamp Formatting

Use a consistent timestamp format with millisecond precision:

```typescript
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
```

### Interaction Tracking

Add event listeners to track user interactions:

```typescript
connectedCallback() {
  this.render();
  
  // Standard component initialization...
  
  // Add interaction tracking
  this.shadowRoot?.addEventListener('click', this.updateInteractionTime.bind(this));
  this.shadowRoot?.addEventListener('keydown', this.updateInteractionTime.bind(this));
}

private updateInteractionTime() {
  this.ultimaInteraccion = this.formatTimestamp(new Date());
}
```

### Including Time Metrics in Events

Add time metrics to all component events:

```typescript
this.dispatchEvent(new CustomEvent('output-data', {
  detail: {
    // Original data
    stepCompleted: true,
    data: data,
    
    // Time metrics
    horaInicio: this.horaInicio,
    horaFin: this.formatTimestamp(new Date()),
    ultimaInteraccion: this.ultimaInteraccion,
    tiempoTotal: Date.now() - new Date(this.horaInicio).getTime(),
    tiempoTotalFormateado: this.formatDuration(tiempoTotal)
  },
  bubbles: true,
  composed: true
}));
```

For more details on time tracking implementation, see the [TIME_TRACKING.md](./TIME_TRACKING.md) document.

## Common Issues and Solutions

### 1. Styles Not Applying in Integration Context

**Problem:** Styles defined in CSS files aren't applied when the component is integrated into another application.

**Solution:** 
- Embed all styles directly in the shadow DOM
- Use CSS variables for theming
- Import CSS files at the top of the web component file

### 2. Event Communication Issues

**Problem:** Events from the web component aren't received by the parent application.

**Solution:**
- Set `composed: true` on all custom events
- Use `bubbles: true` for events that should propagate up
- Test events in isolation before integration

### 3. Multiple React Instances

**Problem:** Conflicts between React versions if the host application also uses React.

**Solution:**
- Bundle React with the component (no externals)
- Use createRoot instead of ReactDOM.render
- Carefully manage React version dependencies

### 4. Component Initialization Timing

**Problem:** Component not fully initialized when the parent tries to interact with it.

**Solution:**
- Implement a 'component-ready' event in the connectedCallback
- Use setTimeout to ensure the DOM is fully rendered before sending ready event

```typescript
connectedCallback() {
  this.render();
  
  setTimeout(() => {
    this.dispatchEvent(new CustomEvent('component-ready', {
      detail: {
        componentId: this.componentId,
        version: this.version,
        ready: true
      },
      bubbles: true,
      composed: true
    }));
  }, 100);
}
```

## Testing and Validation

### Isolated Testing

Create a simple HTML file for testing the component in isolation:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Component Test</title>
</head>
<body>
  <my-web-component id="component"></my-web-component>
  
  <script src="./dist/index.js"></script>
  <script>
    const component = document.getElementById('component');
    
    // Set attributes
    component.setAttribute('session-id', 'test-session');
    
    // Set properties
    component.inputDataValue = { test: 'data' };
    
    // Listen for events
    component.addEventListener('output-data', (event) => {
      console.log('Output data:', event.detail);
    });
  </script>
</body>
</html>
```

### Cross-Browser Testing

Always test in multiple browsers to ensure Shadow DOM compatibility.

## Performance Considerations

### Bundle Size Optimization

Monitor bundle size and optimize when possible:

- Use code splitting for larger components
- Consider dynamic loading of sub-components
- Analyze bundle with tools like `webpack-bundle-analyzer`

### Render Performance

Optimize React rendering:

- Use React.memo for functional components
- Implement shouldComponentUpdate for class components
- Use useCallback and useMemo hooks appropriately

## Maintenance and Versioning

### Version Tracking

Each component should expose its version:

```typescript
private readonly version: string = '1.0.0';
```

### Compatibility Documentation

Clearly document browser compatibility and integration requirements for each component version.

### Upgrade Strategy

When updating components:

1. Create a new version
2. Document breaking changes
3. Provide migration guides
4. Consider a version compatibility matrix

---

## Integration Checklist

Use this checklist when developing new components:

- [ ] Import all CSS files at the top of the web component file
- [ ] Embed all styles directly in the shadow DOM
- [ ] Configure webpack with no externals
- [ ] Implement time tracking (horaInicio, horaFin)
- [ ] Add interaction monitoring for ultimaInteraccion
- [ ] Include time metrics in all event outputs
- [ ] Test component in isolation before integration
- [ ] Verify all events cross the shadow DOM boundary
- [ ] Implement component-ready event
- [ ] Test in multiple browsers
- [ ] Document version and API
- [ ] Include usage examples

By following these guidelines, you can avoid common pitfalls and create robust, reusable web components that maintain their styles and functionality across different integration contexts.
