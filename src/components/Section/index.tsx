import * as React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  h2 {
    margin: 20px;
  }
`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => (
  <SectionWrapper>
    <h2>{props.title}</h2>
    {props.children}
  </SectionWrapper>
);

export default Section;
