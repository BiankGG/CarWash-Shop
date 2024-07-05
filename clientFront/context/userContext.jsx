import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

//wrap app//send value to children
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // render each page if user or not
  //no async in useffect , use .then
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}> 
      {children}
    </UserContext.Provider>
  );
}
