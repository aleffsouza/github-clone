import gql from "graphql-tag";

export default gql`
  fragment commonRepoFields on Repository {
    name
    forkCount
    updatedAt
    description
    url
    stargazers {
      totalCount
    }
    licenseInfo {
      name
    }
    primaryLanguage {
      name
      color
    }
  }

  query Organization($login: String!) {
    organization(login: $login) {
      name
      location
      url
      avatarUrl
      pinnedRepositories(first: 3) {
        nodes {
          ...commonRepoFields
        }
      }
      repositories(first: 10) {
        nodes {
          ...commonRepoFields
          updatedAt
          parent {
            url
          }
        }
      }
    }
  }
`;
