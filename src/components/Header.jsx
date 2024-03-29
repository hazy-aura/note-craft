import React, { useState } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Button } from "@mui/material";
import LeftNavbar from "./LeftNavbar";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      <h1>
        <Button color="inherit" onClick={handleDrawerToggle}>
          <LeftNavbar open={isDrawerOpen} onClose={handleDrawerToggle} />
          <DensityMediumIcon />
        </Button>
        <HighlightIcon />
        NoteCraft
      </h1>
    </header>
  );
}

export default Header;
