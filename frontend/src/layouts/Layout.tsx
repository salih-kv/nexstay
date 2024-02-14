import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="py-28 container px-4">
        <Outlet />
      </div>
      {/* TODO: FOOTER */}
    </div>
  );
};

export default Layout;
