import React from "react";
import Row from "react-bootstrap/Row";
import Animeitem from "./Animeitem";

export default function AnimeList({ anime }) {
  return (
    <>
      <h1 className="display-1 otaku text-center mt-5">AnimeList</h1>
      <Row className="mt-5">{<Animeitem anime={anime} />}</Row>
    </>
  );
}
