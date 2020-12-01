import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      fadedBlack: string;
      lightGrey: string;
      fontMain: string;
      grey: string;
      borderMain: string;
      deepBlue: string;
      fadedPaleBlue: string;
      orange: string;
      green: string;
      darkOrange: string;
      mediumGrey: string;
      disabled: string;
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
