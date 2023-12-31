import React, { useContext, useState } from "react";
import Anime from "./components/Anime/Anime";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Utility/Navbar";
import Character from "./components/Character/Character";
import AnimeProvider from "./components/Context/AnimeProvider";
import CharacterProvider from "./components/Context/CharacterProvider";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { LoginContext } from "./components/Context/Context";
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { login } = useContext(LoginContext);
  console.log(login);
  return (
    <div className="App">
      <Router>
        <div className="center">
          <Link to="/anime" className="otaku m-0">
            OTAKUPEDIA
          </Link>
          <Button variant="" onClick={handleShow}>
            <MenuOpenIcon style={{ width: "40px", height: "40px" }} />
          </Button>
        </div>
        {login ? <Navbar show={show} handleClose={handleClose} /> : <></>}

        <Routes>
          <Route index exact path="/" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route
            path="/anime"
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
