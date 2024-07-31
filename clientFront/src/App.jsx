import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Subscription from "./pages/Subscription";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import WashAppointment from "./pages/WashAppointment"
import WhoWeAre from "./pages/WhoWeAre"
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import SideBar from "./components/Sidebar";
import axios from 'axios';


//backendURL--
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;


function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 1500 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/WashAppointment" element={<WashAppointment />} />
        <Route path= "/WhoWeAre" element={<WhoWeAre />} />
        
      </Routes>
    </div>
  );
}

export default App;
