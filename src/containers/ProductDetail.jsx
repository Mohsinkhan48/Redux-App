import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/ProductAction";
import { useEffect } from "react";
import './Loader.css'

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();

  console.log(product, "Selected Product");

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log(err, "Error fetching product details");
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return()=>{
        dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return (
    <div className="ui grid container" style={{ marginTop: "10%", marginBottom:"10%" }}>
      {Object.keys(product).length === 0 ? (
         <div className="loader-container" >
         <div className="ui active centered inline loader"></div>
       </div>
      ) : (
        <div className="ui placeholder segment" >
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
