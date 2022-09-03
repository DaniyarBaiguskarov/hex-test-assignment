import React from "react";
import "./App.scss";
import { useTypedSelector } from "./hooks/useTypedSelector";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

const App: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  if (!isAuth) {
    return <AuthPage />;
  }

  return <MainPage />;
};

export default App;
