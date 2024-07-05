import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/NavBar'
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from "../context/userContext";
import DashLogin from "./pages/DashLogin";

//backendURL--
axios.defaults.baseURL= 'http://localhost:8000';
axios.defaults.withCredentials= true

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:1500}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashLogin" element={<DashLogin />} />
      </Routes>
      </UserContextProvider>
  );
}

export default App;
