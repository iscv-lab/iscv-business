/// <reference types="react-scripts" />
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
declare module '*.jpg';
declare module '*.png';
