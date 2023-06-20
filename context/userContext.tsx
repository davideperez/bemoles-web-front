import React, { FC, ReactElement, useMemo, useState } from "react";

type UserProviderType = {
  children: React.ReactNode;
};

type UserContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

type User = {
  firstName: string;
  lastName: string;
  token: string | null;
};

const UserContext = React.createContext({} as UserContext);


const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    token: "",
  });

  const values = useMemo(() => ({
    user,
    setUser,
  }), [user, setUser])

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
