import { useState } from "react";
import { useActions } from "../hooks/useActions";
const AuthForm: React.FC = () => {
  const [email, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { register, login } = useActions();

  const loginHandler = () => {
    login(email, password);
  };
  const registerHandler = () => {
    register(email, password);
  };
  return (
    <div className="auth app__auth">
      <input
        className="auth__input"
        onChange={(e) => setUsername(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        className="auth__input"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <div className="auth__buttons-wrapper">
        <button
          className="auth__button"
          onClick={() => {
            loginHandler();
          }}
        >
          Войти
        </button>
        <button className="auth__button" onClick={() => registerHandler()}>
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
