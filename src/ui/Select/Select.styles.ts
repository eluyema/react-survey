import styled from "styled-components";

const SelectComponent = styled.select<{ opened: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.borderMeiumGrey};
  border-radius: 20px;
  padding: 9px 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.typographyDarkGray};
  background-color: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: ${({ opened }) => (opened ? "url('/arrow-up.svg')" : "url('/arrow-down.svg')")};
  background-repeat: no-repeat;
  background-position: right center;
  background-position-x: calc(100% - 20px);
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderLightBlue};
  }

  &:disabled {
    cursor: auto;
  }
`;

const SelectOptionComponent = styled.option``;

export { SelectComponent, SelectOptionComponent };
