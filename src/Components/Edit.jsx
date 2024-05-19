import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  })
  const Navigate = useNavigate();
  const { id } = useParams();

  const changeHandler = (e)=>{
    setProduct({...product, [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    setProduct(products.filter(p => p.id == id)[0])
  },[id])

  const addProduct = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Please fill all the fields");
      return;
    }
    
    const pi = products.findIndex(p => p.id == id)
    const copyData = [...products]
    copyData[pi] = {...products[pi], ...product}
    console.log(copyData)
    
    
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    Navigate(-1);
  };
 
  return (
    <div>
      <form
        onSubmit={addProduct}
        className="w-screen h-screen p-[5%] flex flex-col items-center"
      >
        <h1 className="font-semibold text-2xl mb-5 w-1/2">Edit Product</h1>
        <input
          type="url"
          placeholder="image"
          className="w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100"
          name="image"
          onChange={changeHandler}
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="title"
          className="w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100"
          name="title"
          onChange={changeHandler}
          value={product && product.title}
        />
        <div className="w-1/2 mb-3 flex justify-between">
          <input
            type="text"
            placeholder="category"
            className="w-[48%] mb-3 p-2 text-lg font-semibold rounded bg-zinc-100"
            name="category"
          onChange={changeHandler}
            value={product && product.category}
          />
          <input
            type="number"
            placeholder="price"
            className="w-[48%] mb-3 p-2 text-lg font-semibold rounded bg-zinc-100"
            name="price"
          onChange={changeHandler}
            value={product && product.price}
          />
        </div>
        <textarea
          className="w-1/2 mb-3 p-2 text-lg font-semibold rounded bg-zinc-100"
          placeholder="Enter product description"
          name="description"
          onChange={changeHandler}
          value={product && product.description}
          rows="10"
        ></textarea>
        <div className="w-1/2">
          <button className="px-3 py-2 rounded  border-2 font-semibold text-lg text-zinc-600">
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
