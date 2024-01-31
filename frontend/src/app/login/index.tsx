import Logo from "@/components/Logo";
import OnboardFormHeader from "@/components/OnboardFormHeader";
import OnboardLeftSection from "@/components/OnboardLeftSection";
import LoginForm from "@/forms/LoginForm";

const Login = () => {
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <OnboardLeftSection title="Discover Extraordinary Comfort in Hotels" />
      {/* RIGHT */}
      <div className="flex w-full flex-col md:w-1/2">
        <Logo sx="flex justify-center pt-12 md:justify-start md:pl-12" />
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <OnboardFormHeader
            title="Login to your account"
            subtitle="Don't have an account?"
            linkText="Register"
            to="/register"
            btnText="Login with Google"
          />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
