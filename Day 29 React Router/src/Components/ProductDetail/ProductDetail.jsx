import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

export const productsData = [
   {
     id: "0",
     name: "T-Shirts",
     type: "Men",
   },
   {
     id: "1",
     name: "Shirts",
     type: "Men",
   },
   {
     id: "2",
     name: "Pants",
     type: "Men",
   },
   {
     id: "3",
     name: "T-Shirts",
     type: "Kids",
   },
   {
     id: "4",
     name: "Dresses",
     type: "Women",
   },
 ];

function ProductDetail() {
  const { id } = useParams();
 
  // console.log(id);
  const navigate = useNavigate();

  function backToProducts() {
    navigate("/products");
  }

  // console.log(id, "index");
  

  function renderData(productsData) {

    // console.log(productsData[id].id);
    
    if (productsData[id].id === id) {
      return (
        <>
          Showing Product #[{productsData[id].id}]
          <div>{productsData[id].name}</div>
          {productsData[id].type}
          <div>
            <button onClick={backToProducts}>Back To Products</button>
          </div>


          
        </>
      );
    }

    // return (<>
    // <div>
    //   {renderData(productsData)}
    // </div>
    // </>)
  }

  return (
    <>
      <div>{renderData(productsData)}</div>
    </>
  );
}

export default ProductDetail;

/*
Q: If Myntra has 1 million products,
do they create 1 million components?
Explain in 3-4 sentences in ProductDetail.jsx

No, one component is enought and we write a logic on url id match with product id. Thats one product is going to show on screen. 


 */