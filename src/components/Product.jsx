import { Link } from "react-router-dom"
 const Product = ({product}) => {
        return (
            <div>
                <div>{product.id}</div>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <Link to={`/products/${product.id}`}>
                <img src= {product.image} alt= {product.title} />
                </Link>
                <div>{product.category}</div>
            </div>
        )
}

export default Product;
