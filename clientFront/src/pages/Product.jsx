import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";
import { toast } from "react-hot-toast";

export default function Product() {
  const { user } = useContext(UserContext);
  const { addCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const notify = () => toast("succes adding to the cart");

  useEffect(() => {
    const fetchProducts = async (req, res) => {
      try {
        const response = await axios.get("http://localhost:8000/product/all");
        setProducts(response.data);
      } catch (error) {
        console.error("error fetching Product:", error);
      }
    };
    fetchProducts();
  }, []);


  //use ternary operator
  return (
    <div className="pt-32">
      <h1 className="font-extrabold text-4xl text-blue-800 tracking-tight">
        PRODUCTS
      </h1>
      {user ? (
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col w-full sm:w-1/2 lg:w-1/4 mx-auto my-4 max-w-sm"
            >
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{product.nombre}</h2>
              <p className="text-gray-600 mb-2">{product.descripcion}</p>
              <p className="text-lg font-bold text-green-600">
                ${product.precio}
              </p>
              <button
                className="mt-auto py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  addCart(product);
                  notify();
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-extrabold text-4xl pt-32" >Please log in to see the products...</p>
      )}
    </div>
  );
}
