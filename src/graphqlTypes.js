import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    name: String
    catgeory: String
  }

  type Query {
    products: [Product]
  }
`;

export default typeDefs;