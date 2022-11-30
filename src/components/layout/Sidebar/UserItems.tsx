import React, {FC} from 'react';
import {Box} from "@mui/material";
import { Link } from 'react-router-dom';

const UserItems:FC = () => {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center"
    }}>
      <Link to="/profile">
        <Box sx={{
          position: "relative",
          marginRight: 5
        }}>
          <img src="https://e7.pngegg.com/pngimages/831/88/png-clipart-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design.png" alt="user" />
          <Box sx={{
            backgroundColor: "green",
            width: 4, 
            height: 4,
            position: "absolute",
            bottom: 2, 
            left: 2
          }} />
        </Box>
        <span>Дмитрий Лыжин</span>
      </Link>
    </Box>
  );
};

export default UserItems;