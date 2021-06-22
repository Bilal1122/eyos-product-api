import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './graphqlTypes.js';
import products from './data/master.js';
import tokopediaProducts from './data/tokopedia.js';

const resolvers = {
  Query: {
    products: () => products
  },
  Mutation: {
    createProducts: async (_, { input: { storeId, partnerId } }) => {
      return { 
        data: { 
          success: true,
          message: "Product uploaded successfully to TokoPedia",
          storeId,
          partnerId,
          addedProductCount: 2,
          products: tokopediaProducts 
        }
      }
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
