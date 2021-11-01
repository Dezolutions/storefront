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