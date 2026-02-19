import { useNavigate, NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  // const navigate = useNavigate();

  // function getMen() {
  //   navigate("/men");
  // }
  // function getWomen() {
  //   navigate("/women");
  // }

  // function getKids() {
  //   navigate("/kids");
  // }

  // function getProducts(){
  //   navigate("/products")
  // }

  return (
    <>
      <h2>Welcome to Myntra</h2>
      <nav className="navbar">
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/men">Men |</NavLink>
        <NavLink to="/women">Women |</NavLink>
        <NavLink to="/kids">Kids |</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </>
  );
}

export default Home;

/* 
Q: Why should we use Link instead of a href in React? 
// Write 3 sentences in your Navbar.jsx file. 
// Use Myntra as your example.
Answer: when we use a href when we click on items add to cart, the full website is going load again which is not good perfomance and we lose all state of added items so when we use Link it only redirects to that route withOut loading full application and items in in cart

// Q: What is the difference between Link and NavLink?
// When would you choose NavLink over Link?
// Give a real Myntra UI example.

Link and NavLink is used instand of <a href> but without full application load.



*/

