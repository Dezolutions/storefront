const initialState = {
  customer: {
    firstName: '',
    email: '',
    lastName: '',
    phone: '',
    addresses: []
  }
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUTOMER_INFO':
      return {
        ...state,
        customer: action.payload
      }
    default:
      return state;
  }

}

export default reducer