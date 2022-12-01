import { Avatar, Button, Card, Chip } from "@mui/material";
import React from "react";
import {signOut} from "firebase/auth";
import { useAuth } from "../../providers/useAuth";

const User = () => {
  const {user, ga} = useAuth();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "F1F7FA",
        border: "none",
        borderRadius: 3,
        marginBottom: 5,
      }}
    >

      <Chip
        avatar={<Avatar alt="avatar" src={user?.avatar} />}
        label={user?.name || "Без имени"}
        variant="outlined"
        sx={{
          display: "flex",
          marginBottom: 2
        }}
      />

      <Button variant="outlined" onClick={() => signOut(ga)}>
        Выйти
      </Button>
    </Card>
  );
};

export default User;
