import { ReviewContext } from "./Context";

import React, { useState, useEffect, useRef } from "react";

export default function ReviewProvider({ children }) {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(0);
  const currentPageRef = useRef(1);
  const fetchReview = async (page = 1) => {
    try {
      setLoading(true);
      const url = `https://api.jikan.moe/v4/reviews/anime?&page=${page}`;

      const response = await fetch(url);
      const parseReview = await response.json();
      const { pagination, data: reviewData } = parseReview;

      setReview(reviewData);
      setPagination(pagination);
      setLoading(false);
      console.log(parseReview,pagination);
    } catch (error) {
      console.error("Error fetching anime list:", error);
    }
  };
  const fetchNextPage = () => {
    if (pagination && pagination.has_next_page) {
      let nextPage = currentPageRef.current + 1;
      if (nextPage > pagination.last_visible_page) {
        nextPage = pagination.last_visible_page;
      }

      fetchReview(nextPage);
      currentPageRef.current = nextPage;
    }
  };

  const fetchPreviousPage = () => {
    if (pagination && pagination.current_page > 1) {
      console.log("running");
      const previousPage = currentPageRef.current - 1;
      fetchReview(previousPage);
      currentPageRef.current = previousPage;
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <ReviewContext.Provider
      value={{ review, loading, pagination, fetchNextPage, fetchPreviousPage }}
    >
      {children}
    </ReviewContext.Provider>
  );
}
