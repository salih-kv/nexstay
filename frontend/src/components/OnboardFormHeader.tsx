import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const OnboardFormHeader = ({
  title,
  subtitle,
  linkText,
  to,
  btnText,
}: {
  title: string;
  subtitle: string;
  linkText: string;
  to: string;
  btnText: string;
}) => {
  return (
    <>
      <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
        {title}
      </p>
      <p className="mt-6 text-center font-medium md:text-left">
        {subtitle}
        <Link
          to={to}
          className="whitespace-nowrap font-semibold text-primary-600 pl-1"
        >
          {linkText}
        </Link>
      </p>
      <button className="google-btn">
        <FcGoogle className="mr-2" />
        {btnText}
      </button>
      <div className="relative mt-8 mb-4 md:mb-0 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
          Or use email instead
        </div>
      </div>
    </>
  );
};

export default OnboardFormHeader;
