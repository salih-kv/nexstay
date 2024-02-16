import instance from "./axios/instance";
import { LoginFormInputs } from "./forms/LoginForm";
import { RegisterFormInputs } from "./forms/RegisterForm";

export const register = async (formData: RegisterFormInputs) => {
  await instance.post("/api/user/register", formData);
};

export const login = async (formData: LoginFormInputs) => {
  await instance.post("/api/auth/login", formData);
};

export const validateToken = async () => {
  const response = await instance.get("/api/auth/validate-token");
  return response.data;
};

export const getUser = async () => {
  const response = await instance.get("/api/user/me");
  return response.data;
};

export const logout = async () => {
  await instance.post("/api/auth/logout");
};

export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await instance.post("/api/host/hotels/", hotelFormData);
  return response.data;
};
