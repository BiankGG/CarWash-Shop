import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { CartContextProvider } from "./context/cartContext";
import { WashContextProvider } from "./context/washContext.jsx";
import { SubscriptionContextProvider } from "./context/subscriptionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <CartContextProvider>
          <WashContextProvider>
            <SubscriptionContextProvider>
              <App />
            </SubscriptionContextProvider>
          </WashContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
