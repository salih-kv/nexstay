import { Link } from "react-router-dom";
import { CircleUser, UserRound } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAppContext } from "@/contexts/AppContext";
import ProfileDropdown from "./ProfileDropdown";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ className }: { className?: string }) => {
  const { isLoggedIn, user } = useAppContext();

  return (
    <header
      className={cn(
        "fixed mx-auto w-full py-6 bg-primary-500 text-white z-50",
        className
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Logo sx="!text-white" />

        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center justify-center gap-2   hover:bg-black/10 p-2 rounded-sm cursor-pointer">
                  <CircleUser className="w-8 h-8" />
                  <span className="font-medium">{user?.name}</span>
                </div>
              </DropdownMenuTrigger>
              <ProfileDropdown />
            </DropdownMenu>
          ) : (
            <Button asChild variant="secondary">
              <Link to="/login">
                <UserRound size={16} className="mr-2" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
