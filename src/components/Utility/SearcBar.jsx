import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function SearchBar({ onSearch }) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#6DECAF",
      },
    },
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    console.log(searchQuery);

    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="search mb-4">
        <form onSubmit={handleSearchSubmit}>
          <TextField
            id="outlined-basic"
            label="Search Anime"
            type="search"
            variant="standard"
            color="secondary"
            value={searchQuery}
            onChange={handleSearchChange}
            focused
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </ThemeProvider>
  );
}
