import { useState } from "react";
import "./SearchFilter.css";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    "Tamota",
    "TShirt",
    "Chicken",
    "Noodles",
    "Chicken Fried Rice",
    "Veg Biryani",
    "Dum Biryani",
  ];

  const searchedProduct = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };
  function searchProduct(e) {
    products.map(function (product) {
      if (product.includes(searchQuery)) {
        return <>`${product}`</>;
      }
    });
  }

  return (
    <>
      <input type="text" value={searchQuery} onChange={searchedProduct} />
      <button type="submit" onClick={searchProduct}>
        Search
      </button>
    </>
  );
}

export default SearchFilter;
