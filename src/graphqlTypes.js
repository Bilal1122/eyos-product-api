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
    products: [Product],
    productsList: [Product]
  }

  input CreateInput {
    storeId: Int
    partnerId: Int
  }

  # tokopedia

  type tokopediaDimension {
    height: Int
    width: Int
    length: Int
  }

  type tokopediaPictures {
    file_path: String
  }

  type tokopediaWholesale {
    min_qty: Int
    price: Int
  }

  type tokopediaPreorder {
    is_active: Boolean
    duration: Int
    time_unit: String
  }

  type tokopediaVideos {
    source: String
    url: String
  }

  type tokopediaObj {
    name: String
    condition: String
    description: String
    sku: String
    price: Int
    status: String
    stock: Int
    min_order: Int
    category_id: Int
    price_currency: String
    weight: Int
    dimension: tokopediaDimension
    custom_product_logistics: [Int]
    annotations: [Int]
    pictures: [tokopediaPictures]
    wholesale: [tokopediaWholesale]
    preorder: tokopediaPreorder
    videos: [tokopediaVideos]
  }

  type PartnerResponseData {
    success: Boolean
    message: String
    storeId: Int
    partnerId: Int
    addedProductCount: Int
    products: [tokopediaObj]
  }

  type PartnerResponse {
    data: PartnerResponseData
  }

  type Mutation {
    createProducts(input: CreateInput): PartnerResponse
  }
`;

export default typeDefs;
