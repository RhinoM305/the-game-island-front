import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    getProducts(first: 5) {
      id
      title
      description
      image
      price
    }
  }
`;
