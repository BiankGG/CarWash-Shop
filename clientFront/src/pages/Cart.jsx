import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";


export default function Cart() {
  const { cart, removeCart, clearCart } = useContext(CartContext);


 const totalPrice = cart.reduce(((total, item)=> total+ item.precio),0)

  //const resultado = lista.reduce(function callback(valorAnterior, valorActual)  return; /* resultado de la función callback */
 //}, valorInicial);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mx-auto my-4 max-w-3xl flex flex-col items-center pt-32">
      <h2 className="font-extrabold text-4xl text-blue-800 tracking-tight pt-8 mb-4">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Cart is empty</p>
      ) : (
        <div className="w-full">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center mb-4 p-4 border rounded-lg">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-32 h-32 object-cover mr-4"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{item.nombre}</h3>
                <p className="text-gray-600">{item.descripcion}</p>
                <p className="text-lg font-bold text-green-600">
                  Price: {item.precio}$
                </p>
              </div>
              <button
                className="mt-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => removeCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 mb-8 text-center">
            <h3 className="text-2xl font-semibold text-blue-800">
              Total: { totalPrice.toFixed(2)}$ $
            </h3>
          </div>
          <div className="flex justify-center mt-4 gap-x-8 gap-y-4 grid-cols-3">
            <button
              className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              onClick={clearCart}
            >
              Clear Cart
            </button >
            <button  className="py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}
