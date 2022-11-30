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
import { menu } from "./dataMenu";

const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        padding: 2,
        backgroundColor: "#F6F6F6",
        border: "none",
        borderRadius: 3,
        marginTop: 5,
        marginBottom: 10
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton onClick={() => navigate(item.link)}>
              <ListItemIcon sx={{
                minWidth: 36
              }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Menu;
