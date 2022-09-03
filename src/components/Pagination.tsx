import React, { useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Pagination: React.FC = () => {
  const lastElement = useRef<HTMLDivElement>(null);
  const { page, links } = useTypedSelector((state) => state.links);
  const { setLinksPage } = useActions();

  return (
    <div ref={lastElement} className="pages app__pages">
      {" "}
      <button
        className={page === 10 ? "pages__button_disabled" : "pages__button"}
        onClick={() => {
          setLinksPage(page - 10);
        }}
      >
        Назад
      </button>
      <button
        className={
          links.length === 10 ? "pages__button" : "pages__button_disabled"
        }
        onClick={() => {
          setLinksPage(page + 10);
        }}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;
