import './App.css'
import DeliveryHead from "./Components/DeliveryHeader/DeliveryHeader.jsx"
import ProductCard from "./Components/ProductCard/ProductCard.jsx"

function App() {

  return (
    <>
      <div>{DeliveryHead()}</div>
      <div>{ProductCard()}</div>
    </>
  );
}

export default App
