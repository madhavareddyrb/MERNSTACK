import { useState } from "react";
import "./AddtoCart.css";

function AddtoCart() {
  const products = [
    { name: "Tomato", price: 30 },
    { name: "Chicken", price: 150 },
    { name: "Biryani", price: 220 },
  ];

  const [cartCount, setCount] = useState("0");
  const [isinBag, setisinBag] = useState(false);

  const [addtoCart, setaddtocart] = useState("Add to Cart");

  function setBagCount(e) {
    setCount(cartCount + 1);
    setisinBag(true);
  }
  function setToGotoBag() {
    if (setisinBag) {
      setaddtocart("Go To Cart");
    } else {
      setaddtocart("Add to Cart");
    }
  }
  const prodcutsList = products.map(function (product) {
    return (
      <>
        <div>{product.name}</div>
        <div>{product.price}</div>

        {cartCount}
        <button>REMOVE</button>
      </>
    );
  });

  return (
    <>
      <div className="products-list">
        <button value={cartCount}>Cart</button>
        <button onClick={setToGotoBag}>{addtoCart}</button>
        <button onClick={setToGotoBag}>{addtoCart}</button>
        {prodcutsList}
      </div>
    </>
  );
}

export default AddtoCart;
