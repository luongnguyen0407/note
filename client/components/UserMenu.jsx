import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AuthContext } from "../src/context/AuthProvider";

const UserMenu = () => {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
        onClick={handleOpenMenu}
      >
        <Typography>{displayName}</Typography>
        <Avatar sx={{ width: 40, height: 40 }} alt="avatar" src={photoURL} />
      </Box>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
