import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import Logo from "./Logo";

import { cn } from "@/lib/utils";

const Header = ({ className }: { className?: string }) => {
  const isLoggedIn = false;
  return (
    <header className={cn("fixed mx-auto w-full py-6", className)}>
      <div className="container px-4 mx-auto flex justify-between">
        <Logo />

        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-medium"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-medium"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              {/* TODO: SIGN OUT BUTTON */}
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex gap-2 bg-white rounded-lg items-center px-3 font-medium hover:bg-gray-100"
            >
              <UserRound size={16} />
              Sign In
            </Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
