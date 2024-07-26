import axios from "axios";
import { createContext, useState, useEffect } from "react";

// export Context
export const WashContext = createContext();

export function WashContextProvider({ children }) {
  const [wash, setWash] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchWash();
    fetchServices()
  }, []);

  // obtain washes
  const fetchWash = async () => {
    try {
      const response = await axios.get("/wash");
      setWash(response.data);
    } catch (error) {
      console.log("error fetching wash");
    }
  };

  //obtain services for eleccion if not it will not work because its not fetching any services.
  const fetchServices = async () => {
    try {
      const response = await axios.get("/Services/all");
      setServices(response.data);
    } catch (error) {
      console.error("error fetching services");
    }
  };

  // create wash
  const makeWash = async (dataWash) => {
    try {
      const response = await axios.post("/wash/create", dataWash);
      setWash((prevWash) => [...prevWash, response.data]);
    } catch (error) {
      console.error("error creating");
    }
  };

  // update wash
  const updatesWash = async (id, update) => {
    try {
      const response = await axios.put(`/wash/${id}`, update);
      setWash((prevWash) =>
        prevWash.map((wash) => (wash._id === id ? response.data : wash))
      );
    } catch (error) {
      console.error("error update");
    }
  };

  // delete wash
  const deleteWash = async (id) => {
    try {
      await axios.delete(`/wash/${id}`);
      setWash((prevWash) => prevWash.filter((wash) => wash._id !== id));
    } catch (error) {
      console.log("error delete wash");
    }
  };

  return (
    <WashContext.Provider value={{ wash,services, makeWash, updatesWash, deleteWash, fetchServices }}>
      {children}
    </WashContext.Provider>
  );
}
