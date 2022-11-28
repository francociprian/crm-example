import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getProducts } from "../Api";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  async function loadProducts() {
    const res = await getProducts();
    setProducts(res)
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-[6_1_0%]">
        <Navbar />
        <div className="h-[800px] p-5 m-5">
          <div className="max-w-3xl flex justify-between items-center mb-4">
            <h1 className="text-2xl text-red-500">
              Products
            </h1>
            <button className=" px-5 py-1 border border-[#3e98c7] text-[13px] font-semibold text-gray-500" onClick={() => navigate('/')}>
              Volver
            </button>
          </div>
          <div className="max-w-3xl grid grid-cols-3 gap-4 py-6">
            {products.length ? products.map(product => (
              <div key={product.id} className=" border border-gray-500 flex flex-col justify-center items-center">
                <img src={product.image} className="w-48 " />
                <p className="text-base">{product.title}</p>
              </div>
            )) : <p>No products</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;