import axios from "axios";
import * as types from "./actionType";

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

export const loadProducts = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getProducts(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
