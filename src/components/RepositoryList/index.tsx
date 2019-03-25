import * as React from "react";
import Repository, { RepositoryProps } from "../Repository";
import styled from "styled-components";

interface RepositoryListProps {
  data: Array<RepositoryProps>;
}

const RepositoryListItem = styled.div`
  height: fit-content;
  border-top: 1px solid #eee;
  padding: 20px;

  &:hover {
    background: #f8f8f8;
    cursor: pointer;
  }
`;

const RepositoryList = (props: RepositoryListProps) => (
  <div>
    {props.data.map(repo => (
      <RepositoryListItem key={repo.title}>
        <Repository full {...repo} />
      </RepositoryListItem>
    ))}
  </div>
);

export default RepositoryList;
