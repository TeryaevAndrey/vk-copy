import React, { FC } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { TypeSetState } from "../../../types";
import {IPost} from "../../../types";
import { users } from "../../layout/Sidebar/dataUsers";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({setPosts}) => {
  const [content, setContent] = React.useState<string>("");

  const addPostHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      setPosts(prev => [{
        author: users[0],
        content,
        createdAt: "5 минут назад",
      }, ...prev]);
      setContent("");
    }
  }

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
        onKeyPress={addPostHandler}
        onChange={e => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
