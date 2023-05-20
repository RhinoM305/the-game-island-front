import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
query Products($first: Int, $after: String, $before: String, $last: Int,  $Query: QueryInput, $pageNum: Int,){
  getProducts(first: $first, after: $after, before: $before, last: $last, Query: $Query, pageNum: $pageNum){
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


