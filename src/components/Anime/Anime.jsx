import React, { useContext } from "react";
import SearchBar from "../Utility/SearcBar";
import AnimeList from "./AnimeList";
import Slider from "../Slider";
import { AnimeContext } from "../Context/Context";
import Pagination from "../Utility/Pagination";
import Loading from "../Utility/Loading";
export default function Anime() {
  const { slider, loading } = useContext(AnimeContext);
  return (
    <>
      <SearchBar />
      {loading ? (
        <Loading />
      ) : (
        <>
          {slider ? <Slider /> : <></>}
          <AnimeList />
          <Pagination />
        </>
      )}
    </>
  );
}
