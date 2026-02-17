// function ProductCard(props) {
//   console.log(props);
//   let quantity = 0

import { useState } from "react";

//   return (
//     <>
//       <div>
//         <h3>{props.name}</h3>
//         <p>Rs {props.price}</p>

//       </div>
//     </>
//   );
// }

// function ProductCard(props){
//   const {name, price} = props
//   console.log(name);
//   console.log(price);
// }
// function ProductCard({ name:productName, price:BasePrice, details:{ unit, offer_price }} ) {
//   // const name = "madhava reddy"
//   // console.log(name); // output nothing
//   console.log(productName);
//   console.log(BasePrice);
  
//   // console.log(price);
//   console.log(offer_price);
//   console.log(unit);

//   return(<>
//   <div>{productName}</div>
//   {BasePrice}
//   </>)
// }

function ProductCard({name,price,originalPrice,unit,image,discount=0,inStock=true}){
  // console.log(name);
  // console.log(image);
  
  
  const [quantity, setQuantity] = useState(0)
  return (<>
  <div className="product-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p className="unit">{unit}</p>
    <div className="price">
      {originalPrice && (<span className="cut">Rs {originalPrice}</span>)}
      {discount>0 && (<span className="badge"> {discount} % off</span>)}
    </div>
    {inStock ? (<button onClick={() => setQuantity(quantity+1)} >
    {quantity === 0 ? "ADD" : `Added (${quantity})`}

    </button>) : (
      <button disabled>Out of Stock</button>
    )}

  </div>
  
  </>)
}


export default ProductCard;
