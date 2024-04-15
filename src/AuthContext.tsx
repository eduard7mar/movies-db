import { createContext } from "react";

export interface AuthInfo {
  user: {
    name: string;
  };
}

export const anonymousUser = {
  name: "Anonymous",
};

export const AuthContext = createContext<AuthInfo>({ user: anonymousUser });
