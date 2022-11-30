import React, { FC } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { TypeSetState } from "../../../types";
import {IPost} from "../../../types";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <TextField
        label="Расскажи, что у тебя нового"
        variant="outlined"
        InputProps={{
          sx: {borderRadius: "25px", backgroundColor: "#F9F9F9"}
        }}
        sx={{
          width: "100%"
        }}
      />
    </Box>
  );
};

export default AddPost;
