import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { FC } from "react";
import { IUserData } from "./types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {
  const {ga, user} = useAuth();
  const navigate = useNavigate();

  const [isRegForm, setIsRegForm] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<IUserData>({
    email: "",
    password: "",
    name: ""
  } as IUserData);
  const [error, setError] = React.useState<string>("");

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );

        await updateProfile(res.user, {
          displayName: userData.name
        })
      } catch (err: any) {
        err.message && setError(err.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        )
      } catch(err: any) {
        err.message && setError(err.message);
      }
    }

    setUserData({
      email: "",
      password: "",
      name: ""
    });
  };

  React.useEffect(() => {
    if(user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      {error && <Alert severity="error" style={{marginBottom: 20}}>{error}</Alert>}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <form onSubmit={handleLogin}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            sx={{ display: "block" }}
            required
          />
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{ marginTop: "20px" }}
          >
            <Button type="submit" onClick={() => setIsRegForm(false)}>
              Auth
            </Button>
            <Button type="submit" onClick={() => setIsRegForm(true)}>
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
    </>
  );
};

export default Auth;
