import styled from "styled-components";

const Input = styled.input<{ fullWidth?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.borderMeiumGrey};
  border-radius: 20px;
  padding: 9px 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.typographyDarkGray};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background-color: transparent;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderLightBlue} !important;
  }
`;

export { Input };
