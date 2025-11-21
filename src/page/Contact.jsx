import React, { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import { IoStar } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import gsap from "gsap";

const Contact = () => {
  const movingtextRef1 = useRef();
  const movingtextRef2 = useRef();
  console.log(movingtextRef1.current)

  useEffect(() => {
    gsap.to(movingtextRef1.current, {
      x: "100%",
      repeat: -1,
      duration: 15
    })
  },[])

  return (
    <div className="w-full min-h-screen py-1 overflow-hidden">
      <Navigation />
      <div className="w-full   mt-20 ">
        <div
      
          id="mainScrollBar"
          className="w-full bg-[#9AE600] gap-17 flex overflow-x-auto  overflow-y-hidden"
        >
          <div  ref={movingtextRef1}  className="w-ful  p-1 flex gap-17 pb-4 ">
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                with
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                monster
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                unleast
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                the
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                beast
              </hi>
            </div>
          </div>
          <div  ref={movingtextRef1} className="w-ful p-1 flex gap-17 pb-4 ">
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                with
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                monster
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                unleast
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                the
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                beast
              </hi>
            </div>
          </div>
        </div>

        <div className="w-full p-1 mt-10   px-35 flex items-center justify-between  ">
          <div className="w-[64%] p-1  ">
            <h1 className="text-4xl text-white w-[55%] font-semibold ">
              Join Us in a Creating Something Greate
            </h1>
            <div className="mt-5">
              <form className="w-full">
                <div className="w-full flex items-center justify-between  ">
                  <input
                    className="text-zinc-500 outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-[49%]"
                    type="text"
                    placeholder="first name*"
                  />
                  <input
                    className="text-zinc-500 outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-[49%]"
                    type="text"
                    placeholder="last name*"
                  />
                </div>
                <div className="w-full flex mt-4 items-center justify-between  ">
                  <input
                    className="text-zinc-500 outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-[49%]"
                    type="email"
                    placeholder="email*"
                  />
                  <input
                    className="text-zinc-500 outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-[49%]"
                    type="number"
                    placeholder="phone number*"
                  />
                </div>
                <input
                  className="text-zinc-500 outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-full mt-4"
                  type="text"
                  placeholder="subject*"
                />
                <textarea
                  rows={10}
                  className="text-zinc-500 resize-none outline-none font-semibold rounded px-2 py-3 text-md capitalize  tracking-tight leading-none bg-zinc-200 w-full mt-4"
                  type="text"
                  placeholder="message*"
                />
                <div className="mt-4 flex items-center gap-7">
                  <button
                    type="submit"
                    className="text-white  bg-[#90CF23] py-3 px-5 text-md capitalize font-semibold rounded  cursor-pointer"
                  >
                    send message
                  </button>
                  <Link
                    to="/"
                    className="text-white bg-zinc-700 p-3.5 rounded-full transition-transform duration-200 hover:scale-95 text-xl"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="w-[32%]  py-4 h-[77.8vh]   ">
            <div className="w-full py-13 px-6 hover:rotate-10 transition-transform duration-300   bg-[#9AE600] h-[88.5%] rounded-xl relative ">
              <span className="text-9xl text-white p-1 rounded-full bg-black absolute -top-7 -right-12">
                <MdArrowOutward />
              </span>
              <div>
                <h1 className="text-xl capitalize font-bold">address</h1>
                <p className="text-md mt-1 font-normal capitalize ">
                  1 monster way corona
                </p>
                <p className="text-md capitalize font-normal">
                  corona, CA 92879
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-xl capitalize font-bold">contact</h1>
                <p className="text-md mt-1 font-normal capitalize ">
                  phone: 1-866-322-4466
                </p>
                <p className="text-md capitalize font-normal">
                  email: example@email.com
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-xl capitalize font-bold">open time</h1>
                <p className="text-md mt-1 font-normal capitalize ">
                  mon - fri: 8AM - 5PM PST
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-xl capitalize font-bold">stay connected</h1>
                <div className="mt-3 flex items-center gap-3">
                  <Link
                    to="https://www.facebook.com/MonsterEnergy"
                    className="text-2xl"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://x.com/MonsterEnergy"
                    className="text-2xl "
                  >
                    <IoLogoTwitter />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/monsterenergy/"
                    className="text-2xl"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/monsterenergy"
                    className="text-2xl"
                  >
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={movingtextRef2}
          id="mainScrollBar1"
          className="w-full flex bg-[#9AE600]  mt-10 gap-17 overflow-x-auto overflow-y-hidden"
        >
          <div className="w-ful  p-1 flex gap-17 pb-4 ">
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                with
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                monster
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                unleast
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                the
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                beast
              </hi>
            </div>
          </div>
          <div className="w-ful  p-1 flex gap-17 pb-4 ">
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                with
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                monster
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                unleast
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                the
              </hi>
            </div>
            <div className="flex items-center  gap-4">
              <span className="text-3xl mt-1">
                <IoStar />
              </span>
              <hi className="text-4xl font-bold tracking-tight leading-none uppercase  ">
                beast
              </hi>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
