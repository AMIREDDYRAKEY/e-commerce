import React from "react";
import img1 from "../assets/Pay.jpg";

const Header = () => {
  const shortcuts = [
    { name: "Pay", img: img1 },
    { name: "Fresh", img: img1 },
    { name: "Bazaar", img: img1 },
    { name: "MX Player", img: img1 },
    { name: "Pharmacy", img: img1 },
    { name: "Deals", img: img1 },
  ];

  return (
    <div className="bg-gradient-to-b from-red-600 to-red-400 p-5">

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto">

        {/* MOBILE — horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory md:hidden">
          {shortcuts.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[78px] bg-white rounded-xl px-3 py-2
              flex flex-col items-center text-[11px] shadow-sm"
            >
              <img src={item.img} alt={item.name} className="h-9 w-9 mb-1 object-contain" />
              <p className="text-center leading-tight">{item.name}</p>
            </div>
          ))}
        </div>

        {/* TABLET / DESKTOP — grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {shortcuts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl py-3 px-4 shadow-sm
              flex flex-col items-center text-sm
              hover:shadow-md transition"
            >
              <img src={item.img} alt={item.name} className="h-10 w-10 mb-1 object-contain" />
              <p className="text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Header;
