import { Navigate,useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate()
  function removeLocalStorage() {
    localStorage.removeItem("userId");
    localStorage.removeItem("enctoken");
    navigate("/login")
    // return Navigate(to = "/login");
  }

  return (
    <>
    <h3>Home Page</h3>
      <button type="submit" onClick={removeLocalStorage}>LogOut</button>
    </>
  );
}
