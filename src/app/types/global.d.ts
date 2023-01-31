declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export default classNames;
}

declare module '*.svg' {
  import * as React from 'react';
  // ReactComponent
  export const SVG: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;

  // const src: string;
  export default SVG;
}

// eslint-disable-next-line no-underscore-dangle
declare const __IS__DEV__: boolean;
