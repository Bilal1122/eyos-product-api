import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    gtin: String
    productName: String
    targetMarkets: [String]
    languages: [Language]
    categories: [Category]
    manufacturerName: String
    brandName: String
    subbrandName: String
    productPackSize: String
    productPackType: String
    metricValue: Float
    metricUnit: String
    isMultiPack: Boolean
    groupingSets: [GroupingSet]
    images: [Image]
  }

  type Language {
    language: String
    code: String
  }

  type Category {
    level: Int
    code: String
    description: String
  }

  type GroupingSet {
    name: String
    attributes: Attributes
  }

  type Attributes {
    productType: String
    marketSegment: String
    volumeInLiter: String
    package: String
    organic: String
  }

  type Image {
    mimeType: String
    measurementUnit: String
    url: String
  }

  type Query {
    products: [Product]
  }
`;

export default typeDefs;
