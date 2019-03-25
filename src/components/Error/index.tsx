import * as React from "react";
import Section from "../Section";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  padding: 20px;
`;

const Error = () => (
  <ErrorWrapper>
    <Section title="Something wrong happened :(">
      <p>Try to refresh the page or Contact support</p>
    </Section>
  </ErrorWrapper>
);

export default Error;
