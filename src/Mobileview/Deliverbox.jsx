import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Deliverbox = () => {
  return (
    <div className="bg-gradient-to-b from-red-200 to-red-200  mx-3 mt-2 px-2 py-2 rounded-xl flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt />
        Deliver to 516175
      </div>
      <button className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
        Join Prime
      </button>
    </div>
  );
};

export default Deliverbox;
