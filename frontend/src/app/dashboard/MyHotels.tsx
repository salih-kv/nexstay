import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyHotels = () => {
  return (
    <div>
      <header className="flex items-center justify-end">
        <Link to="/add-hotel">
          <Button>Add hotel</Button>
        </Link>
      </header>
    </div>
  );
};

export default MyHotels;
