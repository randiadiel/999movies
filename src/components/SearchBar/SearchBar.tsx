import React, { ChangeEvent } from "react";
import sty from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { onChange, value } = props;

  return (
    <div className={sty.searchBarContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className={sty.searchBarInput}
      />
    </div>
  );
};

export default SearchBar;
