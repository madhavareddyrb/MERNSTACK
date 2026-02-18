import "./ProductCard.css";

function ProductCard() {
  const data = [
    {
      product_img:
        "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-937-937,pr-true,f-auto,,q-40,dpr-2/cms/product_variant/160d217f-5f1d-4b78-b0a9-741bfa54c045/Grapes-Green-Sonaka-Seedless.jpeg",
      product_name: "Grapes Green Sonaka Seedless",
      net_weight: "Net Qty: 250 g",
      offer_price: 41,
      base_price: "MRP 69(includes of all Tax) 28 OFF",
    },
    
  ];

  const highLights = [
    {
      brand: "The Good Luck",
      product_type: "Fruit",
      key_features:
        "Celebrate new beginnings with Good Luck Green Grapes - nature's sweet symbol of prosperity. Packed with antioxidants and vitamins, these juicy grapes refresh your senses while promoting good health, positivity, and believed to bring luck with every bite. 12 grapes for 12 wishes at 12 O'clock",
      good_for: "Heart Health",
      dietary_preference: "Veg",
      colour_name: "Grren",
      Unit: "1 pack(250 g)",
    },
  ];

  const data_loop = data.map(function (product) {
    return (
      <>
        <div className="container card mt-5  p-4 rounder-ms ">
          <div>
            <img
              className="h-100 w-100"
              src={product.product_img}
              alt="grape"
            />
            <button className="w-full bg-pink-700 text-white p-2 rounded-md mt-6">
              Add To Cart
            </button>
          </div>
          <div className="text-card">
            <p className="font-bold">{product.product_name}</p>
            <p className="text-black-700">{product.net_weight}</p>
            <p className="text-4xl font-bold text-black-900">₹ {product.offer_price}</p>
            <p className="">{product.base_price}</p>
          </div>
          <div></div>
        </div>
      </>
    );
  });

  return <>{data_loop}</>;
}

export default ProductCard;
