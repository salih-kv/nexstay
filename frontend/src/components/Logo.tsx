import { Link } from "react-router-dom";
import nexstay from "@/assets/nexstay.svg";

const Logo = ({ sx }: { sx?: string }) => {
  return (
    <span className={`${sx}`}>
      <Link to="/">
        <img src={nexstay} alt="nexstay" className="w-36" />
      </Link>
    </span>
  );
};

export default Logo;
