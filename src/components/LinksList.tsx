import React from "react";
import { ILink } from "../types//store/links";
import Link from "./Link";

interface LinksListProps {
  items: ILink[];
}

const LinksList: React.FC<LinksListProps> = ({ items }) => {
  return (
    <tbody className="table__body">
      {items.map((item, index) => (
        <Link
          short={item.short}
          target={item.target}
          counter={item.counter}
          key={index}
        />
      ))}
    </tbody>
  );
};

export default LinksList;
