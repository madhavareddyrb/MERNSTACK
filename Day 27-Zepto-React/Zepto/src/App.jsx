import './App.css'
import DeliveryHead from "./Components/DeliveryHeader/DeliveryHeader.jsx"
import ProductCard from "./Components/ProductCard/ProductCard.jsx"
import CategorySlider from './Components/CategorySlider/CategorySlider.jsx';

function App() {

  return (
    <>
      {/* <div>{DeliveryHead()}</div> */}
      {/* <div>{ProductCard()}</div> */}
      <div>{CategorySlider()} </div>
    </>
  );
}

export default App
