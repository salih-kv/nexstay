
const LoginForm = () => {
  return (
    <form className="flex flex-col items-stretch pt-3 md:pt-8">
      <div className="flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="email"
            id="login-email"
            className="form-textbox"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mb-4 flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="password"
            id="login-password"
            className="form-textbox"
            placeholder="Password"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
