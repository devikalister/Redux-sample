import { ProductsService } from "../../services/products.service";
import {
  SET_PRODUCTS,
  SET_PRODUCT_DETAIL,
  REMOVE_SELECTED_PRODUCT,
} from "./types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await ProductsService.getAllProducts();
    dispatch({
      type: SET_PRODUCTS,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetailsById = (id) => async (dispatch) => {
  try {
    const res = await ProductsService.getProductDetailById(id);

    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
