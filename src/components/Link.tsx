import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface LinkProps {
  short: string;
  target: string;
  counter: number;
}

const Link: React.FC<LinkProps> = ({ short, target, counter }) => {
  const { setCount } = useActions();
  const { links } = useTypedSelector((state) => state.links);
  const CountHandler = () => {
    setCount(short);
    console.log(links);
  };
  return (
    <tr className="link">
      <td className="link__short">
        <a
          href={short}
          className="link__short__content"
          onMouseDown={() => CountHandler()}
        >
          {short}
        </a>
      </td>
      <td className="link__target">
        <a href={target} className="link__target__content">
          {target}
        </a>
      </td>
      <td className="link__counter">
        <span className="link__counter__content">{counter}</span>
      </td>
    </tr>
  );
};

export default Link;
