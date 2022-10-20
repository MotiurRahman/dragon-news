import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebaes/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContect = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const signInwithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInwithGithub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authValue = { user, auth, signInwithGoogle, signInwithGithub, logout };
  return (
    <div>
      <AuthContect.Provider value={authValue}>{children}</AuthContect.Provider>
    </div>
  );
};

export default UserContext;
