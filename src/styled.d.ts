import 'styled-components';
import { themeType } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends themeType{
  }
}
