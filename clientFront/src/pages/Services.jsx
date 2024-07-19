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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/services/all");
        setServices(response.data);
      } catch (error) {
        console.error("error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="pt-32 ">
      <h1 className="font-extrabold  text-4xl text-blue-800 tracking-tight">
        Services
      </h1>
      {!!user && (
        <div className="flex flex-wrap gap-4 ">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col w-1/4 mx-10 my-4"
            >
              <img
                src={service.imagen}
                alt={service.nombre}
                className="flex justify-center items-centerw-36 h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{service.nombre}</h2>
              <p className="text-gray-600">{service.descripcion}</p>
              <p className="text-lg font-bold text-green-600">
                Price:{service.precio} $
              </p>
              <button
                className="mt-auto py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10"
                onClick={() => {
                  addCart(service);
                  notify();
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
