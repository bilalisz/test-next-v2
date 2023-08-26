import React from "react";
import { Input } from "antd";

import { FaSearch } from "react-icons/fa";
const { Search } = Input;

const CustomSearch = (props) => {
  const { onSearch, onChnage } = props;

  return (
    <Search
      placeholder="search user"
      enterButton={<FaSearch size={16} />}
      size="middle"
      onSearch={onSearch}
      onChange={onChnage}
      className="w-80 custom-style"
    />
  );
};

export default CustomSearch;
