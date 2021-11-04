import { fetchData } from "../functions/requests"
import { GET_CUSTOMER_DATA } from "../graphql/queries"
import { CREATE_CUSTOMER_TOKEN } from "../graphql/mutations"

export const onSubmitForm = (email, password) => (dispatch) => {
  try {
    fetchData(CREATE_CUSTOMER_TOKEN,{
      input: {
        "email": email,
        "password": password
      },
    })
    .then(({ data: { customerAccessTokenCreate: { customerAccessToken: { accessToken }}}}) => dispatch(getCustomerInfo(accessToken)))
  } catch (error) {
    console.log(error)
  }
}

export const getCustomerInfo = (customerToken) => (dispatch) => {
  try {
    fetchData(GET_CUSTOMER_DATA,{ "customerAccessToken": customerToken })
    .then(({ data: { customer } }) => dispatch(setCustomer(customer)))
  } catch (error) {
    console.log(error)
  }
}

export const setCustomer = (customer) => ({
  type: 'SET_CUTOMER_INFO',
  payload: customer
})

export const setCollectionId = (id) => ({
  type: 'SET_COLLECTION_ID',
  payload: id
})

export const setProductHandle = (handle) => ({
  type: 'SET_PRODUCT_HANDLE',
  payload: handle
})