import * as React from "react";
import styled from "styled-components";
import CompanyDetails from "../../components/CompanyDetails";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Repository from "../../components/Repository";
import Error from "../../components/Error";
import RepositoryList from "../../components/RepositoryList";
import DataProvider, { AppContext } from "../DataProvider";
import { formatDate } from "../../utils";
import AppWrapper from "./AppWrapper";

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  padding: 0 20px 20px 20px;
`;

function _renderPinnedRepositoriesSection(
  data: any
): React.ReactNode | undefined {
  const pinnedRepositories = data.pinnedRepositories.nodes;
  if (pinnedRepositories.length === 0) {
    return undefined;
  }

  return (
    <Section title="Pinned repositories">
      <CardGroup>
        {pinnedRepositories.map((repo: any) => (
          <Card key={repo.name}>
            <Repository
              title={repo.name}
              url={repo.url}
              description={repo.description}
              forkCount={repo.forkCount}
              starCount={repo.stargazers && repo.stargazers.totalCount}
              progLanguage={repo.primaryLanguage && repo.primaryLanguage.name}
              color={repo.primaryLanguage && repo.primaryLanguage.color}
            />
          </Card>
        ))}
      </CardGroup>
    </Section>
  );
}

function _renderRepositoriesSection(data: any): React.ReactNode | undefined {
  const repositories = data.repositories.nodes;
  if (repositories.length === 0) {
    return undefined;
  }

  const repos = repositories.map((repo: any) => ({
    title: repo.name,
    url: repo.url,
    description: repo.description,
    updatedAt: formatDate(repo.updatedAt),
    forkCount: repo.forkCount,
    starCount: repo.stargazers && repo.stargazers.totalCount,
    license: repo.licenseInfo && repo.licenseInfo.name,
    progLanguage: repo.primaryLanguage && repo.primaryLanguage.name,
    color: repo.primaryLanguage && repo.primaryLanguage.color,
    forkedFrom: repo.parent && repo.parent.url
  }));

  return (
    <Section title="Repositories">
      <RepositoryList data={repos} />
    </Section>
  );
}

function _renderPageContent(ctx: any) {
  const { loading, error, data } = ctx;

  if (error) {
    return <Error />;
  } else if (loading) {
    return undefined;
  }

  return (
    <>
      <CompanyDetails
        logo={data.avatarUrl}
        name={data.name}
        location={data.location}
        url={data.url}
      />
      {_renderPinnedRepositoriesSection(data)}
      {_renderRepositoriesSection(data)}
    </>
  );
}

const App = (): React.ReactElement => (
  <DataProvider>
    <AppWrapper>
      <div className="page-grid">
        <div />
        <div className="page-container">
          <AppContext.Consumer>{_renderPageContent}</AppContext.Consumer>
        </div>
        <div />
      </div>
    </AppWrapper>
  </DataProvider>
);

export default App;
