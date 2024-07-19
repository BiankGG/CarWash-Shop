import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios"; //handleLogout
import { useNavigate } from "react-router-dom"; 

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  
  //manage go home when logout
  const navigate = useNavigate();

  let content;

  if (user) {
    content = (
      <div>
        <h2 className="text-xl font-semibold mb-2">Hi, {user.name}!</h2>
        <p className="mb-4">Welcome to your profile page.</p>
        <div className="text-left">
          <p className="text-xl text-blue-600">Email: {user.email}</p>
          <p className="text-xl text-blue-600">ID: {user.id}</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await axios.post("/user/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="pt-28 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {content}
        <button
          className=" mt-auto py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
