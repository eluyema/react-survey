import { ThemeColors } from "./colors";
import { ThemeFontFamilies } from "./fontFamilies";
import { ThemeFontSizes } from "./fontSizes";
import { ThemeFontWeight } from "./fontWeight";
import { ThemeScreens } from "./screens";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    fontSizes: ThemeFontSizes;
    fontFamilies: ThemeFontFamilies;
    screens: ThemeScreens;
    fontWeight: ThemeFontWeight;
  }
}
