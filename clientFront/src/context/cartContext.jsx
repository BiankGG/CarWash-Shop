import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [saveHistoryCart, setSaveHistoryCart] = useState([]);

  //add to cart
  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  //remove id
  const removeCart = (id) => {
    let newCartItem = [...cart];
    newCartItem = cart.filter((item) => item._id !== id);
    setCart(newCartItem);
  };
  const clearCart = () => {
    setCart([]);
  };

  //save history ?¿ localStorage
  const saveHistory = () => {
    if (cart.length > 0) {
      const save = (prevHistory) => [...prevHistory, ...cart];
      setSaveHistoryCart(save);
      localStorage.setItem("saveHistoryCart", JSON.stringify(cart));
      clearCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        clearCart,
        saveHistory,
        saveHistoryCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
