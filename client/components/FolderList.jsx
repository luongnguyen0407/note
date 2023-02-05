import { List } from "@mui/material";
import React from "react";
import SubHeader from "./SubHeader";
import ListItem from "./ListItem";
import { useParams } from "react-router-dom";

const FolderList = ({ folders }) => {
  const { idFolder } = useParams();
  return (
    <List
      subheader={<SubHeader>Folder</SubHeader>}
      sx={{
        textAlign: "start",
        bgcolor: "#7D9D9C",
        padding: "10px",
        overflowY: "auto",
        borderRadius: "4px",
        height: "100%",
      }}
    >
      {folders.map((folder) => (
        <ListItem folder={folder} key={folder.id} activeId={idFolder} />
      ))}
    </List>
  );
};

export default FolderList;
