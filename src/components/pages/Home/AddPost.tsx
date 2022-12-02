import React, { FC } from "react";
import { Box } from "@mui/system";
import { Alert, TextField } from "@mui/material";
import { TypeSetState } from "../../../types";
import { IPost } from "../../../types";
import { users } from "../../layout/Sidebar/dataUsers";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";

const AddPost: FC = () => {
  const [content, setContent] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const { user, db } = useAuth();

  const addPostHandler = async(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user) {
      try {
        await addDoc(collection(db, "posts"), {
          author: user,
          content,
          createdAt: "10 минут назад"
        });

      } catch (err: any) {
        setError(err);
      }

      setContent("");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
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
            sx: { borderRadius: "25px", backgroundColor: "#F9F9F9" },
          }}
          sx={{
            width: "100%",
          }}
          onKeyPress={addPostHandler}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Box>
    </>
  );
};

export default AddPost;
