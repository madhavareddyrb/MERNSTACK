const productList = [
  {
    name: "BoatWatch",
    price: 2000,
    off: "7.9k",
  },
  {
    name: "Life Long Mixer",
    price: 1299,
    off: "2.7k",
  },
  {
    name: "Ambrane PowerBank",
    price: 1349,
    off: "1.6k",
  },
];

const result = function dataLoop(copyOfproductList) {
  console.log(copyOfproductList);
  // return copyOfproductList;
};

// console.log(result); // Direct function
// console.log(result()); // function value (undefined)
// console.log(result(productList), "result"); // array of objects

// console.log(typeof result); // function

// forEach: use console to print output because forEach always return undefined.

// productList.forEach(result) // prodcutList items and here forEach itselfs returns nothing, *** Logs from inside the callback

// console.log(productList.forEach(result));  // output undefined  ****Logs the return value of forEach

console.log(productList.forEach(result())); // result() -> result is executed right now, Its return value is passed into forEach, But result function is returning nothing, so js see this is forEach(undefinded)
