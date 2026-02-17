import "./App.css";
import Child from "./Components/Child.jsx";
import ProductCard from "./Components/productCard.jsx";

function App() {
  return (
    <>
      {/* <ProductCard
        name="Tamota"
        price={20}
        details={{ unit: "250g", offer_price: 10 }}
      /> */}


      {/* <Child name="Zoro" anime="One Piece" /> <br /> */}
      {/* {greeting(name)} */}

      <div>
        <ProductCard name="Tomata-Hybrid" price={42} originalPrice={52} unit="500 g" image="tomato.jpg" discount={20} inStock={true} />
      </div>
    </>
  );
}

export default App;
