import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { toast } from "./ui/use-toast";
import { CalendarCheck, LayoutDashboard, LogOut, User } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";

const ProfileDropdown = () => {
  const { userRole } = useAppContext();

  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.logout, {
    onSuccess: async () => {
      toast({
        title: "Logout Successful!",
      });
      await queryClient.invalidateQueries("validateToken");
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
      console.log(error);
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <DropdownMenuContent className="w-40">
      <DropdownMenuGroup>
        <DropdownMenuItem className="p-2">
          <User className="mr-3 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <Link to="/my-bookings">
          <DropdownMenuItem className="p-2">
            <CalendarCheck className="mr-3 h-4 w-4" />
            <span>My Bookings</span>
          </DropdownMenuItem>
        </Link>
        {userRole === "Host" && (
          <>
            <Link to="/dashboard">
              <DropdownMenuItem className="p-2">
                <LayoutDashboard className="mr-3 h-4 w-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout} className="p-2">
        <LogOut className="mr-3 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default ProfileDropdown;
