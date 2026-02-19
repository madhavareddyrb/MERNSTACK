import ProductDetail from "../ProductDetail/ProductDetail";
import "./Products.css";
import { Link } from "react-router-dom";
import { productsData } from "../ProductDetail/ProductDetail";
 

function Products() {

  // console.log(productsData, "Products Data");
  
  return (
    <>
      <h2>From Products </h2>
      <div className="products-link">

        {productsData.map(function(data,index){
          return (
            <>
              <Link to={`/products/product/${index}`}>{data.name}</Link>
            </>
          );
        })}
      </div>

      
    </>
  );
}

export default Products;
