//Images
declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.webp" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    export default ReactComponent;
}

//Locomotive Scroll
declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth: boolean;
    }
  
    class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      destroy(): void;
    }
  
    export default LocomotiveScroll;
  }

