import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { Link, useLocation } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const location = useLocation();

  const style = {
    backgroundColor: '#f61067!important',
    color: '#f4f4ed',
    borderTop:"3px solid #00f0b5!important"
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={style}
        value={location.pathname}
        onChange={(event, newValue) => {
          // You can handle the navigation here if needed
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          value="/"
          label="Anime"
          icon={<CatchingPokemonIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/review"
          value="/review"
          label="Review"
          icon={<ReviewsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
