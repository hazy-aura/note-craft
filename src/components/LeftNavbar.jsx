// LeftNavbar.js
import React, { useState } from "react";
import Trash from "./Trash.jsx";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { Archive, Delete } from "@mui/icons-material";

function LeftNavbar({ open, onClose }) {
  const [showTrash, setShowTrash] = useState(false);

  const handleTrashClick = () => {
    setShowTrash(true);
    onClose(); // Close the drawer
  };

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
        <Box sx={{ marginTop: "30px", marginRight: "200px" }} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Archive />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button onClick={handleTrashClick}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
      {showTrash && <Trash />}
    </div>
  );
}

export default LeftNavbar;
