import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#131921] text-white px-4 py-2 flex items-center justify-between gap-4 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold cursor-pointer">
          amaz<span className="text-orange-400">on</span>
        </h1>
      </div>

      {/* Location */}
      <div className="hidden md:flex items-center gap-1 text-sm">
        <FaMapMarkerAlt size={18} />
        <div>
          <p className="text-gray-300 text-xs">Deliver to</p>
          <p className="font-bold">India</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-3xl">
        <input
          type="text"
          placeholder="Search Amazon"
          className="w-full px-3 py-2 text-black outline-none rounded-l-md"
        />
        <button className="bg-orange-400 px-4 rounded-r-md">
          <FaSearch className="text-black" />
        </button>
      </div>

      {/* Desktop Right Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <div>
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        <div>
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1 font-bold">
          <FaShoppingCart size={20} />
          <span>Cart</span>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#131921] text-white flex flex-col md:hidden shadow-lg z-50">
          <div className="flex flex-col gap-4 p-4 border-b border-gray-700">
            <div>
              <p className="text-xs text-gray-300">Hello, sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>
            <div>
              <p className="text-xs text-gray-300">Returns</p>
              <p className="font-bold">& Orders</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <FaShoppingCart size={20} />
              <span>Cart</span>
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt size={18} />
              <p className="font-bold">India</p>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
