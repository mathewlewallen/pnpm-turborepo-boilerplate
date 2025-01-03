// packages/types/src/global.d.ts
// Global type declarations for image or svg modules, as well as a PageMetaProps interface

// ----- Modules -----
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// ----- Other data types -----
interface PageMetaProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  iconUrl?: string;
  path?: string;
}
