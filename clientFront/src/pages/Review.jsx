import React, { useContext, useState } from "react";
import { ReviewContext } from "../context/reviewContext";

export default function Review() {
  const { review, createReview, deleteReview } = useContext(ReviewContext);
  const [addReview, setAddReview] = useState({
    user_name: "",
    comentario: "",
    rating: "",
  });

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewInfo = {
      user_name: addReview.user_name,
      comentario: addReview.comentario,
      rating: addReview.rating,
    };
    createReview(reviewInfo);
  };

  return (
    <>
      <div className="bg-gray-300 opacity-80 pt-60 flex items-center justify-center ">
        <form
          id="review"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6">
            You Are Welcome To Leave Youre Review!
          </h2>

          <label htmlFor="name" className="text-xl font-semibold mt-4">
            NAME
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={addReview.user_name}
            onChange={(e) =>
              setAddReview((prev) => ({ ...prev, user_name: e.target.value }))
            }
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 mb-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <label htmlFor="rating" className="text-xl font-semibold mt-4">
            STARS
          </label>
          <select
            id="rating"
            name="rating"
            value={addReview.rating}
            onChange={(e) =>
              setAddReview((prev) => ({ ...prev, rating: e.target.value }))
            }
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 mb-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>

          <label htmlFor="comment" className="text-xl font-semibold mt-4">
            COMMENTS
          </label>
          <textarea
            id="comentario"
            name="comentario"
            value={addReview.comentario}
            onChange={(e) =>
              setAddReview((prev) => ({ ...prev, comentario: e.target.value }))
            }
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 mb-6 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            SEND YOUR REVIEW!
          </button>
        </form>
      </div>
      <div className="bg-gray-300 opacity-80 flex flex-col items-center pt-8">
        <h3 className="text-2xl font-bold mb-6">Customers Reviews</h3>
        {review.length === 0 ? (
          <p>No reviews yet</p>
        ) : (
          review.map((item) => (
            <div
              key={item._id}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  border border-gray-300 rounded-md shadow-md p-4 mb-4 w-full max-w-md"
            >
              <div className="flex flex-col flex-grow bg-white p-4 rounded-md">
                <p className="text-yellow-500 text-xl font-semibold mt-4">
                  Rating ⭐ : {item.rating} STARS
                </p>
                <h4 className="text-xl font-semibold mt-4">
                  Name: {item.user_name}
                </h4>
                <p className="text-xl font-semibold mt-4">Date: {item.fecha}</p>

                <p className="text-xl font-semibold mt-4">
                  Comment: {item.comentario}
                </p>
              </div>
              <button
                className="mt-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => deleteReview(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
