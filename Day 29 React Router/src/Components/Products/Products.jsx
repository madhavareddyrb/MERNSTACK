import { use } from "react";
import { useParams, useNavigate,BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

function Products() {

  return (
    <>
      <h2>From Products </h2>
      <Link to="/products/product/1">Product 1</Link>
      <Link to="/products/product/2">Product 2</Link>
      <Link to="/products/product/3">Product 3</Link>
      <Link to="/products/product/4">Product 4</Link>
      <Link to="/products/product/5">Product 5</Link>
    </>
  );
}

export default Products;
