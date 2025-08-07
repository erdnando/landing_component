import { componentInfo } from './componentInfo';

export class ComponentRegistry {
  static register(elementName: string): void {
    if (typeof customElements.get(elementName) === 'undefined') {
      console.log(`🔄 Registering component: ${elementName}`);
      
      // Registro de eventos para comunicación externa
      const events = componentInfo.contract.events || [];
      console.log(`📢 Available events: ${events.join(', ')}`);
    } else {
      console.warn(`⚠️ Component ${elementName} already registered`);
    }
  }
  
  static getInfo() {
    return componentInfo;
  }
}
