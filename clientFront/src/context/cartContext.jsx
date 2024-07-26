import axios from "axios";
import { createContext,useState} from "react";


export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [saveHistoryCart, setSaveHistoryCart]=useState([])

  const addCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  const removeCart = (itemId) => {
    setCart(cart.filter((item) => item._id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };
   

  //save history ?¿ localStorage
  const saveHistory =()=>{
    if (cart.length > 0) {
      setSaveHistoryCart((prevHistory) => [...prevHistory, ...cart])
        localStorage.setItem('setSaveHistoryCart', JSON.stringify(cart))
      clearCart();
    }
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart, saveHistory, saveHistoryCart }}>
      {children}
    </CartContext.Provider>
  );
}
