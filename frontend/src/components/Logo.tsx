import { Link } from "react-router-dom";

const Logo = ({ sx }: { sx?: string }) => {
  return (
    <span className={`${sx} font-logo text-3xl font-bold text-primary-500`}>
      <Link to="/">nextstay .</Link>
    </span>
  );
};

export default Logo;
