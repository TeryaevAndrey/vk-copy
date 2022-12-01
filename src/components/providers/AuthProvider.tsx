import React, { FC } from "react";
import { IUser, TypeSetState } from "../../types";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { users } from "../layout/Sidebar/dataUsers";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth
}

const AuthContext = React.createContext<IContext>({} as IContext);

interface IAuthProvider {
  children: React.ReactNode
}

export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const ga = getAuth();

  React.useEffect(() => {
    const unListen = onAuthStateChanged(ga, authUser => {
      setUser(authUser ? {
          _id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser?.displayName || ""
      } : null);
    });

    return () => {
      unListen();
    }
  }, []);

  const values = React.useMemo(() => ({
    user, setUser, ga
  }), [user, ga]);

  return(
    <AuthContext.Provider value={{
      user, setUser, ga: getAuth()
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;