import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  function getMen() {
    navigate("/men");
  }
  function getWomen() {
    navigate("/women");
  }

  function getKids() {
    navigate("/kids");
  }

  function getProducts(){
    navigate("/products")
  }

  return (
    <>
      <h2>Welcome to Myntra</h2>
      <nav className="navbar">
        <button onClick={Home}>Home |</button>
        <button onClick={getMen}>Men |</button>
        <button onClick={getWomen}>Women |</button>
        <button onClick={getKids}>Kids |</button>
        <button onClick={getProducts} >Products</button>
      </nav>

      <h4>
        Q: Why should we use Link instead of a href in React? // Write 3
        sentences in your Navbar.jsx file. // Use Myntra as your example.
      </h4>
      <p>Answer: when we use a href when we click on items add to cart, the full website is going load again which is not good perfomance and we lose all state of added items so when we use Link it only redirects to that route withOut loading full application and  items in in cart</p>

    </>
  );
}

export default Home;
