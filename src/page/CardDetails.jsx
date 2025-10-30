import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const CardDetails = () => {
  return (
    <div className="text-white w-full min-h-screen py-1 ">
      <Navigation />
      <div className="px-50 mt-23  ">
        <div className="flex items-center capitalize gap-1   ">
          <Link
            className="text-sm text-blue-700 hover:underline font-[Kaushan Script] font-light  "
            to="/"
          >
            home
          </Link>
          <span className="text-sm text-zinc-500 ">/</span>
          <Link
            className="text-sm text-blue-700 hover:underline font-[Kaushan Script] font-light  "
            to="/drinks"
          >
            drinks
          </Link>
          <span className="text-sm text-zinc-500 ">/</span>
          <h1 className="text-sm font-normal   font-[Kaushan Script]  ">
            monster original
          </h1>
        </div>
        <div className="w-full   mt-3 ">
          <div className="w-[76vh] h-[77vh] bg-zinc-800 rounded-lg  ">
          <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
