import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './graphqlTypes.js';

const products = [
  {
    name: 'Coke 500ml',
    catgeory: 'Coke',
  },
  {
    name: 'Dasani',
    catgeory: 'Water',
  },
];

const resolvers = {
  Query: {
    products: () => products
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
