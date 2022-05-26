import React from "react";

const userContextDefaultValue = {
  user: { name: "", profileImage: "" },
  setUser: () => {},
};

const UserContext = React.createContext(userContextDefaultValue);
export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
