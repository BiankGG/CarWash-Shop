import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";
import { toast } from "react-hot-toast";

export default function Services() {
  const { user } = useContext(UserContext);
  const { addCart } = useContext(CartContext);
  const [services, setServices] = useState([]);

  const notify = () => toast("succes adding to the cart");

  //download data api and actualice
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_HOST}/services`);
        let data = response.data;
        setServices(data);
      } catch (error) {
        console.error("error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  //using ternary operator
  return (
    <div className="pt-32">
      <h1 className="font-extrabold text-4xl text-blue-800 tracking-tight">
        Services
      </h1>
      {user ? (
        <div className="flex flex-wrap gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col w-full sm:w-1/2 lg:w-1/4 mx-auto my-4 max-w-sm"
            >
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold">{item.nombre}</h2>
              <p className="text-gray-600">{item.descripcion}</p>
              <p className="text-lg font-bold text-green-600">
                Price: ${item.precio}
              </p>
              <button
                className="mt-auto py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => {
                  addCart(item);
                  notify();
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-extrabold text-4xl pt-32 text-red-600">
          Please log in...
        </p>
      )}
    </div>
  );
}
