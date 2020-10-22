import {
  createGlobalStyle,
  DefaultTheme,
  DeviceSizes,
} from 'styled-components';

// Make sure to add any new colors to the relevant typings file to provide intellisense.
export const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightGrey: '#f8fafb',
    fontMain: '#454545',
    grey: '#f5f5f5',
    borderMain: '#eaeaea',
    deepBlue: '#004059',
    orange: '#f98e1c',
    green: '#30c825',
  },
  fonts: {
    main: 'Open Sans, sans-serif',
    arial: 'Arial, sans-serif',
    montserrat: 'Montserrat, sans-serif',
  },
  opacity: {
    link: 0.8,
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
};

export const device: DeviceSizes = {
  phone: {
    small: `@media (max-width: 375px)`,
    large: `@media (max-width: 480px)`,
  },
  tablet: `@media (max-width: 768px)`,
  laptop: `@media (max-width: 1024px)`,
  desktop: `@media (min-width: 1280px)`,
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${theme.colors.white};
        font-family: ${theme.fonts.main};
        font-weight: 600;
        font-size: 15px;
        position: relative;
        height: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0
        ;

        ${device.tablet} {
          font-size: 16px;
        }

        ${device.phone.large} {
          font-size: 18px;
        }

        textarea:focus, input:focus{
        outline: none;
        }

    }
`;
