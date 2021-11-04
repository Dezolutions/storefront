const initialState = {
  customer: {
    firstName: '',
    email: '',
    lastName: '',
    phone: '',
    addresses: []
  },
  collectionId: '',
  productHandle: ''
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUTOMER_INFO':
      return {
        ...state,
        customer: action.payload
      }
    case 'SET_COLLECTION_ID':
      return {
        ...state,
        collectionId: action.payload
      }
    case 'SET_PRODUCT_HANDLE':
      return {
        ...state,
        productHandle: action.payload
      }
    default:
      return state;
  }

}

export default reducer