import React, { FC } from "react";
import { IUser, TypeSetState } from "../../types";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { users } from "../layout/Sidebar/dataUsers";
import { useNavigate } from "react-router-dom";
import {Firestore, getFirestore} from "firebase/firestore";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
  db: Firestore
}

export const AuthContext = React.createContext<IContext>({} as IContext);

interface IAuthProvider {
  children: React.ReactNode
}

export const AuthProvider: FC<IAuthProvider> = ({children}) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const ga = getAuth();
  const db = getFirestore();

  React.useEffect(() => {
    const unListen = onAuthStateChanged(ga, authUser => {
      if(authUser) {
        setUser({
          _id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser.displayName || "",
        })
      } else {
        setUser(null);
      }
    });

    return () => {
      unListen();
    }
  }, []);

  const values = React.useMemo(() => ({
    user, setUser, ga, db
  }), [user, ga, db]);

  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;