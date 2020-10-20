import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      lightGrey: string;
      fontMain: string;
      grey: string;
      borderMain: string;
      deepBlue: string;
      orange: string;
      green: string;
    };
    fonts: {
      main: string;
      arial: string;
      montserrat: string;
    };
    opacity: {
      link: number;
    };
    fontWeights: {
      normal: number;
      semibold: number;
      bold: number;
    };
  }

  export interface DeviceSizes {
    phone: {
      small: string;
      large: string;
    };
    tablet: string;
    laptop: string;
    desktop: string;
  }
}
