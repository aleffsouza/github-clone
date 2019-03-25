import * as React from "react";
import styled from "styled-components";
import Link from "../Link";
import Icon from "../Icon";
import RepositoryWrapper from "./RepositoryWrapper";
import Flex from "../Flex";
import ProgLanguage from "../ProgLanguage";
import forkIcon from "../../assets/git-branch.svg";
import starIcon from "../../assets/star.svg";
import licenseIcon from "../../assets/law.svg";

export interface RepositoryProps {
  title: string;
  description: string;
  url: string;
  updatedAt?: string;
  full?: boolean;
  forkedFrom?: string;
  progLanguage?: string;
  color?: string;
  starCount?: number;
  forkCount?: number;
  license?: string;
}

const Header = (props: RepositoryProps) => (
  <>
    <h3>{props.title}</h3>
    {props.full && props.forkedFrom ? (
      <p className="fork-from-info">
        Forked from <Link href={props.forkedFrom}>{props.forkedFrom}</Link>
      </p>
    ) : (
      undefined
    )}
  </>
);

const RepoFooterItemWrapper = styled.div``;

const RepositoryFooterWrapper = styled(Flex)`
  p {
    font-size: 12px;
    color: #666;
  }

  ${RepoFooterItemWrapper} {
    margin-left: 20px;
  }

  ${RepoFooterItemWrapper}:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: space-between;

    ${RepoFooterItemWrapper} {
      margin: 0;
    }
  }
`;

interface RepoFooterItemProps {
  src?: string;
  text: string | number;
  color?: string;
}

const RepoFooterItem = (props: RepoFooterItemProps) => {
  const textElem = <p>{props.text}</p>;
  let content = textElem;
  if (props.src) {
    content = <Icon src={props.src}>{content}</Icon>;
  } else if (props.color && typeof props.text === "string") {
    content = <ProgLanguage color={props.color} text={props.text} />;
  }

  return <RepoFooterItemWrapper {...props}>{content}</RepoFooterItemWrapper>;
};

function renderRepoFooterItem(props: RepoFooterItemProps) {
  if (!props.text || props.text === 0) {
    return undefined;
  }
  return <RepoFooterItem {...props} />;
}

const Repository = (props: RepositoryProps) => {
  return (
    <RepositoryWrapper
      full={props.full}
      onClick={e => (window.location.href = props.url)}
    >
      <div>
        <Header {...props} />
        <p className="ellipsis mg-top-10">{props.description}</p>
      </div>
      <RepositoryFooterWrapper className="mg-top-10">
        {renderRepoFooterItem({ text: props.progLanguage, color: props.color })}
        {renderRepoFooterItem({ src: starIcon, text: props.starCount })}
        {renderRepoFooterItem({ src: forkIcon, text: props.forkCount })}
        {props.full ? (
          <>
            {renderRepoFooterItem({ src: licenseIcon, text: props.license })}
            {renderRepoFooterItem({ text: `Updated on ${props.updatedAt}` })}
          </>
        ) : (
          undefined
        )}
      </RepositoryFooterWrapper>
    </RepositoryWrapper>
  );
};

export default Repository;
