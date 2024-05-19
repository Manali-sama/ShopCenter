import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  // const getData = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getData()
  }, []);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
