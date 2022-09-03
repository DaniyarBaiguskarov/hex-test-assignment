import React, { useEffect, useRef } from "react";
import _ from "underscore";
import Pagination from "../components/Pagination";
import SqueezeForm from "../components/SqueezeForm";
import Table from "../components/Table";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { createParams } from "../utils/params";

const MainPage: React.FC = () => {
  const ref = useRef<NodeJS.Timer>();

  const { limit, page, order, links } = useTypedSelector(
    (state) => state.links,
    _.isEqual
  );

  const { isAuth } = useTypedSelector((state) => state.auth);
  const { fetchLinks, Logout, login } = useActions();
  ///релогин, иначе после n-го времени выкидывает из учетной записи
  useEffect(() => {
    if (isAuth) {
      const username = localStorage.getItem("username") as string;
      const password = localStorage.getItem("password") as string;
      ref.current = setInterval(() => login(username, password), 60000 * 1);
    }
    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, []);
  useEffect(() => {
    if (isAuth) {
      fetchLinks(createParams(limit, page, order));
    }
  }, [page, order, isAuth]);
  return (
    <div className="app">
      {" "}
      <button
        className="logout app__logout"
        onClick={() => {
          clearInterval(ref.current);
          Logout();
        }}
      >
        выйти
      </button>
      <SqueezeForm />
      <Table items={links} />
      <Pagination />
    </div>
  );
};

export default MainPage;
