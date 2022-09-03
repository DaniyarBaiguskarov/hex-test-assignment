import $api, { API_URL } from "../http";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../types/response/AuthResponse";
import { RegisterResponse } from "../types/response/RegisterResponse";

const $uninterceptedAxiosInstance = axios.create({
  //   withCredentials: true,
  baseURL: API_URL,
});

// uninterceptedAxiosInstance.interceptors.request.use((config) => {
//   (config.headers ??= {})["Access-Control-Allow-Origin"] =
//     "http://localhost:3000";
//   (config.headers ??= {})["Access-Control-Allow-Methods"] = [
//     "POST",
//     "GET",
//     "OPTIONS",
//     "DELETE",
//     "PUT",
//   ].join(",");
//   return config;
// });

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(
      "/login",
      `username=${username}&password=${password}`
    );
  }

  static async register(
    username: string,
    password: string
  ): Promise<AxiosResponse<RegisterResponse>> {
    return $uninterceptedAxiosInstance.post<RegisterResponse>(
      "/register",
      {},
      {
        params: { username: username, password: password },
        //   headers: { "Access-Control-Allow-Origin": API_URL },
      }
    );
  }

  // static async squeeze(link: string): Promise<AxiosResponse<AuthResponse>> {
  //   return $api.post<AuthResponse>("/squeeze", { link });
  // }
  //   static async logout(): Promise<void> {
  //     return $api.post("/logout");
  //   }
}
