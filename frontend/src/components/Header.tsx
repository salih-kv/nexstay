import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { LogOut, UserRound } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAppContext } from "@/contexts/AppContext";
import * as apiClient from "../api-client";
import { toast } from "./ui/use-toast";

const Header = ({ className }: { className?: string }) => {
  const { isLoggedIn } = useAppContext();

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
    <header className={cn("fixed mx-auto w-full py-6", className)}>
      <div className="container px-4 mx-auto flex justify-between">
        <Logo />

        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Button variant="link" className="text-white">
                <Link to="/my-bookings">My Bookings</Link>
              </Button>
              <Button variant="link" className="text-white">
                <Link to="/my-hotels">My Hotels</Link>
              </Button>
              <Button onClick={handleLogout} variant="secondary">
                Logout
                <LogOut size={16} className="ml-2" />
              </Button>
              {/* TODO: SIGN OUT BUTTON */}
            </>
          ) : (
            <Button asChild variant="secondary">
              <Link to="/login">
                <UserRound size={16} className="mr-2" />
                Login
              </Link>
            </Button>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
