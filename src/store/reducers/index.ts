import { combineReducers } from "redux";
import { linksReducer } from "./links";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  links: linksReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
