import { SET_PRODUCTS, SET_PRODUCT_DETAIL , REMOVE_SELECTED_PRODUCT, SET_ERROR} from "../actions/types";

const initialState = {
  products: [],
  selectedProduct: null,
  error: null
};

function ProductReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }

    case SET_PRODUCT_DETAIL: {
      return {
       ...state,
        selectedProduct:payload
      }
    }

    case REMOVE_SELECTED_PRODUCT : {
      return {
        ...state,
        selectedProduct: null
      }
    }

    case SET_ERROR : {
      return {
        ...state,
        error: payload
      }
    }

    default:
      return state;
  }
}

export default ProductReducer;
