import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { users } from "./dataUsers";

const UserItems: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "#F6F6F6",
        border: "none",
        borderRadius: 3,
      }}
    >
      {users.map((user) => (
        <Link
          key={user._id}
          to={`/profile/${user._id}`}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#111",
            marginBottom: 12,
          }}
        >
          <Box
            sx={{
              position: "relative",
              marginRight: 2,
              overflow: "hidden",
              width: 46,
              height: 46,
            }}
          >
            <Avatar
              src={user.avatar}
              alt="user"
              sx={{ width: 46, height: 46, borderRadius: "50%" }}
            />
            {user.isInNetwork && (
              <Box
              sx={{
                backgroundColor: "#4FB14F",
                border: "1px solid #F1F7FA",
                width: 12,
                height: 12,
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: "50%",
              }}
            />
            )}
          </Box>
          <span style={{ fontSize: "14px" }}>{user.name}</span>
        </Link>
      ))}

      <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/messages")}>
          <ListItemIcon>
            <QuestionAnswer />
          </ListItemIcon>
          <ListItemText primary="Сообщения" />
        </ListItemButton>
      </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
