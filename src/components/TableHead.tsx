import React from "react";
import ColumnHead from "./ColumnHead";

interface Header {
  content: string;
  className: string;
}

interface TableHeadProps {
  data: Header[];
}

const TableHead: React.FC<TableHeadProps> = ({ data }) => {
  return (
    <thead className="table__header">
      <tr>
        {data.map((item, index) => (
          <ColumnHead
            content={item.content}
            className={item.className}
            key={index}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
