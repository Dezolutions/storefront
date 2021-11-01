export const CREATE_CUSTOMER_TOKEN = `
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerUserErrors {
      code
      field
      message
    }
    customerAccessToken {
      accessToken
      expiresAt
    }
  }
}
`