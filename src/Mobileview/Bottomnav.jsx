import React, { useState } from "react";
import { FaHome, FaUser, FaWallet, FaShoppingCart, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Bottomnav = () => {

  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm z-50">

      {/* HOME */}
      <button
        onClick={() => {
          setActive("home");
          navigate("/");
        }}
        className={`flex flex-col items-center ${
          active === "home" ? "text-teal-600 font-semibold" : "text-gray-700"
        }`}
      >
        <FaHome />
        Home
      </button>

      {/* YOU */}
      <button
        onClick={() => {
          setActive("you");
          navigate("/users");
        }}
        className={`flex flex-col items-center ${
          active === "you" ? "text-teal-600 font-semibold" : "text-gray-700"
        }`}
      >
        <FaUser />
        You
      </button>

      {/* WALLET */}
      <button
        onClick={() => setActive("wallet")}
        className={`flex flex-col items-center ${
          active === "wallet" ? "text-teal-600 font-semibold" : "text-gray-700"
        }`}
      >
        <FaWallet />
        Wallet
      </button>


      {/* CART */}
      <button
        onClick={() => {setActive("cart"); navigate('/cart');}}
        className={`flex flex-col items-center ${
          active === "cart" ? "text-teal-600 font-semibold" : "text-gray-700"
        }`}
      >
        <FaShoppingCart />
        Cart
      </button>

      {/* MENU */}
      <button
          onClick={() => {setActive("menu"); navigate('/menu');}}
        className={`flex flex-col items-center ${
          active === "menu" ? "text-teal-600 font-semibold" : "text-gray-700"
        }`}
      >
        <FaBars />
        Menu
      </button>

    </div>
  );
};

export default Bottomnav;
