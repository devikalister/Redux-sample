import { combineReducers } from "redux";
import ProductReducer from "./products.reducer";

export default combineReducers({
  product : ProductReducer,
});