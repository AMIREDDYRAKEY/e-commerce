import React from "react";
import { FaHome, FaUser, FaWallet, FaShoppingCart, FaBars } from "react-icons/fa";

const Bottomnav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm z-50">
      <div className="flex flex-col items-center text-teal-600"><FaHome />Home</div>
      <div className="flex flex-col items-center"><FaUser />You</div>
      <div className="flex flex-col items-center"><FaWallet />Wallet</div>
      <div className="flex flex-col items-center"><FaShoppingCart />Cart</div>
      <div className="flex flex-col items-center"><FaBars />Menu</div>
    </div>
  );
};

export default Bottomnav;
