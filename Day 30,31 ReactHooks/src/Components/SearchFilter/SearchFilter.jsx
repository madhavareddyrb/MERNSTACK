import { useState } from "react";
import "./SearchFilter.css";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProduct, setfilterProducts] = useState([]);
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
  };

  function SearchProduct() {
    return (
      <>
        <div>Prodcuts showing in function</div>
        {products.filter(function (product) {
          if (product.includes(searchQuery)) {
            // <div className="products">
            //   <div>{product}</div>
            // </div>;

            return <>
            <div>{product}</div>
            
            </>;
          } else {
            ("not foud");
          }
        })}
      </>
    );
  }
  return (
    <>
      <input type="text" value={searchQuery} onChange={searchedProduct} />
      <button type="submit" onClick={SearchProduct}>
        Search
      </button>
      <SearchProduct />
    </>
  );
}

export default SearchFilter;

/*
1.2 states one for searchQuary, seacrhProdutct, producsdata

1.search input tag capture usig onChnages event with setsearchQuery

2.check searchQuery matches productsdata 

3.If condition searchQuery in products  if true captureProducts 

*/
