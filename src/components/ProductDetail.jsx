import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getProductDetailsById, removeSelectedProduct} from "../redux/actions/productActions";
import { useEffect } from "react";
import {Link} from "react-router-dom";

function ProductDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector(state => {
        return state.product.selectedProduct
    });
    console.log(data, "data***");

    useEffect(() => {
        if (id) dispatch(getProductDetailsById(id));
        return () =>{
            dispatch(removeSelectedProduct());
        }
      }, [dispatch,id]);

    
    return (
        data ? <div>
            <Link to="/products">Back To Products</Link>
            <div>{data.id}</div>
                <div>{data.title}</div>
                <div>{data.price}</div>
                <img src= {data.image} alt= {data.title} />
                <div>{data.category}</div>
                <div>{data.description}</div>
        </div> : <div>Loading......</div>
    )    
}

export default ProductDetail;

