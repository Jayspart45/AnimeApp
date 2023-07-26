import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LogoutIcon from "@mui/icons-material/Logout";
import { LoginContext } from "../Context/Context";

export default function Navbar({ show, handleClose }) {
  const { setLogin } = useContext(LoginContext);
  const style = {
    background: "#5e239d",
  };
  const closeButtonStyle = {
    color: "red", 
  };

  const handleLogOut = () => {
    setLogin(false);
  };
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton style={closeButtonStyle}>
        <h1 className="otaku animetxt m-0">OTAKUPEDIA</h1>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Box>
          <BottomNavigation showLabels sx={style}>
            <BottomNavigationAction
              component={Link}
              to="/anime"
              value="/anime"
              label="Anime"
              icon={<CatchingPokemonIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/character"
              value="/character"
              label="Character"
              icon={<AccessibilityIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/review"
              value="/review"
              label="Review"
              icon={<ReviewsIcon />}
            />

            <BottomNavigationAction
              component={Link}
              to="/"
              value="/"
              label="LogOut"
              onClick={handleLogOut}
              icon={<LogoutIcon />}
            />
          </BottomNavigation>
        </Box>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
