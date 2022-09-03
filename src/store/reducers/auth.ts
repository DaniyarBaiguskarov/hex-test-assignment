import { AuthAction, AuthActionTypes, AuthState } from "../../types/store/auth";

const initialState: AuthState = {
  isAuth: !!localStorage.getItem("token"),
  isLoading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGOUT:
      localStorage.clear();
      return { ...state, isAuth: false };
    case AuthActionTypes.SET_IS_AUTH:
      return { ...state, isAuth: true };
    case AuthActionTypes.SET_AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
