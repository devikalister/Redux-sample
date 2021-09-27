import { createStore } from "redux";
import rootReducer from "./reducer";
import middleware from "./middleware";

const defaultState = {
  product: {
    products: [],
    selectedProduct: null,
  },
};
const store = createStore(rootReducer, defaultState, middleware);
console.log(store, "store**");
export default store;
