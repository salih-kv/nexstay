import { HotelType } from "../../backend/src/shared/types";
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
  try {
    const response = await instance.post("/api/host/hotels/", hotelFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add hotel");
  }
};

export const fetchMyHotels = async () => {
  const response = await instance.get("/api/host/hotels/");
  return response.data;
};

export const fetchHotelById = async (hotelId: string): Promise<HotelType> => {
  const response = await instance.get(`/api/hotels/${hotelId}`);
  return response.data;
};

export const updateMyHotelById = async (hotelFormData: FormData) => {
  console.log(hotelFormData.get("hotelId"));

  try {
    const response = await instance.put(
      `/api/host/hotels/${hotelFormData.get("hotelId")}`,
      hotelFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add hotel");
  }
};
