import { useState } from 'react'
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage/LoginPage.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
