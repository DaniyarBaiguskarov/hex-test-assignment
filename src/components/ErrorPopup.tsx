import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ErrorPopup: React.FC = () => {
  const { error } = useTypedSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);
  const { setError } = useActions();
  const rootEl = useRef<any>(null);
  useEffect(() => {
    const onClick = (e: any) => {
      rootEl.current.contains(e.target) || setVisible(false);
      console.log(visible);
      setError(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  useEffect(() => {
    if (error) {
      setVisible(true);
    }
    console.log(error, "he", visible);
  }, [error]);
  return (
    <div
      ref={rootEl}
      className={visible ? "error-popup" : "error-popup error-popup_disabled"}
    >
      {error}
    </div>
  );
};

export default ErrorPopup;
