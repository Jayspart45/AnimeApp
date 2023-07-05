import React, { useState, useEffect } from "react";
import Anime from "./components/Anime/Anime";
import Loading from "./components/Utility/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import NavBar from "./components/Utility/Navbar";

function App() {
  const [anime, setAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [slider, setSlider] = useState(true);

  const handleSearch = (query) => {
    if (query !== "") {
      console.log(typeof query);
      setSlider(false);
    } else {
      setSlider(true);
    }
    setSearchQuery(query);
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
        searchQuery
      )}`;

      const response = await fetch(url);
      const parseData = await response.json();
      setAnime(parseData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching anime list:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
    fetchData();
  }, [searchQuery]);



  return (
    <div className="App">
      <h1 className="text-center otaku"> OTAKUPEDIA</h1>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route
              index
              exact
              path="/"
              element={
                <Anime
                  slider={slider}
                  handleSearch={handleSearch}
                  anime={anime}
                />
              }
            />
            <Route path="/review"  element={<Review />} />
          </Routes>
          <NavBar />
        </Router>
      )}
    </div>
  );
}

export default App;
