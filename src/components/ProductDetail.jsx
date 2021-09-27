import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getProductDetailsById, removeSelectedProduct} from "../redux/actions/productActions";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {selectedProduct, error} = useSelector(state => {
        return state.product
    });

    useEffect(() => {
        if (id) dispatch(getProductDetailsById(id));
        return () =>{
            dispatch(removeSelectedProduct());
        }
      }, [dispatch,id]);
    
    return (
        error ? <div>{error}</div> : selectedProduct ? <div>
            <Link to="/products">Back To Products</Link>
            <div>{selectedProduct.id}</div>
                <div>{selectedProduct.title}</div>
                <div>{selectedProduct.price}</div>
                <img src= {selectedProduct.image} alt= {selectedProduct.title} />
                <div>{selectedProduct.category}</div>
                <div>{selectedProduct.description}</div>
        </div> : <div>Loading......</div>
    )    
}

export default ProductDetail;

