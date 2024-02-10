const RegisterForm = () => {
  return (
    <form className="flex flex-col items-stretch pt-3 md:pt-8">
      <div className="flex flex-col pt-4">
        <div className="form-textbox-cont">
          <input
            type="text"
            id="login-name"
            className="form-textbox"
            placeholder="Name"
          />
        </div>
      </div>
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
      <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-between pt-4">
        <div className="form-textbox-cont">
          <input
            type="password"
            id="login-password"
            className="form-textbox"
            placeholder="Password (minimum 8 characters)"
          />
        </div>
        <div className="form-textbox-cont">
          <input
            type="password"
            id="login-cpassword"
            className="form-textbox"
            placeholder="Confirm Password"
          />
        </div>
      </div>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
