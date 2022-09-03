import React from "react";
import AuthForm from "../components/AuthForm";
import ErrorPopup from "../components/ErrorPopup";

const AuthPage: React.FC = () => {
  return (
    <div className="app">
      <ErrorPopup />
      <AuthForm />
    </div>
  );
};

export default AuthPage;
