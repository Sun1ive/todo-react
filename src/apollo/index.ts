import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: 'https://typeorm-graphql-demo.herokuapp.com/',
  request: async (operation) => {
    console.log(operation);
  },
  version: '1.0.0-1'
});
