import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
