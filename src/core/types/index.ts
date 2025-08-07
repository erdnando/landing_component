export type ViewType = 'presentation' | 'requirements';

export interface ComponentInfo {
  id: string;
  name: string;
  version: string;
  tagName: string;
  description: string;
  category: string;
  contract: {
    inputs: string[];
    outputs: string[];
    events: string[];
  };
  provider: {
    name: string;
    version: string;
    contact: string;
  };
}
