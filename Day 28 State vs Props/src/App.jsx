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

 
 

  return (
    <>
      <Routes>

  <Route path="" element={<Login/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>

  
    </>
  );
}

export default App;
