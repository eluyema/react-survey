import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/theme/theme";
import { GlobalStyles } from "./globalStyles";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
