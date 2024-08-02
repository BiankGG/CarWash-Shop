import axios from "axios";
import { createContext, useEffect, useState } from "react";


//exportContext
export const ReviewContext = createContext();

export function ReviewContextProvider({ children }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReview();
  }, []);

  //lets fetch reviews from endpoint
  const fetchReview = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_HOST}/review`);
      const allReviews = response.data;
      setReview(allReviews);
    } catch (error) {
      console.error("error fetching review", error);
    }
  };

  //create a review
  const createReview = async (dataReview) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_HOST}/review/create`,
        dataReview
      );
      console.log("review created", response.data);
      let makeReview = response.data;
      setReview((prevReview) => [...prevReview, makeReview]);
    } catch (error) {
      console.error("error creating a review", error);
    }
  };

  //update review
  const updateReview = async (id, update) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_HOST}/review/${id}`,
        update
      );
      let editReview = [...review];
      editReview = editReview.map((review) =>
        review._id === id ? response.data : review
      );
      setReview(editReview);
    } catch (error) {
      console.error("error updating review", error);
    }
  };

  //delete review
  const deleteReview = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_HOST}/review/${id}`);
      setReview((prevReviews) =>
        prevReviews.filter((review) => review._id !== id)
      );
    } catch (error) {
      console.error("error deleting review", error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{ review, createReview, updateReview, deleteReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
