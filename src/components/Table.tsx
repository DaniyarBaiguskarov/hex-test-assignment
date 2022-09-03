import React from "react";
import { ILink } from "../types//store/links";
import LinksList from "./LinksList";
import TableHead from "./TableHead";

interface TableProps {
  items: ILink[];
  // page: number;
}

const headerData = [
  { content: "Короткая ссылка", className: "short" },
  { content: "Полная ссылка", className: "target" },
  { content: "Счетчик", className: "counter" },
];

const Table: React.FC<TableProps> = ({ items }) => {
  // const currentPageItems = items.slice((page - 1) * 10, (page - 1) * 10 + 10);
  return (
    <table className="table app__table">
      <TableHead data={headerData} />
      <LinksList items={items} />
    </table>
  );
};

export default Table;
