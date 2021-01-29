declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    error?: PaletteColorOptions;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    themeName?: string;
    palette?: PaletteOptions;
  }
}
