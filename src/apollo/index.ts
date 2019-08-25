import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_GRAPHQL_LINK,
  request: async (operation) => {
    console.log(operation);
  },
  version: '1.0.0-1'
});
