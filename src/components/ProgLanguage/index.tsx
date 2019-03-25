import * as React from "react";
import Flex from "../Flex";
import Circle from "./Circle";
import styled from "styled-components";

const ProgLanguageWrapper = styled(Flex)`
  align-items: center;
`;

const ProgLanguage = (props: { color: string; text: string }) => (
  <ProgLanguageWrapper>
    <Circle diameter="12px" colorHex={props.color} />
    <p className="mg-left-10">{props.text}</p>
  </ProgLanguageWrapper>
);

export default ProgLanguage;
