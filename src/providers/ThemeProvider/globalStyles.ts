import { createGlobalStyle } from "styled-components";
import normalize from "./normalize.css?inline";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${({ theme }) => theme.fontFamilies.openSans};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;;
  }
`;

export { GlobalStyles };
