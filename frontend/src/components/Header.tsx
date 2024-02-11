import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import Logo from "./Logo";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Header = ({ className }: { className?: string }) => {
  const isLoggedIn = false;
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
              {/* TODO: SIGN OUT BUTTON */}
            </>
          ) : (
            <Button asChild variant="secondary">
              <Link to="/sign-in">
                <UserRound size={16} className="mr-2" />
                Sign In
              </Link>
            </Button>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
