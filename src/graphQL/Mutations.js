import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_ACCOUNT = gql `
mutation createCustomer($input: CustomerCreateInput!) {
    createCustomer(input: $input) {
        customer {
            id
            email
            firstName
            lastName
        }
        customerUserErrors {
            code
            field
            message
          }
    }
}
`

export const CREATE_CUSTOMER_TOKEN = gql `
mutation getCustomerToken($input: UserLoginInput!) {
    getCustomerToken(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      loggedUser {
        accessToken
        expiresIn
      }
    }
  }
`

export const CREATE_CUSTOMER_ADDRESS = gql `
mutation customerAddressCreate($address: CustomerAddressCreateInput!, $customerAccessToken: String!) {
  createCustomerAddress(address: $address, customerAccessToken: $customerAccessToken) {
    customerUserErrors {
      code
      field
      message
    }
    customerAddress {
      address1
      address2
      city
      company
      firstName
      lastName
      phone
      province
      zip
      id

    }
  }
}`

export const UPDATE_CUSTOMER_ADDRESS = gql `
mutation updateCustomerAddress($address: CustomerAddressCreateInput!, $customerAccessToken: String!, $id: String!) {
  updateCustomerAddress(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
    customerUserErrors {
      code
      field
      message
    }
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
  }
}`

export const CREATE_CUSTOMER_CART = gql `
mutation createCustomerCart($buyerIdentity: buyerIdentityInput, $lines: [cartLineInput], $note: String) {
  createCustomerCart(buyerIdentity: $buyerIdentity, lines: $lines, note: $note) {
    userErrors {
      code
      field
      message
    }
    checkoutUrl
  }
}
`