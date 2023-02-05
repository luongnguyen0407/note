import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Node = () => {
  const [value, setValue] = useState("");
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
        [{ direction: "rtl" }],
        [{ color: [] }, { background: [] }],
      ],
    }),
    []
  );
  return (
    <Box className="scrolling-container">
      <ReactQuill
        placeholder="Ghi chú gì đó"
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </Box>
  );
};

export default Node;
