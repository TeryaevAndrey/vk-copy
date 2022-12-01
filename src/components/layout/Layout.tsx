import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useAuth } from "../providers/useAuth";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user && (
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item md={user ? 9 : 12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
