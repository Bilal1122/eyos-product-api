import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    gtin: String
    productName: String
    targetMarkets: [String]
  }

  type Query {
    products: [Product]
  }
`;

export default typeDefs;