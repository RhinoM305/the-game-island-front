import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
query Products($first: Int, $after: String, $before: String, $last: Int,  $Query: QueryInput, $reverse: Boolean){
  getProducts(first: $first, after: $after, before: $before, last: $last, Query: $Query, reverse: $reverse){
    products {
      id
      title
      description
      vendor
      price
      images
      
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
`;

export const LOAD_PRODUCT  = gql`
query getProduct($id: String!) {
  getProduct(id: $id) {
    id
    productId
    description
    title
    tags
    vendor
    console
    images
    price
  }
}
`

export const LOAD_COLLECTIONBYHANDLE = gql`
  query getCollectionByHandle($handle: String, $after: String, $before: String, $first: Int, $last: Int, $sortKey: String, $reverse: Boolean) {
    getCollectionByHandle(handle:$handle, after:$after, before:$before, first:$first, last:$last, sortKey:$sortKey, reverse:$reverse){
      id
      title
      productsCount
      products {
        id
        productId
        title
        console
        images
        vendor
        price
        description
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
  }
}
`;

export const LOAD_CUSTOMER = gql`
query loginUser($input: String!) {
  loginUser(input: $input) {
    id
    email
    firstName
    lastName
    address {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      province
      zip
      id
    }
    orders {
      billingAddress {
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        province
        zip
        id
      }
      currentSubtotalPrice
      currentTotalPrice
      currentTotalTax
      edited
      financialStatus
      fulfillmentStatus
      orderNumber
      name
      processedAt
      totalShippingPrice
      lineItems {
        currentQuantity
        originalTotalPrice
        title
      }
    }
  }
}
`


