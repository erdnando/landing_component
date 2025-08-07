# Web Component Input/Output Integration Guide

This guide details how to ensure proper data flow between the web component and its host application.

## Web Component Integration Model

```
Host Application <-----> Web Component <-----> React Component
    ^                          ^                     ^
    |                          |                     |
Input/Output via:         Transforms:            Uses:
- Attributes             - Attributes to Props   - Props for rendering
- Properties             - Props to Events       - Context for state
- Events                 - Events to Methods     - Callbacks for actions
```

## Input Parameter Flow

### 1. Define Input Contract

The web component should clearly define what inputs it accepts and how they affect the component:

```typescript
// In LandingWebComponent.ts
static get observedAttributes() {
  return [
    'session-id',      // Unique session identifier
    'user-id',         // User identifier
    'config',          // Configuration options (JSON string)
    'flow-context',    // Flow context data (JSON string)
    'step-data'        // Current step data (JSON string)
  ];
}
```

### 2. Implement Property Setters for Complex Data

For complex objects that can't be passed as attributes:

```typescript
// In LandingWebComponent.ts
set inputDataValue(data: any) {
  this.inputData = data;
  this.render();
}

set flowContextData(data: any) {
  this.flowContext = data;
  this.render();
}
```

### 3. Pass Data to React Component

Make sure all input parameters are passed to the React component:

```typescript
// In LandingWebComponent.ts
private render() {
  const props = {
    sessionId: this.sessionId,
    userId: this.userId,
    flowContext: this.flowContext,
    config: this.config,
    inputData: this.inputData,
    // Callbacks...
  };
  
  this.root.render(React.createElement(App, props));
}
```

### 4. Use Input Data in React Component

Modify App.tsx to use the received props:

```tsx
// In App.tsx
interface AppProps {
  sessionId: string | null;
  userId: string | null;
  flowContext: any;
  config: any;
  inputData: any;
  onNext: (data: any) => void;
  onPrevious: (data: any) => void;
  onDataChange: (data: any) => void;
  onError: (error: string, code?: string, recoverable?: boolean) => void;
}

const App: React.FC<AppProps> = (props) => {
  // Pass props to context provider
  return (
    <AppProvider initialData={props.inputData} 
                 flowContext={props.flowContext}
                 config={props.config}>
      <AppContent 
        onNext={props.onNext}
        onPrevious={props.onPrevious}
        onDataChange={props.onDataChange}
        onError={props.onError}
      />
    </AppProvider>
  );
};
```

## Output Parameter Flow

### 1. Define Event Types

Create clear event types that the host application can listen for:

```typescript
// Types for output events
interface OutputDataEvent extends CustomEvent {
  detail: {
    stepCompleted: boolean;
    data: any;
    nextAction: 'continue' | 'save' | 'exit';
  };
}

interface NavigationEvent extends CustomEvent {
  detail: {
    direction: 'previous' | 'next' | 'cancel';
  };
}
```

### 2. Implement Event Dispatchers in Web Component

```typescript
// In LandingWebComponent.ts
private dispatchOutputData(data: any, completed = true) {
  this.dispatchEvent(new CustomEvent('output-data', {
    detail: {
      stepCompleted: completed,
      data: data,
      nextAction: 'continue'
    },
    bubbles: true,
    composed: true  // Important for crossing shadow DOM boundary
  }));
}

private dispatchNavigationRequest(direction: 'previous' | 'next' | 'cancel') {
  this.dispatchEvent(new CustomEvent('request-navigation', {
    detail: { direction },
    bubbles: true,
    composed: true
  }));
}
```

### 3. Connect React Component Actions to Events

Modify the React components to use the callbacks provided by the web component:

```tsx
// In AppContent.tsx
interface AppContentProps {
  onNext: (data: any) => void;
  onPrevious: (data: any) => void;
  onDataChange: (data: any) => void;
  onError: (error: string, code?: string, recoverable?: boolean) => void;
}

const AppContent: React.FC<AppContentProps> = (props) => {
  const { currentView, setCurrentView, formData } = useAppContext();

  const goToRequirements = () => {
    setCurrentView('requirements');
    // Report data change
    props.onDataChange({ currentView: 'requirements' });
  };

  const backToPresentation = () => {
    setCurrentView('presentation');
    // Request previous navigation
    props.onPrevious({ currentView: 'presentation' });
  };

  const handleContinue = () => {
    // Send output data with form values
    props.onNext({
      completed: true,
      formData: formData,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="app">
      {currentView === 'presentation' ? (
        <PresentationView onNext={goToRequirements} />
      ) : (
        <RequirementsView 
          onBack={backToPresentation} 
          onContinue={handleContinue} 
        />
      )}
    </div>
  );
};
```

## Testing Input/Output Flow

### Input Testing

1. Set attributes on the web component:
```html
<landing-web-component
  session-id="session123"
  user-id="user456"
  config='{"theme":"light","language":"es"}'
  flow-context='{"currentStep":1,"totalSteps":5}'>
</landing-web-component>
```

2. Set properties programmatically:
```javascript
const component = document.querySelector('landing-web-component');
component.inputDataValue = {
  formPrefill: {
    name: "Juan Pérez",
    email: "juan@example.com"
  }
};
```

### Output Testing

1. Listen for events from the web component:
```javascript
component.addEventListener('output-data', (event) => {
  console.log('Received output data:', event.detail);
  
  // Extract data for flow control
  const { stepCompleted, data, nextAction } = event.detail;
  
  if (stepCompleted && nextAction === 'continue') {
    // Move to next step in flow
    moveToNextStep(data);
  }
});

component.addEventListener('request-navigation', (event) => {
  const { direction } = event.detail;
  
  if (direction === 'previous') {
    // Handle back navigation
    moveToPreviousStep();
  }
});
```

## Common Integration Issues

1. **Event Bubbling**: Make sure `bubbles: true` and `composed: true` are set on all custom events
2. **Complex Data Serialization**: Use property setters for complex objects instead of attributes
3. **Missing Event Handlers**: Ensure all events are properly connected to React component actions
4. **Shadow DOM Boundaries**: Events need `composed: true` to cross shadow DOM boundaries
5. **React Re-rendering**: Ensure React re-renders when new props are received

## Integration Contract Example

```typescript
// Component Contract Definition
export const CONTRACT = {
  inputs: [
    { name: 'session-id', type: 'string', required: true },
    { name: 'user-id', type: 'string', required: true },
    { name: 'config', type: 'object', required: false },
    { name: 'flow-context', type: 'object', required: false },
    { name: 'input-data', type: 'object', required: false }
  ],
  outputs: [
    { name: 'output-data', detail: { stepCompleted: 'boolean', data: 'any', nextAction: 'string' } },
    { name: 'request-navigation', detail: { direction: 'string' } },
    { name: 'data-changed', detail: 'any' },
    { name: 'node-error', detail: { error: 'string', code: 'string', recoverable: 'boolean' } },
    { name: 'component-ready', detail: { componentId: 'string', version: 'string', ready: 'boolean' } }
  ],
  methods: [
    { name: 'inputDataValue', params: ['data'], description: 'Sets input data for the component' },
    { name: 'flowContextData', params: ['data'], description: 'Sets flow context for the component' }
  ]
};
```
