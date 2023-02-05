import { Box, Typography } from "@mui/material";
import React from "react";

const SubHeader = ({ color = "white", children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: "bold", color: `${color}` }}>
        {children}
      </Typography>
    </Box>
  );
};

export default SubHeader;
