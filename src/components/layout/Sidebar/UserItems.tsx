import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Avatar, Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from "@mui/material";
import {QuestionAnswer} from "@mui/icons-material";

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
      <Link
        to="/profile"
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
            src="https://e7.pngegg.com/pngimages/831/88/png-clipart-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design.png"
            alt="user"
            sx={{width: 46, height: 46, borderRadius: "50%"}}
          />
          <Box
            sx={{
              backgroundColor: "#4FB14F",
              border: "1px solid #F1F7FA",
              width: 12,
              height: 12,
              position: "absolute",
              bottom: 0,
              right: 0,
              borderRadius: "50%"
            }}
          />
        </Box>
        <span style={{ fontSize: "14px" }}>Дмитрий Лыжин</span>
      </Link>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/messages")}>
          <ListItemIcon>
            <QuestionAnswer />
          </ListItemIcon>
          <ListItemText primary="Сообщения" />
        </ListItemButton>
      </ListItem>
    </Card>
  );
};

export default UserItems;
