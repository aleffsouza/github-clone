import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  height: 150px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;

  &:hover {
    background: #f8f8f8;
    cursor: pointer;
  }
`;

const Card = (props: { children: React.ReactChild }) => (
  <CardWrapper>{props.children}</CardWrapper>
);

export default Card;
