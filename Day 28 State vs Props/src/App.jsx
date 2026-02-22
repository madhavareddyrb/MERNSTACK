import "./App.css";
import Child from "./Components/Child.jsx";
import { useEffect } from "react";
import ProductCard from "./Components/productCard.jsx";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Login from "./Components/Login/login.jsx";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false);
 

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
          <Route path="" element={<Login setIsLoggedin={setIsLoggedin} />} />
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other protected routes as nested <Route> here */}
          </Route>
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedin={isLoggedin}>
                <Dashboard setIsLoggedin={setIsLoggedin} />
              </ProtectedRoute>
            }
          /> */}
          {/* <ProtectedRoutes loginStatus={isLoggedin}> */}
          {/* </ProtectedRoutes> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
