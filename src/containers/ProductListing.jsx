import { useDispatch, useSelector } from "react-redux"
import ProductComponent from "./ProductComponent";
import axios from "axios"
import { useEffect } from "react"
import { setProducts } from "../redux/actions/ProductAction";
import Footer from "./Footer";

const ProductListing = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=> state)
    

    const fetchProducts = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log(err,"error");
        })
        dispatch(setProducts(response))
        console.log(response, "rrrrrrr");
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(products, "Products");
  return (
    <>
     <h2 style={{marginTop:"9%", textAlign:"center"}}>New e-commerce App Built with React & Redux! 🛒 </h2>
    <div className="ui grid container">
     
       <ProductComponent />
      
    </div>
    
    </>
    
  )
}

export default ProductListing