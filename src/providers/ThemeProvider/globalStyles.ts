import { createGlobalStyle } from "styled-components";
import normalize from "./normalize.css?inline";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${({ theme }) => theme.fontFamilies.openSans};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyles };
