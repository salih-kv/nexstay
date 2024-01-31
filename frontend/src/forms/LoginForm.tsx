
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
            placeholder="Password (minimum 8 characters)"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 rounded-lg bg-primary-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-primary-600 ring-offset-2 transition hover:bg-primary-700 focus:ring-2 md:w-32"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
