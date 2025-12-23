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
    <div className="bg-[#232f3e] h-[45px] text-white text-[14px] font-semibold flex items-center gap-5  justify-start p-3">
      <div className=" flex items-center gap-5  justify-start">
        
        {/* All Menu */}
        <div className="flex items-center gap-2 font-semibold cursor-pointer hover:text-orange-500 ">
          <FaBars />
          <span>All</span>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="whitespace-nowrap cursor-pointer hover:text-orange-500  "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menuitems;
