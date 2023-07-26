import React, { useState, useEffect, useRef } from "react";
import { AnimeContext } from "./Context";
export default function AnimeProvider({ children }) {
  const [anime, setAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [slider, setSlider] = useState(true);
  const [pagination, setPagination] = useState(0);
  const currentPageRef = useRef(1);

  const handleSearch = (query) => {
    if (query !== "") {
      setSlider(false);
    } else {
      setSlider(true);
    }
    setSearchQuery(query);
  };

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);

      const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
        searchQuery
      )}&page=${page}`;

      const response = await fetch(url);
      const data = await response.json();
      const { pagination, data: animeData } = data;

      setAnime(animeData);
      setPagination(pagination);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching anime list:", error);
      setLoading(false);
    }
  };
  const fetchNextPage = () => {
    if (pagination && pagination.has_next_page) {
      let nextPage = currentPageRef.current + 1;
      if (nextPage > pagination.last_visible_page) {
        nextPage = pagination.last_visible_page;
      }

      fetchData(nextPage);
      currentPageRef.current = nextPage;
    }
  };

  const fetchPreviousPage = () => {
    if (pagination && pagination.current_page > 1) {
      const previousPage = currentPageRef.current - 1;
      fetchData(previousPage);
      currentPageRef.current = previousPage;
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [searchQuery]);

  return (
    <AnimeContext.Provider
      value={{
        anime,
        handleSearch,
        slider,
        loading,
        pagination,
        fetchNextPage,
        fetchPreviousPage,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
