import { useState } from "react";

import "./filter.css";

const Filter = ({ onChangeFilter, onChangeTerm, filter }) => {
  const [term, setTerm] = useState("");

  const buttonsData = [{ name: "Brazil" }, { name: "Kenya" }, { name: "Columbia" }];

  const buttons = buttonsData.map((btn) => {
    const active = filter === btn.name;
    const clazz = active ? "active" : "";

    return (
      <button key={btn.name} onClick={() => onChangeFilter(`${btn.name}`)} className={`btn-filter ${clazz}`}>
        {btn.name}
      </button>
    );
  });

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
    onChangeTerm(term);
  };

  return (
    <div className="filter">
      <div>
        <label className="filter-for-input" htmlFor="filter-input">
          Looking for
        </label>
        <input
          onChange={(e) => onUpdateSearch(e)}
          type="text"
          className="filter-input"
          placeholder="start typing here..."
          value={term}
        />
      </div>
      <div>
        <label className="filter-for-country" htmlFor="filter-btns">
          Or filter
        </label>
        <div className="filter-btns">{buttons}</div>
      </div>
    </div>
  );
};

export default Filter;
