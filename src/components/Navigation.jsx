import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

const Navigation = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  return (
    <div className="w-full md:h-20 h-15 md:px-8 px-2 flex items-center  justify-between absolute z-60 ">
      <img className="md:h-11 h-9 object-cover  " src="https://ik.imagekit.io/wr6ziyjiu/monster-logo.png?updatedAt=1753179997542" />

      <div className="md:flex hidden   items-center justify-center gap-7  border-1 border-[#e19494] px-4 py-1.5 rounded-full ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          store
        </NavLink>
        <NavLink
          to="/drinks"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          drinks
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          orders
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          contact
        </NavLink>
        <NavLink
          to="/collab"
          className={({ isActive }) =>
            `text-md font-semibold capitalize ${
              isActive
                ? "text-black bg-[#EDF0E6] px-4 rounded-full py-1"
                : "text-white"
            }`
          }
        >
          collab
        </NavLink>
      </div>

      <div className="flex items-center justify-center gap-3 ">
        <Link
          to="https://stirred-tick-94.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fmonster-energy-drink-frontend.onrender.com%2F"
          className="bg-[#90CF23] md:px-5 px-3 rounded-full font-semibold capitalize py-1.5 "
        >
          sign in
        </Link>
        <span className="bg-[#90CF23] p-1.5 rounded-full text-xl ">
          <FaShoppingBag />
        </span>
        <button className="text-2xl text-white font-semibold ">
          <FiAlignJustify />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
