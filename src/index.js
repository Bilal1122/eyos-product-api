import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './graphqlTypes.js';
import products from './data/master.js';

const resolvers = {
  Query: {
    products: () => products
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
