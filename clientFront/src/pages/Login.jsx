import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      await login({ email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("login successful!");
        setData({ email: "", password: "" });
        navigate("/Profile");
      }
    } catch (error) {
      toast.error("error signing in. Por favor, Please try again.");
    }
  };

  return (
    <div className=" h-screen bg-no-repeat bg-cover bg-[url('https://img.freepik.com/fotos-premium/lavado-autos-espuma-colores-generada-ia_201606-7176.jpg')] opacity-90 flex justify-center items-center w-full">
      <form onSubmit={loginUser} className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-5xl font-semibold mb-8">Login</h1>
        <div className="mt-4">
          <label className="text-white font-extrabold text-2xl" htmlFor="email">
            Email
          </label>
          <input
            className="shadow-inner bg-gray-100 rounded-lg placeholder-gray text-2xl p-4 border-none block mt-1 w-full"
            id="email"
            type="email"
            placeholder="Enter your Email...."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="off"
          />
        </div>
        <div className="mt-4">
          <label
            className="text-white font-extrabold text-2xl"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className=" shadow-inner bg-gray-100 rounded-lg placeholder-gray text-2xl p-4 border-none block mt-1 w-full"
            id="password"
            type="password"
            placeholder="Enter your Password...."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            autoComplete="off"
          />
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            type="submit"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-800 md:py-4 md:text-lg md:px-10"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
