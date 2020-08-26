import products from "./Data";
import React from "react";
import Product from "./components/Product";

const App = function () {
  
  // making new allProducts array having all components from products array
  let allProducts = products.map((item) => {
    return (
      <Product
        key={item.id} // unique key provided to each component
        serialNo={item.id}
        name={item.name}
        description={item.description}
        product={item.product}
      />
    );
  });

  // sorting based on id
  allProducts.sort(function (a, b) {
    return a.key - b.key;
  });

  console.log("sorted array is ", allProducts);

  return <div> {allProducts}</div>;
};

export default App;

/* 
Concept of how we solved below warning by providing each component an key
Warning: Each child in a list should have a unique "key" prop.

concept of rendering by using custom array.sort..it sorts the same array

concept of array.map..it returns a new array

*/
