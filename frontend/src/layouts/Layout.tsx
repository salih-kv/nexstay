import { ReactNode } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container px-4 mx-auto">{/* TODO: SEARCH BAR */}</div>
      <div className="container mx-auto py-10 px-4 flex-1">{children}</div>
      {/* TODO: FOOTER */}
    </div>
  );
};

export default Layout;
