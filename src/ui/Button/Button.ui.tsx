import styled from "styled-components";

const buttonVariant = {
  gradient: "gradient",
  regular: "regular",
  darkModeOutlined: "dark-mode-outlined",
  darkModeContained: "dark-mode-contained",
};

const buttonFontSize = {
  gradient: "small",
  regular: "regular",
  big: "big",
};

const Button = styled.button<{
  variant?: "gradient" | "regular" | "dark-mode-outlined" | "dark-mode-contained";
  fontSize?: "small" | "regular" | "big";
  fullWidth?: boolean;
}>`
  cursor: pointer;
  border: none;
  padding: 14px 10px;
  text-align: center;
  border-radius: 16px;
  width: ${({ fullWidth = false }) => (fullWidth ? "100%" : "auto")};
  transition: all 0.15s ease-in-out;

  color: ${({ theme, variant = buttonVariant.regular }) => {
    switch (variant) {
      case buttonVariant.gradient:
        return theme.colors.typographyWhite;
      case buttonVariant.regular:
        return theme.colors.black;
      case buttonVariant.darkModeOutlined:
        return theme.colors.typographyWhite;
      case buttonVariant.darkModeContained:
        return theme.colors.typographyViolet;
    }
  }};

  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme, fontSize = buttonFontSize.regular }) => {
    switch (fontSize) {
      case buttonFontSize.gradient:
        return theme.fontSizes.sm;
      case buttonFontSize.regular:
        return theme.fontSizes.md;
      case buttonFontSize.big:
        return theme.fontSizes.lg;
    }
  }};

  background: ${({ theme, variant = buttonVariant.regular }) => {
    switch (variant) {
      case buttonVariant.gradient:
        return theme.colors.backgroundBlueGradient;
      case buttonVariant.regular:
        return theme.colors.backgroundLightGrey;
      case buttonVariant.darkModeOutlined:
        return "transparent";
      case buttonVariant.darkModeContained:
        return theme.colors.backgroundWhite;
    }
  }};
  border: ${({ theme, variant = buttonVariant.regular }) => {
    switch (variant) {
      case buttonVariant.regular:
        return `1px solid ${theme.colors.borderLightGrey}`;
      case buttonVariant.darkModeOutlined:
        return `1px solid ${theme.colors.backgroundWhite}`;
      default:
        return "none";
    }
  }};
  box-shadow: ${({ theme, variant = buttonVariant.regular }) => {
    switch (variant) {
      case buttonVariant.gradient:
        return `0px 4px 4px ${theme.colors.shadowMediumGrey}`;
      case buttonVariant.regular:
        return `2px 2px 6px ${theme.colors.shadowLightGrey}`;
      default:
        return "none";
    }
  }};

  &:hover {
    background: ${({ theme, variant = buttonVariant.regular }) => {
      switch (variant) {
        case buttonVariant.gradient:
          return theme.colors.backgroundBlueGradient;
        case buttonVariant.regular:
          return theme.colors.backgroundMediumGrey;
        case buttonVariant.darkModeOutlined:
          return "transparent";
        case buttonVariant.darkModeContained:
          return theme.colors.backgroundWhite;
      }
    }};
    transform: translateY(-1px);
  }
  &:disabled {
    transform: none;
    cursor: not-allowed;
    background: ${({ theme, variant = buttonVariant.regular }) => {
      switch (variant) {
        case buttonVariant.gradient:
          return theme.colors.backgroundBlueGradient;
        case buttonVariant.regular:
          return theme.colors.backgroundLightGrey;
        case buttonVariant.darkModeOutlined:
          return "transparent";
        case buttonVariant.darkModeContained:
          return theme.colors.backgroundWhite;
      }
    }};
  }
`;

export default Button;
