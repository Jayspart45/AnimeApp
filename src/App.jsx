import React, { useState, useEffect, useContext } from "react";
import Anime from "./components/Anime/Anime";
import Loading from "./components/Utility/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Utility/Navbar";
import Character from "./components/Character/Character";
import AnimeProvider from "./components/Context/AnimeProvider";
import CharacterProvider from "./components/Context/CharacterProvider";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <Router>
        <div className="center">
          <h1 className="otaku m-0">OTAKUPEDIA</h1>
          <Button variant="" onClick={handleShow}>
            <MenuOpenIcon style={{ width: "40px", height: "40px" }} />
          </Button>
        </div>
        <Navbar show={show} handleClose={handleClose} />

        <Routes>
          <Route
            index
            exact
            path="/"
            element={
              <AnimeProvider>
                <Anime />
              </AnimeProvider>
            }
          />

          <Route path="/review" element={<Review />} />
          <Route
            path="/character"
            element={
              <CharacterProvider>
                <Character />
              </CharacterProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
