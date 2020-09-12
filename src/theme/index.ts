import { DefaultTheme } from 'styled-components'; // eslint-disable-line

import colors from './colors';
import fonts from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fonts: { [key in keyof typeof fonts]: string };
  }
}

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
