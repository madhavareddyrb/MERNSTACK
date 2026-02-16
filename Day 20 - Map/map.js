const bestFoods = [
  {
    image: "Biryani Img",
    food_name: "Biryani",
  },
  {
    image: "Pizza Img",
    food_name: "Pizza",
  },
  {
    image: "Cake Img",
    food_name: "Cake",
  },
];

// print Food names-- flow to slove this

// console.log(bestFoods) // full array
// console.log(bestFoods[0]) // we can't print through every indexs like this so we use loops

for (let index = 0; index < bestFoods.length; index++) {
  // const item = bestFoods  // Its printing 3 times because for loop runs 3 times and we are passing full array. To access inside values we use indexs because prototype is array

  // const item = bestFoods.food_name; // undefined we can't access array items by dot

  // const item = bestFoods[index];  // it print all items through index and prototype is object

  const item = bestFoods[index].food_name; // Prints all food names. we can access objects using .dot
  // console.log(item);
}/*
**** const item = bestFoods.food_name // undefined
how to approach this probllem as a begginer at root level

1.See prototype or datatype of output we get for bestFoods 
2.Now we that prototype is array and we can access array using index
3.then access inside array items bestFoods[index]
4.Again see prototype of output we see it is object
5.To access object we use dot notation bestFoods[index].food_name
*/


// forEach
function dataloop(bestFoods) {
  return bestFoods;
}
// bestFoods.forEach(dataloop); // nothing returns here.Returning a value inside forEach does nothing because forEach ignores return values by design.

// bestFoods.forEach(dataloop()) // TypeError: undefined is not a function undefined is not a function. The moment we run datalogLoop() execute and js see code bestFoods.forEach(undefined) so we get error forEach default behaviour

// bestFoods.forEach(dataloop(bestFoods)); //TypeError: object is not a function

function datalogLoop(bestFoods){
 console.log(bestFoods)
}
// bestFoods.forEach(datalogLoop) // array of items prototype object

// bestFoods.forEach(datalogLoop()) // TypeError: undefined is not a function. The moment we run datalogLoop() execute and js see code bestFoods.forEach(undefined) so we get error forEach default behaviour

// bestFoods.forEach(datalogLoop(bestFoods)) // TypeError: undefined is not a function
bestFoods.forEach(function (bestFood, index) {
  // console.log(bestFood) // Logs all items in array
  return bestFood; // Returning a value inside forEach does nothing because forEach ignores return values by design.
});

function datamapLoop(bestFoods) {
  console.log(bestFoods);
}
bestFoods.map(datamapLoop) // products items
console.log("--------------------------------");
// bestFoods.map(datamapLoop()) // typeError:undefined is not a function

bestFoods.map(function (food, index) {
  console.log(food); // all items
  // return food;
});
