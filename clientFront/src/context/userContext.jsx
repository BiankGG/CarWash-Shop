import axios from "axios";
import { createContext, useState, useEffect } from "react";

//backendURL--
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

//token
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/user/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  //obtain profile
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get("/user/profile", {
  //         withCredentials: true,
  //       });
  //       setUser(response.data);

  //       console.log("fetched", response.data);
  //     } catch (error) {
  //       console.error("error profile:", error);
  //       setUser(null);
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  //login
  const login = async (credentials) => {
    try {
      const response = await axios.post("/user/login", credentials);
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
