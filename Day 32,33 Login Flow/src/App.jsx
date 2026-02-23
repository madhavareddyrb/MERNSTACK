import { useState } from "react";
import Login from "./Components/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import WatchListFilter from "./Components/WatchListFilter/WatchListFilter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      <WatchListFilter />
    </>
  );
}

export default App;
