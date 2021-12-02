import * as types from "./actionType";

const initialState = {
  products: [],
  product: {},
  loading: true,
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducers;
