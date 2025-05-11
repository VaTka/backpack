import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & ModelViewerAttributes, HTMLElement>;
    }
  }
}

interface ModelViewerAttributes {
  src?: string;
  alt?: string;
  ar?: boolean;
  autoRotate?: boolean;
  cameraControls?: boolean;
  poster?: string;
  shadowIntensity?: number;
  [key: string]: any; // allows additional custom attributes
}