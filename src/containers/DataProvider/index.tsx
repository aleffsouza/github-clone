import * as React from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink
} from "apollo-boost";
import { Query, ApolloProvider } from "react-apollo";
import config from "../../_config";
import fetchOrganizationDetails from "../../query/fetchOrganizationDetails";

const { token, organizationLogin, api } = config;

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({
      uri: api
    })
  ),
  cache: new InMemoryCache()
});

export const AppContext = React.createContext({});

class DataProvider extends React.Component<{}, {}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query
          query={fetchOrganizationDetails}
          variables={{ login: organizationLogin }}
        >
          {(res: any) => (
            <AppContext.Provider
              value={{
                loading: res.loading,
                error: res.error,
                data: res.data.organization
              }}
            >
              {this.props.children}
            </AppContext.Provider>
          )}
        </Query>
      </ApolloProvider>
    );
  }
}

export default DataProvider;
