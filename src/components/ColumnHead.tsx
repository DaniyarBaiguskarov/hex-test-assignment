import React, { useState } from "react";
import { useActions } from "../hooks/useActions";

interface ColumnHeadProps {
  content: string;
  className: string;
}

const ColumnHead: React.FC<ColumnHeadProps> = ({ content, className }) => {
  const { sortLinks } = useActions();
  const [sort, setSort] = useState<boolean>(true);
  const SortHandler = () => {
    sortLinks(className);
    setSort(!sort);
  };

  return (
    <td
      className={`column-head-${className} column-head`}
      onClick={() => SortHandler()}
    >
      <div className={`column-head-${className}__content`}>
        <span className={`column-head-${className}__content__name`}>
          {content}
        </span>
        <div
          className={
            sort
              ? `column-head-${className}__content__icon column-head-${className}__content__icon_reverce`
              : `column-head-${className}__content__icon`
          }
        />
      </div>
    </td>
  );
};

export default ColumnHead;
