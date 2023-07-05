import { AnimeContext } from "./Context";

import React, { useState, useEffect } from "react";

export default function ReviewProvider({ children }) {
  const [review, setReview] = useState([]);

  const fetchReview = async () => {
    try {
      const url = `https://api.jikan.moe/v4/reviews/anime`;

      const response = await fetch(url);
      const parseReview = await response.json();
      setReview(parseReview);
    } catch (error) {
      console.error("Error fetching anime list:", error);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <AnimeContextContext.Provider value={review}>{children}</AnimeContext.Provider>
  );
}
