import styled from "styled-components";

const SendResultPolicyDisclaimer = styled.p`
  max-width: 300px;
  margin: 0 auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 130%;

  margin-top: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.typographyMediumBlack};
`;

const SendResultPolicyDescription = styled(SendResultPolicyDisclaimer)`
  max-width: 214px;

  margin-top: 20px;
  color: ${({ theme }) => theme.colors.typographyLightBlack};

  @media screen and (max-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 40px;
  }
`;

const SendResultPolicyLink = styled.a`
  color: ${({ theme }) => theme.colors.link};

  &:visited {
    color: ${({ theme }) => theme.colors.linkVisited};
  }

  &:active {
    color: ${({ theme }) => theme.colors.linkActive};
  }
`;

export { SendResultPolicyDisclaimer, SendResultPolicyDescription, SendResultPolicyLink };
