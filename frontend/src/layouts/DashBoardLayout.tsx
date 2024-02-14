import { buttonVariants } from "@/components/ui/button";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { to: "", text: "Dashboard" },
  { to: "my-hotels", text: "My Hotels" },
  { to: "bookings", text: "Bookings" },
];

const DashBoardLayout = () => {
  return (
    <div>
      <nav className="border-b my-6">
        {navLinks?.map(({ to, text }) => (
          <NavLink
            key={to}
            to={to}
            className={`pl-0 pr-16 ${buttonVariants({ variant: "link" })}`}
          >
            {text}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
