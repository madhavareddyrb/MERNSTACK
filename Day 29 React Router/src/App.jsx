import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Men from "./Components/Men/Men";
import Kids from "./Components/Kids/Kids";
import Women from "./Components/Women/Women";
import Products from "./Components/Products/Products";
import Error from "./Components/Error/Error";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          {/* <Link to="/men">Men</Link> */}
          <Route path="/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail/>} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
