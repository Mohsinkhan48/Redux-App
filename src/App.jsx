import Header from "./containers/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Footer from "./containers/Footer";

function App() {

  return (
    <>
    <div className="App">
      <Router>
      <Header /> <br /> 
      <Routes>
        <Route path="/" Component={ProductListing}/>
        <Route path="/product/:productId" Component={ProductDetail}/>
        <Route> 404 Not Found!</Route>
      </Routes>
      <Footer />
      </Router>
    
    </div>
    </>
  )
}

export default App
