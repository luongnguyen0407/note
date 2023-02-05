import { Grid, List } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ListItem from "./ListItem";
import SubHeader from "./SubHeader";
const data = [
  {
    id: 123,
    name: "Test node 1",
  },
  {
    id: 124,
    name: "Test node 2",
  },
];
const NodeList = () => {
  const { idNode } = useParams();
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#F0EBE3",
          height: "100%",
          overflowY: "auto",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <List subheader={<SubHeader color="#000">Node</SubHeader>}>
          {data.map((node) => (
            <ListItem
              folder={node}
              key={node.id}
              activeId={idNode}
              where="node"
            />
          ))}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet></Outlet>
      </Grid>
    </Grid>
  );
};

export default NodeList;
