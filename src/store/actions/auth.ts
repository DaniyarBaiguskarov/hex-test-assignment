import { AxiosError } from "axios";
import { Dispatch } from "redux";
import AuthService from "../../services/AuthService";
import { AuthAction, AuthActionTypes } from "../../types/store/auth";
import { RegisterResponseError } from "../../types/response/RegisterResponse";
import { AuthResponseError } from "../../types/response/AuthResponse";
import { LinksAction, LinksActionTypes } from "../../types/store/links";

export const register = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AuthService.register(username, password);
    } catch (e) {
      const err =
        (e as AxiosError<RegisterResponseError>).response?.data.detail ||
        "Error";
      dispatch({
        type: AuthActionTypes.SET_AUTH_ERROR,
        payload: err,
      });
    }
  };
};

export const login = (username: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      console.log(response.data.access_token, response.data);
      localStorage.setItem("token", response.data.access_token);
      dispatch({
        type: AuthActionTypes.SET_IS_AUTH,
        payload: true,
      });
    } catch (e) {
      const err =
        (e as AxiosError<AuthResponseError>).response?.data.detail || "Error";
      dispatch({
        type: AuthActionTypes.SET_AUTH_ERROR,
        payload: err,
      });
    }
  };
};

export function Logout() {
  return (dispatch: Dispatch<AuthAction | LinksAction>) => {
    dispatch({
      type: AuthActionTypes.LOGOUT,
    });
    dispatch({
      type: LinksActionTypes.SET_LINKS,
      payload: [],
    });
    dispatch({ type: LinksActionTypes.SET_LINKS_PAGE, payload: 10 });
    dispatch({ type: LinksActionTypes.SET_IS_LAST_PAGE, payload: false });
  };
}

export function setError(error: string | null): AuthAction {
  console.log("tut");
  return { type: AuthActionTypes.SET_AUTH_ERROR, payload: error };
}
