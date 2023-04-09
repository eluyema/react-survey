import { themeColors } from "./colors";
import { themeFontFamilies } from "./fontFamilies";
import { themeFontSizes } from "./fontSizes";
import { DefaultTheme } from "styled-components";
import { themeScreens } from "./screens";
import { themeFontWeight } from "./fontWeight";

const theme: DefaultTheme = {
  colors: themeColors,
  fontSizes: themeFontSizes,
  fontFamilies: themeFontFamilies,
  screens: themeScreens,
  fontWeight: themeFontWeight,
};

export default theme;
