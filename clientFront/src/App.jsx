import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/NavBar'
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import Services from './pages/Services'
import Subscription from './pages/Subscription'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from "../context/userContext";
import Profile from "./pages/Profile";
import SideBar from "./components/Sidebar";



function App() {
  return (
    <UserContextProvider>
        <div >
      <Navbar />
      <SideBar />
      <Toaster position='bottom-right' toastOptions={{duration:1500}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Subscription" element={<Subscription />} />
      </Routes>
      </div>
      </UserContextProvider>
  );
}

export default App;
