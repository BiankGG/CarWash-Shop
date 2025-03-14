import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get(`${import.meta.env.VITE_HOST}/user/profile`)
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, [user]);

  //login//toast for logged already
  const login = async (credentials) => {
    if (user) {
      toast.error("logged already!");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_HOST}/user/login`,
        credentials
      );
      const loginUser = response.data;
      setUser(loginUser);
    } catch (error) {
      console.error("error login", error);
      setUser("");
    }
  };

  //Logout
  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_HOST}/user/logout`);
      setUser("");
    } catch (error) {
      console.error("error logout:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
