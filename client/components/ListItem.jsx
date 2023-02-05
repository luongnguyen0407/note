import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ folder, activeId, where = "folders" }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      to={`${where}/${folder.id}`}
      key={folder.id}
    >
      <Card
        variant="outlined"
        sx={{
          mb: "5px",
          backgroundColor: +folder.id === +activeId ? "rgb(255 211 140)" : null,
        }}
      >
        <CardContent sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}>
          <Typography>{folder.name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListItem;
