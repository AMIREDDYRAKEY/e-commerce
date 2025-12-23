import React from "react";
import { FaSearch, FaCamera, FaMicrophone } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="bg-gradient-to-b from-red-400 to-red-400 p-3">
      <div className="bg-white rounded-full flex items-center px-3 py-2 gap-2">
        <FaSearch />
        <input
          type="text"
          placeholder="Search or ask a question"
          className="flex-1 outline-none text-sm"
        />
        <FaCamera />
        <FaMicrophone />
      </div>
    </div>
  );
};

export default Searchbar;
