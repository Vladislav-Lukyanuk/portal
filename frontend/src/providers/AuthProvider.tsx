import React, { createContext, FC, useContext, useState } from "react";

type TAuthContext = {
  user?: string;
  signIn: (callback: () => void) => void;
  signUp: (callback: () => void) => void;
  signOut: (callback: () => void) => void;
};

const authContext = createContext<TAuthContext>({
  user: undefined,
  signIn: () => null,
  signUp: () => null,
  signOut: () => null,
});

export const useAuthContext = (): TAuthContext => useContext(authContext);

const useAuthProvider = (): TAuthContext => {
  const [user, setUser] = useState<string>();

  const signIn = (callback: () => void) => {
    setUser("user");
    callback();
  };

  const signUp = (callback: () => void) => {
    setUser("user");
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(undefined);
    callback();
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};

export const AuthProvider: FC = ({ children }) => {
  const authProvider = useAuthProvider();

  return (
    <authContext.Provider value={authProvider}>{children}</authContext.Provider>
  );
};
