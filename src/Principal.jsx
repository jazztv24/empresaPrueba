import ProductList from "./ProductList"; 
import ProductListComida from "./ProductListComida";   
import ProductListRopa from "./ProductListRopa";   
import './Principal.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar1 from "./NavBar1";
console.log("TODAS las variables:", import.meta.env);

function Principal() {
  return (
    <div className="principal">
        <div className="header">EMPRESA DE SERvivIOS TARVAR</div>
        <div className="navbar1"><NavBar1 /></div>
        <div className="medio">
            <div className="aside">ESTO ES EL ASIDE</div>
            <div className="section1">
              <Routes>
                <Route path="/" element={<ProductList></ProductList>}></Route>
                <Route path="/comida" element={<ProductListComida></ProductListComida>}></Route>
                <Route path="/ropa" element={<ProductListRopa></ProductListRopa>}></Route>
              </Routes>
            </div>
        </div>
        
        <div className="footer">ESTO ES FOOTER</div>
      
      
    </div>
  );
}
export default Principal;