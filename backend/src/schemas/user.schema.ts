export const createUserSchema = {
  email: {
    isEmail: {
      errorMessage: "Email must be valid",
    },
  },
  name: {
    isString: {
      errorMessage: "Name must be a string and is required",
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
