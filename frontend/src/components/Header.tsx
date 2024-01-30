import { Link } from "react-router-dom";
import Logo from "../assets/nexstay.svg";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="bg-indigo-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-medium tracking-tight">
          <Link to="/">
            <img src={Logo} alt="NexStay" className="w-36" />
          </Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-medium hover:bg-indigo-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-medium hover:bg-indigo-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              {/* TODO: SIGN OUT BUTTON */}
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white rounded-sm items-center text-indigo-600 px-3 font-medium hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
