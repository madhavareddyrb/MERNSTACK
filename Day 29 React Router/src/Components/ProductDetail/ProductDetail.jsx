import { useParams,useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const productsData = [
    {
      id: "1",
      name: "Fruits",
      type: "Veg",
    },
    {
      id: "2",
      name: "Fruits",
      type: "Veg",
    },
    {
      id: "3",
      name: "Fruits",
      type: "Veg",
    },
  ];
  

  
}

export default ProductDetail;
