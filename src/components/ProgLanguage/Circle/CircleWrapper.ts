import styled from "styled-components";

export interface CircleProps {
  diameter: string;
  colorHex: string;
}

const CircleWrapper = styled.div`
  ${(props: CircleProps) => `
    width: ${props.diameter};
    height: ${props.diameter};
    background: ${props.colorHex};
    border-radius: 50%;
  `}
`;

export default CircleWrapper;
