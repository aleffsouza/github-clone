import * as React from "react";
import Flex from "../Flex";
import styled from "styled-components";

interface IconProps {
  src: string;
  children?: React.ReactChild;
}

const IconWrapper = styled(Flex)`
  img {
    margin-right: 10px;
  }
`;

const Icon = (props: IconProps) => (
  <IconWrapper>
    <img src={props.src} />
    {props.children}
  </IconWrapper>
);

export default Icon;
