import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { SubscriptionContext } from "../context/subscriptionContext";
import { UserContext } from "../context/userContext";
import { CartContext } from "../context/cartContext";

export default function Subscription() {
  const { subs, fetchSubs } = useContext(SubscriptionContext);
  const { user } = useContext(UserContext);
  const { addCart } = useContext(CartContext);

  const notify = () => toast("succes adding to the cart");

  //use ternary operator & map/filter?¿? and put user? if not loggin u cant adquired the subs.
  return (
    <div className="pt-32 container mx-auto px-4 py-8">
      <h1 className="font-extrabold text-4xl text-blue-800 tracking-tight">
        Subscription World!
      </h1>
      {user ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-28 px-4">
          {subs.length > 0 ? (
            subs.map((item, index) => (
              <div
                key={index}
                className="bg-white gap-4 bg-opacity-30 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.imagen}
                  alt={item.descripcion}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-xl font-bold mb-2">{item.nombre}</h1>
                  <h2 className="text-l font-bold mb-2">{item.descripcion}</h2>
                  <h2 className="text-l font-bold mb-2">{item.duracion}</h2>
                  <h3 className="text-l font-bold mb-2">{item.precio}$</h3>
                </div>
                <button
                  className="mt-auto py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    addCart(item);
                    notify();
                  }}
                >
                  Activate!
                </button>
              </div>
            ))
          ) : (
            <div>no subscriptions available</div>
          )}
        </div>
      ) : (
        <p className="font-extrabold text-4xl pt-32 text-red-600">
          please log in to see subscripcions...
        </p>
      )}
    </div>
  );
}
