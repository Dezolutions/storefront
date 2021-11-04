export const GET_CUSTOMER_DATA = `
query test($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    firstName 
    email
    lastName 
    phone 
    addresses(first: 1) {
      edges {
        node {
          address1 
          address2
          city
          country
        }
      }
    }
  }
}
`
export const GET_SHOP_DATA = `
  query getShop {
    shop {
      name
      description 
      shipsToCountries 
    }
  }
`

export const GET_COLLECTIONS = `
  query getCollections {
    collections(first:100) {
      edges{
        node{
          id
          title
        }
      }
    }
  }
`
export const GET_COLLECTION = `
  query getCollection($id: ID!) {
    node(id: $id) {
      ... on Collection {
          id
          title
          description 
          handle
      }
  }
  }
`

export const GET_PRODUCTS =  `
  query getProducts {
    products(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_HANDLE = `
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description 
      handle 
    }
  }
`