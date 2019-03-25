import styled from "styled-components";
import { FlexColumn } from "../Flex";

const RepositoryWrapper = styled(FlexColumn)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: none;
  justify-content: space-between;
  width: ${(props: { full?: boolean }) => (props.full ? "60%" : "80%")};
  height: 100%;

  p {
    line-height: 1.5em;
  }

  h3 {
    font-weight: 400;
  }

  p,
  h3 {
    color: #24292e;
  }

  .fork-from-info {
    font-size: 12px;
    color: #666;
    margin-top: 3px;
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;

export default RepositoryWrapper;
