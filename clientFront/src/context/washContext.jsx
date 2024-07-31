import axios from "axios";
import { createContext, useState, useEffect } from "react";

// export Context
export const WashContext = createContext();

export function WashContextProvider({ children }) {
  const [wash, setWash] = useState([]);
  const [services, setServices] = useState([]);
  const [userWashData, setUserWashData] = useState([]);

  //call
  useEffect(() => {
    fetchWash();
    fetchServices();
  }, []);

  // obtain washes
  const fetchWash = async () => {
    try {
      const response = await axios.get("/wash");
      const washes = response.data;
      setWash(washes);
    } catch (error) {
      console.log("error fetching wash");
    }
  };

  //obtain services for eleccion if not it will not work because its not fetching any services.
  const fetchServices = async () => {
    try {
      const response = await axios.get("/Services/all");
      const allServices = response.data;
      setServices(allServices);
    } catch (error) {
      console.error("error fetching services");
    }
  };

  // create wash
  const makeWash = async (dataWash) => {
    try {
      const response = await axios.post("/wash/create", dataWash);
      let createWash = response.data;
      setWash((prevWash) => [...prevWash, createWash]);
    } catch (error) {
      console.error("error creating");
    }
  };

  // update wash---have to use it
  const updatesWash = async (id, update) => {
    try {
      const response = await axios.put(`/wash/${id}`, update);
      let changeWash = [...wash];
      changeWash = changeWash.map((washItem) =>
        washItem._id === id ? response.data : washItem
      );
      setWash(changeWash);
    } catch (error) {
      console.error("error update");
    }
  };

  // delete wash
  const deleteWash = async (id) => {
    try {
      await axios.delete(`/wash/${id}`);
      let deleteId = [...services];
      deleteId = deleteId.filter((service) => service._id !== id);
      setWash(deleteId);
    } catch (error) {
      console.log("error delete wash");
    }
  };




  const userWashesData = async (userId) => {
    if (!userId) {
      console.error("userId is undefined or null");
      return;
    }
    try {
      const response = await axios.get(`/wash/user/${userId}`);
      setUserWashData(response.data);
    } catch (error) {
      console.error("error fetching user washes", error);
    }
  };

  return (
    <WashContext.Provider
      value={{
        wash,
        services,
        makeWash,
        updatesWash,
        deleteWash,
        fetchServices,
        fetchWash,
        userWashesData,
        userWashData,
      }}
    >
      {children}
    </WashContext.Provider>
  );
}
