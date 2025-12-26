import { FaBars } from "react-icons/fa";

const Menuitems = () => {
  const menuItems = [
    "Fresh",
    "MX Player",
    "Sell",
    "Bestsellers",
    "Mobiles",
    "Today's Deals",
    "Customer Service",
    "Prime",
    "New Releases",
    "Amazon Pay",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
  ];

  return (
    <div className="bg-[#232f3e] h-[45px] text-white text-[14px] font-semibold flex items-center p-3">

      {/* Scrollable container on small screens */}
      <div
        className="
          flex items-center gap-5 
          justify-start
          w-full
          overflow-x-auto
          scrollbar-hide
          whitespace-nowrap
        "
      >
        {/* All Menu */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
          <FaBars />
          <span>All</span>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-orange-500"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menuitems;
