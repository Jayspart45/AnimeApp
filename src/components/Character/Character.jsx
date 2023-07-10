import React, { useContext } from "react";
import CharacterProvider from "../Context/CharacterProvider";
import CharacterItem from "./CharacterItem";
import Row from "react-bootstrap/Row";
import Loading from "../Utility/Loading";
import SearchBar from "../Utility/SearcBar";
import { CharacterContext } from "../Context/Context";
import Pagination from "../Utility/Pagination";
export default function Character() {
  const { loading } = useContext(CharacterContext);
  return (
    <>
      <SearchBar />

      <h1 className="display-1 otaku text-center animetxt mt-5">Character</h1>
      {loading ? <Loading /> : <Row className="mt-5">{<CharacterItem />}</Row>}
      <Pagination />
    </>
  );
}
