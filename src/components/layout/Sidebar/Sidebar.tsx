import { Box } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import UserItems from "./UserItems";
import Menu from "./Menu";

const Sidebar: FC = () => {
  return (
    <div>
      <UserItems />
      <Menu />
    </div>
  );
};

export default Sidebar;
