import { useAppContext } from "@/contexts/AppContext";
import { Navigate, Outlet } from "react-router-dom";

type UserRole = "User" | "Host" | "Admin";

export const PrivateRoute = ({ roles }: { roles?: UserRole[] }) => {
  const { isLoggedIn, userRole } = useAppContext();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  // Check if the user has the required role to access the route
  if (roles && userRole && !roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <>{isLoggedIn && userRole ? <Outlet /> : <Navigate to="/welcome" />}</>
  );
};
