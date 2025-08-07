# Component Time Tracking Implementation

## Overview

This document describes how time tracking metrics have been implemented in the web components to provide valuable data about component usage, session duration, and user interaction patterns.

## Time Metrics Available

All components now automatically track the following time metrics:

| Metric | Format | Description |
|--------|--------|-------------|
| `horaInicio` | `dd/MM/yyyy HH:mm:ss.SSS` | Timestamp when the component was initialized |
| `horaFin` | `dd/MM/yyyy HH:mm:ss.SSS` | Timestamp when the component was unloaded or when a completion action was taken |
| `ultimaInteraccion` | `dd/MM/yyyy HH:mm:ss.SSS` | Timestamp of the last user interaction (click, key press) |
| `tiempoTotal` | Number | Total time in milliseconds the component was active |
| `tiempoTotalFormateado` | `HH:mm:ss.SSS` | Human-readable format of the total time |

## Implementation Details

### 1. Timestamp Format

All timestamps are formatted as `dd/MM/yyyy HH:mm:ss.SSS` for consistency and precision:

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

### 2. Initialization in Constructor

Time tracking begins as soon as the component is created:

```typescript
constructor() {
  super();
  // Initialize time tracking
  this.horaInicio = this.formatTimestamp(new Date());
  this.ultimaInteraccion = this.horaInicio;
  
  // Rest of constructor...
}
```

### 3. User Interaction Tracking

Components automatically track when users interact with them:

```typescript
connectedCallback() {
  // Component initialization...
  
  // Add listeners for interaction tracking
  this.shadowRoot?.addEventListener('click', this.updateInteractionTime.bind(this));
  this.shadowRoot?.addEventListener('keydown', this.updateInteractionTime.bind(this));
}

private updateInteractionTime() {
  this.ultimaInteraccion = this.formatTimestamp(new Date());
}
```

### 4. Event Output

All events dispatched by the component include relevant time metrics:

```typescript
// Example for 'output-data' event
this.dispatchEvent(new CustomEvent('output-data', {
  detail: {
    // Original event data
    stepCompleted: true,
    data: data,
    nextAction: 'continue',
    
    // Time metrics
    horaInicio: this.horaInicio,
    horaFin: horaFin,
    ultimaInteraccion: this.ultimaInteraccion,
    tiempoTotal: tiempoTotal,
    tiempoTotalFormateado: this.formatDuration(tiempoTotal)
  },
  bubbles: true,
  composed: true
}));
```

### 5. Component Unloading

When a component is removed from the DOM, it sends a final event with complete timing information:

```typescript
disconnectedCallback() {
  // Record end time
  const horaFin = this.formatTimestamp(new Date());
  const tiempoTotal = Date.now() - new Date(this.horaInicio).getTime();
  
  // Send event with time metrics
  this.dispatchEvent(new CustomEvent('component-unloaded', {
    detail: {
      componentId: this.componentId,
      horaInicio: this.horaInicio,
      horaFin: horaFin,
      ultimaInteraccion: this.ultimaInteraccion,
      tiempoTotal: tiempoTotal,
      tiempoTotalFormateado: this.formatDuration(tiempoTotal)
    },
    bubbles: true,
    composed: true
  }));
  
  // Cleanup
  // ...
}
```

## Usage in Host Application

Host applications can access these metrics from event details:

```javascript
// Listen for component events with timing data
document.querySelector('landing-web-component').addEventListener('output-data', (event) => {
  const { 
    horaInicio, 
    horaFin, 
    tiempoTotal, 
    tiempoTotalFormateado 
  } = event.detail;
  
  console.log(`Component was active for ${tiempoTotalFormateado}`);
  console.log(`Started at: ${horaInicio}`);
  console.log(`Completed at: ${horaFin}`);
});
```

## Analytics Integration

The timing data can be used for various analytics purposes:

1. **User Experience Metrics**:
   - Average time spent on each component
   - Time to complete forms or workflows
   - Identification of bottlenecks in user flows

2. **Performance Monitoring**:
   - Component initialization time
   - Response time to user interactions
   - Overall session duration

3. **User Behavior Analysis**:
   - Patterns of interaction
   - Abandonment points
   - Time between interactions

## Best Practices

1. **Data Storage**: Store these metrics in your analytics system alongside other event data
2. **Time Correlation**: Use the timestamps to correlate component usage with other system events
3. **Performance Baselines**: Establish baseline metrics for expected component usage duration
4. **Anomaly Detection**: Set up alerts for unusually long or short interaction times
5. **Component Optimization**: Use timing data to identify opportunities for component optimization

## Implementation Considerations

- All time calculations handle timezone differences by using local time
- Millisecond precision allows for accurate performance measurements
- The format is human-readable while maintaining precision
- Time tracking has minimal performance impact
