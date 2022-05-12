import { createContext } from "react";

const AuthContext = createContext([{ user: null }, (user) => user]);

export { AuthContext };
