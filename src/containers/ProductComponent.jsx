import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products, "productData");


  return (
    <>
    
      {products.map((item) => (
        
        <div className="four wide column" key={item.id} style={{marginTop:"9%"}}>
            <Link to={`/product/${item.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={item.image} alt={item.title} style={{height:"305px", width:"260px"}}/>
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div className="meta price">${item.price}</div>
                <div className="meta">{item.category}</div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
