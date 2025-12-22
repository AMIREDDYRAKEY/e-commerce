import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white mt-16">
      {/* Back to top */}
      <div className="bg-[#37475A] text-center py-3 text-sm cursor-pointer hover:bg-[#485769]">
        Back to top
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Get to Know Us */}
        <div>
          <h3 className="font-semibold mb-3">Get to Know Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">About Amazon</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
            <li className="hover:underline cursor-pointer">Amazon Science</li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-semibold mb-3">Connect with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FiFacebook /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FiTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2 hover:underline cursor-pointer">
              <FiInstagram /> Instagram
            </li>
          </ul>
        </div>

        {/* Make Money with Us */}
        <div>
          <h3 className="font-semibold mb-3">Make Money with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Sell on Amazon</li>
            <li className="hover:underline cursor-pointer">Sell under Amazon Accelerator</li>
            <li className="hover:underline cursor-pointer">Protect and Build Your Brand</li>
            <li className="hover:underline cursor-pointer">Amazon Global Selling</li>
            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
            <li className="hover:underline cursor-pointer">Fulfilment by Amazon</li>
            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            <li className="hover:underline cursor-pointer">Amazon Pay on Merchants</li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className="font-semibold mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">
              Recalls and Product Safety Alerts
            </li>
            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
            <li className="hover:underline cursor-pointer">Amazon App Download</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
      </div>

      {/* Language & country */}
      <div className="border-t border-gray-600 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="h-8 bg-white p-1 rounded"
        />
        <button className="border border-gray-400 px-4 py-1 text-sm rounded hover:bg-gray-700">
          English
        </button>
        <button className="border border-gray-400 px-4 py-1 text-sm rounded hover:bg-gray-700">
          India
        </button>
      </div>

      {/* Bottom */}
      <div className="bg-[#131A22] text-center text-xs text-gray-400 py-4">
        <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
        <p className="mt-1">
          © 1996–2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
