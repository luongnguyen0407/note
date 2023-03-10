import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import FolderList from "../components/FolderList";
import UserMenu from "../components/UserMenu";

const data = [
  {
    id: 123,
    name: "Test Folder 1",
  },
  {
    id: 124,
    name: "Test Folder 2",
  },
];

const Home = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: "20px" }}>
        Note App
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "right", mb: "10px" }}>
        <UserMenu />
      </Box>
      <Grid
        container
        sx={{
          height: "70vh",
          boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
        }}
      >
        <Grid item xs={3} sx={{ maxHeight: "100%" }}>
          <FolderList folders={data}></FolderList>
        </Grid>
        <Grid item xs={9} sx={{ maxHeight: "100%" }}>
          <Outlet></Outlet>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
