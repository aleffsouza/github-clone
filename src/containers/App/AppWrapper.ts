import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;

  .page-grid {
    display: grid;
    grid-template-columns: 1fr 1120px 1fr;
    height: 100%;
  }

  .page-container {
    height: fit-content;
    background: white;
    margin: 40px 0;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(32, 33, 36, 0.28);
  }

  @media screen and (max-width: 1120px) {
    .page-grid {
      display: block;
    }

    .page-container {
      margin: 0;
      border-radius: 0;
      box-shadow: 0;
    }
  }
`;

export default AppWrapper;
