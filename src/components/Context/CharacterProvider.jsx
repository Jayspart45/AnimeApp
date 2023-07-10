import React, { useEffect, useState, useRef } from "react";
import { CharacterContext } from "./Context";

export default function CharacterProvider({ children }) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [pagination, setPagination] = useState(0);
  const currentPageRef = useRef(1);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const url = `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(
        searchQuery
      )}&page=${page}`;

      const response = await fetch(url);
      const data = await response.json();
      const { pagination, data: charData } = data;

      setCharacter(charData);

      setPagination(pagination);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching charcter", error);
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
      console.log("running");
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
    <CharacterContext.Provider
      value={{
        character,
        handleSearch,
        loading,
        pagination,
        fetchNextPage,
        fetchPreviousPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
