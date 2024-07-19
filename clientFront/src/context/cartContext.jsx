import axios from "axios";
import { createContext,useState} from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  const removeCart = (itemId) => {
    setCart(cart.filter((item) => item._id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
