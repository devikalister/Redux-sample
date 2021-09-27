import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions/productActions";

const ProductList = ({ products, getAllProducts }) => {
  useEffect(() => {
    if (!products.length) getAllProducts();
  }, [getAllProducts, products.length]);

  return (
    <div>
      Products List:
      {products.length ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div>Retrieving Products.......</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

const maptDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, maptDispatchToProps)(ProductList);
