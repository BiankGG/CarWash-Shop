import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SubscriptionContext = createContext();

export function SubscriptionContextProvider({ children }) {
  const [subs, setSubs] = useState([]);
  const [specificSub, setSpecificSub] = useState(null);

  useEffect(() => {
    fetchSubs();
  }, []);

  const fetchSubs = async () => {
    try {
      const response = await axios.get("/subscription");
      let data = response.data;
      setSubs(data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  const fetchSpecificSub = async (id) => {
    try {
      const response = await axios.get(`/subscription/${id}`);
      let data = response.data;
      setSpecificSub(data);
    } catch (error) {
      console.error(" error fetching specific subscription", error);
    }
  };

  return (
    <SubscriptionContext.Provider value={{ subs, fetchSubs, fetchSpecificSub }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
