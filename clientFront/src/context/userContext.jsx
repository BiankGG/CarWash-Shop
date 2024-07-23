import axios from "axios";
import { createContext, useState, useEffect } from "react";

//backendURL--
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/user/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error profile:", error);
        setUser(null);
      }
    };

    fetchUserProfile();
  }, []);

  //login

  const login = async () => {
    try {
      const response = await axios.post("/user/login", Credentials);
      setUser(response.data);
    } catch (error) {
      console.error("error login", error);
      setUser(null);
    }
  };

  //Logout
  const logout = async () => {
    try {
      await axios.post("/user/logout");
      setUser(null);
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
