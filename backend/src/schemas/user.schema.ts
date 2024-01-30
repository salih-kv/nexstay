export const createUserSchema = {
  email: {
    isEmail: {
      errorMessage: "Email must be valid",
    },
  },
  firstName: {
    isString: {
      errorMessage: "First Name must be a string!",
    },
  },
  lastName: {
    isString: {
      errorMessage: "Last Name must be a string!",
    },
  },
  password: {
    isLength: {
      options: {
        min: 6,
        max: 32,
      },
      errorMessage:
        "Password must be at least 5 characters with a max of 32 characters",
    },
  },
};
