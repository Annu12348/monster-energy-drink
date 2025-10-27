import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="w-full h-20 px-8 flex items-center  justify-between absolute z-60 ">
      <img className="h-11 object-cover  " src="./download.png" />

      <div className="flex items-center justify-center gap-7 bg-[#d4d4d453] border-1 border-[#e19494] px-4 py-2 rounded-full ">
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
          to="/sign-up"
          className="bg-[#90CF23] px-5 rounded-full font-semibold capitalize py-1.5 "
        >
          sign in
        </Link>
        <span className="bg-[#90CF23] p-1.5 rounded-full text-xl ">
          <FaShoppingBag />
        </span>
      </div>
    </div>
  );
};

export default Navigation;
