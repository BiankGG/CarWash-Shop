import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  let content;

  if (user) {
    content = (
      <div>
        <h2 className="text-xl font-semibold mb-2">Hi, {user.name}!</h2>
        <p className="mb-4">Welcome to your profile page.</p>
        <div className="text-left">
          <p className="text-xl text-blue-600" >Email: {user.email}</p>
          <p className="text-xl text-blue-600" >ID: {user.id}</p>
        </div>
      </div>
    );
  } 

  return (
    <div className="pt-28 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {content}
      </div>
    </div>
  );
}
