import instance from "./axios/instance";
import { LoginFormInputs } from "./forms/LoginForm";
import { RegisterFormInputs } from "./forms/RegisterForm";

export const register = async (formData: RegisterFormInputs) => {
  await instance.post("/api/users/register", formData);
};

export const login = async (formData: LoginFormInputs) => {
  await instance.post("/api/auth/login", formData);
};
