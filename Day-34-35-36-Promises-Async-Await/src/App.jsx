import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RestaurantList from "./Components/RestaurantList/RestaurantList";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PromisesPage from "./Components/PromisesPage/PromisesPage";
import GetMethod from "./Components/GetMethod/GetMethod";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter> */}
      {/* <RestaurantList /> */}
      {/* < PromisesPage/> */}
      {<GetMethod/>}
    </>
  );
}

export default App;
