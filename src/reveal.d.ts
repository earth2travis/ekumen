declare module "reveal.js" {
  interface RevealConfig {
    slideNumber?: boolean;
    hash?: boolean;
    transition?: string;
    backgroundTransition?: string;
  }

  export default class Reveal {
    constructor(element?: HTMLElement, config?: RevealConfig);
    initialize(config?: RevealConfig): Promise<void>;
    destroy(): void;
  }
}

