import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { createParams } from "../utils/params";

const SqueezeForm: React.FC = () => {
  const [link, setLinks] = useState<string>("");
  const { fetchLinks, squeeze } = useActions();
  const { limit, page, order } = useTypedSelector((state) => state.links);
  return (
    <div className="squeeze app__squeeze">
      {" "}
      <input
        className="squeeze__input"
        onChange={(e) => setLinks(e.target.value)}
        value={link}
        type="text"
        placeholder="Link"
      />
      <button
        className="squeeze__button"
        onClick={() => {
          squeeze(link);
          fetchLinks(createParams(limit, page, order));
        }}
      >
        Сжать
      </button>
    </div>
  );
};

export default SqueezeForm;
