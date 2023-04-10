import React from "react";
import {
  SendResultPolicyDescription,
  SendResultPolicyDisclaimer,
  SendResultPolicyLink,
} from "./SendResultPolicy.styles";

const SendResultPolicy: React.FC = () => {
  return (
    <>
      <SendResultPolicyDisclaimer>
        *Nebula does not share any personal information. We&apos;ll email you a copy of your program
        for convenient access.
      </SendResultPolicyDisclaimer>
      <SendResultPolicyDescription>
        By continuing I agree with{" "}
        <SendResultPolicyLink href="http://google.com/" target="_blank" rel="noreferrer">
          Privacy policy
        </SendResultPolicyLink>{" "}
        and{" "}
        <SendResultPolicyLink href="http://google.com/" target="_blank" rel="noreferrer">
          Terms of use
        </SendResultPolicyLink>
        .
      </SendResultPolicyDescription>
    </>
  );
};

export default SendResultPolicy;
