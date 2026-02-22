import "./App.css";
import Child from "./Components/Child.jsx";
import ProductCard from "./Components/productCard.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Login from "./Components/Login/login.jsx";
import { useState } from "react";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  return (
    <>
      {/* <ProductCard
        name="Tamota"
        price={20}
        details={{ unit: "250g", offer_price: 10 }}
      /> */}

      {/* <Child name="Zoro" anime="One Piece" /> <br /> */}
      {/* {greeting(name)} */}

      {/* <div>
        <ProductCard name="Tomata-Hybrid" price={42} originalPrice={52} unit="500 g" image="tomato.jpg" discount={20} inStock={true} />
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
        <ProtectedRoute>

          <Route path="/dashboard" element={<Dashboard />} />
        </ProtectedRoute>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
