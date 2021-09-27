import { ProductsService } from "../../services/products.service";
import {
  SET_PRODUCTS,
  SET_PRODUCT_DETAIL,
  REMOVE_SELECTED_PRODUCT,
  SET_ERROR,
} from "./types";

// get all the products list
export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await ProductsService.getAllProducts();
    dispatch(setProducts(response));
  } catch (error) {
    console.log(error);
  }
};

// get particular product details using id
export const getProductDetailsById = (id) => async (dispatch) => {
  try {
    const response = await ProductsService.getProductDetailById(id);
    dispatch(setProductDetail(response));
  } catch (error) {
    console.log(error);
  }
};

// set product details
const setProductDetail = (payload) => {
  return {
    type: SET_PRODUCT_DETAIL,
    payload: payload,
  };
};

// set products list
const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload: payload,
  };
};

// remove selected product when move to products page
export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

// set error message if error occurs
export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message,
  };
};
