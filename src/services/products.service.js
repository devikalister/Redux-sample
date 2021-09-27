import http from "axios";
import { dispatch } from "react";
import { setError } from "../redux/actions/productActions";

const baseUrl = "https://fakestoreapi.com/products";
const errorMsg = "Something Went Wrong....";
export class ProductsService {
  static async getAllProducts() {
    try {
      const response = await http.get(baseUrl);
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(setError(errorMsg));
    }
  }

  static async getProductDetailById(id) {
    try {
      const response = await http.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      dispatch(setError(errorMsg));
    }
  }
}
