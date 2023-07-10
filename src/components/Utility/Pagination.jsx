import React, { useContext } from "react";
import {
  AnimeContext,
  CharacterContext,
  ReviewContext,
} from "../Context/Context";

const Pagination = () => {
  let pagination,
    fetchNextPage,
    fetchPreviousPage,
    handleNextPage,
    handlePreviousPage;

  const animeContext = useContext(AnimeContext);
  const characterContext = useContext(CharacterContext);
  const reviewContext = useContext(ReviewContext);

  if (animeContext) {
    ({ pagination, fetchNextPage, fetchPreviousPage } = animeContext);
    console.log(animeContext);

    handleNextPage = () => {
      fetchNextPage();
    };

    handlePreviousPage = () => {
      console.log("Clicked prev");
      fetchPreviousPage();
    };
  } else if (characterContext) {
    ({ pagination, fetchNextPage, fetchPreviousPage } = characterContext);

    handleNextPage = () => {
      fetchNextPage();
    };

    handlePreviousPage = () => {
      console.log("Clicked prev");
      fetchPreviousPage();
    };
  } else if (reviewContext) {
    console.log(reviewContext);
    ({ pagination, fetchNextPage, fetchPreviousPage } = reviewContext);

    handleNextPage = () => {
      fetchNextPage();
    };

    handlePreviousPage = () => {
      console.log("Clicked prev");
      fetchPreviousPage();
    };
  }

  return (
    <div className="Pagination">
      {pagination && pagination.current_page > 1 && (
        <button onClick={handlePreviousPage} className="search-btn">
          Previous Page
        </button>
      )}
      <div className="currentPage">{pagination && pagination.current_page}</div>
      {pagination &&
        pagination.current_page !== pagination.last_visible_page && (
          <div className="currentPage active">
            {pagination.last_visible_page}
          </div>
        )}
      {pagination && pagination.has_next_page && (
        <button onClick={handleNextPage} className="search-btn">
          Next Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
