import React from "react";
import SearchBar from "../Utility/SearcBar";
import AnimeList from "./AnimeList";
import Slider from "../Slider";

export default function Anime({ handleSearch, anime, slider }) {
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {slider ? <Slider anime={anime} /> : <></>}
      <AnimeList anime={anime} />
    </>
  );
}
