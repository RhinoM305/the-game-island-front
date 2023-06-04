import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
query Products($first: Int, $after: String, $before: String, $last: Int,  $Query: QueryInput, $pageNum: Int, $reverse: Boolean){
  getProducts(first: $first, after: $after, before: $before, last: $last, Query: $Query, pageNum: $pageNum, reverse: $reverse){
    products {
      title
      description
      vendor
      price
      image
      
    }
    pageInfo {
      numberOfProducts
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`;


