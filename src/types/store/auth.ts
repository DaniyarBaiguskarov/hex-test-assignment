export enum AuthActionTypes {
  SET_IS_AUTH = "SET_IS_AUTH",
  LOGOUT = "LOGOUT",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
  SET_USERNAME = "SET_USERNAME",
  SET_PASSW0RD = "SET_PASSWORD",
}

export interface AuthState {
  isLoading: boolean;
  isAuth: boolean;
  error: null | string;
}

interface SetIsAuth {
  type: AuthActionTypes.SET_IS_AUTH;
  payload: boolean;
}

interface Logout {
  type: AuthActionTypes.LOGOUT;
}

interface SetAuthError {
  type: AuthActionTypes.SET_AUTH_ERROR;
  payload: string | null;
}

export type AuthAction = SetIsAuth | Logout | SetAuthError;
