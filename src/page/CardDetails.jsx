import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoAddOutline } from "react-icons/io5";
import { RxDividerHorizontal } from "react-icons/rx";

const CardDetails = () => {
  const { id } = useParams();
  const [val, setVal] = useState(false);
  const [vals, setVals] = useState(false);
  const localDatas = useSelector((state) => state.createdRedux.localDatas);
  const currentLocalDatas = localDatas?.find(
    (card) => String(card.id) === String(id)
  );
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
        <div className="w-full mt-3 flex gap-7 ">
          <div className="w-[76vh] h-[77vh] bg-zinc-800 rounded-lg overflow-hidden p-4  ">
            <img
              className="w-full h-full object-cover rounded-xl "
              src={currentLocalDatas?.imagesUrl}
            />
          </div>
          <div className="w-[76vh]    ">
            <div className="flex items-center justify-between mt-2 ">
              <h1 className="text-3xl font-bold leading-none tracking-tighter   ">
                {currentLocalDatas?.name}
              </h1>
              <h1 className="text-3xl font-bold text-[#78BB00] leading-none tracking-tight ">
                ₹{currentLocalDatas?.price}
              </h1>
            </div>
            <div className="mt-8 flex gap-5 ">
              <button className="bg-[#78BB00] px-6 font-semibold leading-none rounded py-3.5 text-black transition-colors duration-300 ease-in-out shadow-md hover:bg-[rgba(121,187,0,0.92)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#78BB00] focus:ring-offset-2 active:scale-95">
                Add to Cart
              </button>
              <button className="border border-zinc-300 px-8 font-semibold leading-none rounded py-3.5 text-white bg-transparent relative overflow-hidden group">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  Buy Now
                </span>
                <span className="absolute inset-0 left-0 w-0 group-hover:w-full bg-white transition-all duration-500 ease-in-out z-0"></span>
              </button>
            </div>
            <h1 className="text-2xl capitalize tracking-tight leading-none mt-8 font-semibold">
              description
            </h1>
            <p className="text-md mt-4 text-zinc-300">
              {currentLocalDatas?.description}
            </p>

            <div className="flex items-center mt-4.5 gap-4 ">
              <span className="w-1.5 h-1.5 bg-white mt-1 block rounded-full"></span>
              <h1 className="font-semibold capitalize font-semibol ">
                type :{" "}
                <span className="text-zinc-400">{currentLocalDatas?.type}</span>
              </h1>
            </div>

            <div className="flex items-center mt-1.5 gap-4 ">
              <span className="w-1.5 h-1.5 bg-white mt-1 block rounded-full"></span>
              <h1 className="font-semibold capitalize font-semibol ">
                flavor :{" "}
                <span className="text-zinc-400">
                  {currentLocalDatas?.flavor}
                </span>
              </h1>
            </div>

            <div className="flex items-center mt-1.5 gap-4 ">
              <span className="w-1.5 h-1.5 bg-white mt-1 block rounded-full"></span>
              <h1 className="font-semibold capitalize font-semibol ">
                pack size :{" "}
                <span className="text-zinc-400">
                  {currentLocalDatas?.packSize}
                </span>
              </h1>
            </div>

            <div className="border-t border-b px-3 py-4 mt-8 border-zinc-700">
              <div className=" flex items-center justify-between  ">
                <h1 className="text-md capitalize font-semibold tracking-tight ">
                  shipping
                </h1>
                <button
                  onClick={() => setVal(!val)}
                  className="text-xl mt-1 font-semibold cursor-pointer transition-transform duration-300"
                  aria-label={val ? "Hide shipping info" : "Show shipping info"}
                >
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      val ? "rotate-180 text-green-400" : "rotate-0 text-white"
                    }`}
                  >
                    {val ? <RxDividerHorizontal /> : <IoAddOutline />}
                  </span>
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  val ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-sm text-zinc-400 transition-opacity duration-500">
                  🚚 Ships in 2-3 business days. Free shipping on orders over
                  ₹500.
                </p>
              </div>
            </div>

            <div className=" border-b px-3 py-4  border-zinc-700">
              <div className=" flex items-center justify-between  ">
                <h1 className="text-md capitalize font-semibold tracking-tight ">
                  Reviews
                </h1>
                <button
                  onClick={() => setVals(!vals)}
                  className="text-xl mt-1 font-semibold cursor-pointer transition-transform duration-300"
                  aria-label={vals ? "Hide shipping info" : "Show shipping info"}
                >
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      vals ? "rotate-180 text-green-400" : "rotate-0 text-white"
                    }`}
                  >
                    {vals ? <RxDividerHorizontal /> : <IoAddOutline />}
                  </span>
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  vals ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-sm text-zinc-400 transition-opacity duration-500">
                ⭐️⭐️⭐️⭐️⭐️ — "Absolutely love the flavor and the energy boost!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-1 mt-11 mb-8 ">
        <h1 className="text-2xl capitalize font-semibold tracking-tight leading-none ">related drinks</h1>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;