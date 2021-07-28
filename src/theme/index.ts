/* eslint-disable sort-keys */
/* eslint-disable key-spacing */
import { createTheme, responsiveFontSizes } from '@material-ui/core';

export default responsiveFontSizes(createTheme({
  palette: {
    grey: {
      100: '#f9f9f9',
      200: '#f2f2f2',
      300: '#dfdfdf',
      400: '#cccccc',
      50:  '#a6a6a6',
      500: '#808080',
      600: '#737373',
      700: '#606060',
      800: '#4d4d4d',
      900: '#3f3f3f',
    },
    primary: {
      contrastText: '#000',
      dark:  '#894aa1',
      light: '#e2c0ef',
      main:  '#b762d7',
      50:    '#fbf7fd',
      100:   '#f8effb',
      200:   '#edd8f5',
      300:   '#e2c0ef',
      400:   '#cd91e3',
      500:   '#b762d7',
      600:   '#a558c2',
      700:   '#894aa1',
      800:   '#6e3b81',
      900:   '#5a3069',
    },
    secondary: {
      contrastText: '#fff',
      dark:  '#bfbfbf',
      light: '#fff',
      main:  '#e6e6e6',
      50:    '#ffffff',
      100:   '#ffffff',
      200:   '#ffffff',
      300:   '#ffffff',
      400:   '#ffffff',
      500:   '#ffffff',
      600:   '#e6e6e6',
      700:   '#bfbfbf',
      800:   '#999999',
      900:   '#7d7d7d',
    },
  },
  typography: {
    h1: {
      fontSize: 64,
      fontFamily: 'Manrope, Roboto',
      fontWeightRegular: 200,
      lineHeight: 1.4,
    },
    h2: {
      fontSize: 36,
      fontFamily: 'Manrope, Roboto',
      fontWeightRegular: 200,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 24,
      fontFamily: 'Roboto',
      fontWeightRegular: 300,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeightRegular: 500,
      lineHeight: 1.1,
    },
    button: {
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeightRegular: 300,
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: 'Roboto',
      fontWeightRegular: 300,
      lineHeight: 1,
    },
    body1: {
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeightRegular: 300,
      lineHeight: 1.2,
    },
    caption: {
      fontSize: 14,
      fontFamily: 'Manrope, Roboto',
      fontWeightRegular: 400,
    },
  },
  transitions: {
    duration: {
      shortest: 0.2,
      shorter: 0.4,
      short: 0.6,
      standard: 0.8,
    },
  },
}));
