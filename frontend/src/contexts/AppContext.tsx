import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

type UserRole = "User" | "Host" | "Admin";

type AppContext = {
  isLoggedIn: boolean;
  userRole: UserRole | null;
  user: { [key: string]: string } | null;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  const { isError: isErrorUser, data } = useQuery(
    "getUser",
    apiClient.getUser,
    {
      retry: false,
    }
  );

  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isErrorUser && data) {
      const { role } = data;
      setUserRole(role);
      setUser(data);
    } else {
      setUserRole(null);
    }
  }, [isErrorUser, data]);

  return (
    <AppContext.Provider value={{ isLoggedIn: !isError, userRole, user }}>
      {" "}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context as AppContext;
};
