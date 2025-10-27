import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { FaRegUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Home = () => {
  const [timer, setTimer] = useState("");
  const CardData = [
    {
      imageUrl: "product-1.webp",
      title: "Original",
    },
    {
      imageUrl: "product-2.webp",
      title: "mango loco",
    },
    {
      imageUrl: "product-3.webp",
      title: "sunrise",
    },
    {
      imageUrl: "product-4.webp",
      title: "zero sugar",
    },
    {
      imageUrl: "product-5.webp",
      title: "watermelon",
    },
    {
      imageUrl: "product-6.webp",
      title: "hydro",
    },
    {
      imageUrl: "product-7.webp",
      title: "blueBarry",
    },
    {
      imageUrl: "product-8.webp",
      title: "mnonster ultra",
    },
  ];

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTimer(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full min-h-screen relative  ">
      <Navigation />
      <section className="w-full h-screen object-cover relative">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/video.webm"
        />
        <div className="w-full py-1 px-8   absolute top-35 left-0 z-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl   w-[60%] text-white tracking-tight font-[Kaushan Script]">
              Ignite your Pulse with{" "}
              <span className="font-[Brush] text-6xl  text-[#9AE600] ">
                Caffeine
              </span>
            </h1>
            <h5 className="text-white capitalize font-semibold text-xl mt-1 mb-3 ">
              monster energy
            </h5>
            <button className="text-white mt-2 flex items-center justify-center gap-2 capitalize font-semibold  border-1 border-[#5b5151] px-4 rounded-full py-1.5 ">
              <FaRegUser />
              shop now
            </button>
          </div>
          <div className="flex items-center gap-2 text-white font-[Poppins] ">
            {timer &&
              (() => {
                const [hms, ampm] = timer.split(" ");
                const [hh, mm, ss] = hms.split(":");
                return (
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center justify-center">
                      <span className=" w-8 h-8 pt-0.5 bg-[#706b6b]  flex items-center justify-center rounded-full border-2 border-zinc-400 text-sm  ">
                        {hh}
                      </span>
                    </div>
                    <span className="  text-xl  ">:</span>
                    <div className="flex flex-col items-center justify-center">
                      <span className=" w-8 h-8 pt-0.5 flex items-center justify-center rounded-full border-2 border-zinc-400 text-sm  ">
                        {mm}
                      </span>
                    </div>
                    <span className="  text-xl  ">:</span>
                    <div className="flex flex-col items-center justify-center">
                      <span className=" w-8 h-8 pt-0.5  flex items-center justify-center rounded-full border-2 border-zinc-400 text-sm  ">
                        {ss}
                      </span>
                    </div>
                    <span className="text-sm ">{ampm}</span>
                  </div>
                );
              })()}
          </div>
        </div>

        <div className="w-full py-1 px-8  absolute top-100  left-0 z-10 flex items-center justify-between">
          <div className="">
            <span className="text-xl text-zinc-100 ">
              <FaFacebookF />
            </span>
            <span className="mt-11 block text-xl text-zinc-400 ">
              <FaXTwitter />
            </span>
            <span className="mt-11 block text-xl text-zinc-300 ">
              <FaInstagram />
            </span>
            <span className="mt-11 block text-xl text-zinc-300 ">
              <AiOutlineYoutube />
            </span>
          </div>

          <div className="flex flex-col items-end ">
            <img
              className="h-20 object-cover mb-1   "
              src="https://ik.imagekit.io/wr6ziyjiu/fourPerson.png?updatedAt=1753179997696"
              alt="images show only"
            />
            <video
              className="w-[35vh]  "
              autoPlay
              loop
              muted
              src="https://ik.imagekit.io/wr6ziyjiu/thumbnail-video.mp4/ik-video.mp4?updatedAt=1753179999146"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col items-center justify-center ">
        <h1 className="text-white font-[Brush] text-8xl w-[50%] text-center ">
          STIR UP YOUR FEARLESS PAST AND
        </h1>
        <h1 className="text-white border-8 border-black px-4 bg-[#78BB00] text-8xl absolute -rotate-8 font-[Brush]">
          FIRE UP
        </h1>
        <h1 className="text-white font-[Brush] text-8xl w-[70%] mt-25 text-center ">
          YOUR FUTURE WITH EVERY GULP OF PERFECT CAFFINE
        </h1>
      </section>

      <section className="w-full  min-h-screen py-3  relative ">
        <div className="px-[20vh] ">
          <h1 className="text-8xl leading-none uppercase font-[Brush] text-white ">
            we have
          </h1>
          <h1 className="text-7xl  px-6 top-[11.5%] left-[16.5%]  z-10 -rotate-6  absolute text-black font-[Brush] bg-[#78BB00] ">
            Freaking
          </h1>
          <h1 className="text-8xl  flex  items-center gap-2  leading-none font-[Kaushan Script] italic text-white font-light ">
            08{" "}
            <span className="font-[Brush] text-8xl block absolute left-[15.5%] top-[19%]  ">
              Flavours
            </span>
          </h1>
        </div>

        <div className="w-full mt-39 flex gap-9 flex-nowrap overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
          <div className="w-full flex gap-12 flex-nowrap">
            {CardData.map((card, idx) => (
              <div
                key={idx}
                className="h-[64vh] w-[42vh] rounded-2xl flex-shrink-0"
              >
                <div className="w-full bg-blue-500 overflow-hidden h-[80%] rounded-2xl">
                  <img
                    className="w-full h-full object-cover"
                    src={card.imageUrl}
                    alt="images only show"
                  />
                </div>
                <h1 className="font-[Kaushan Script] mt-4 text-center font-normal capitalize text-white text-xl">
                  {card.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-[84vh] bg-[#E2C5CA] rounded-t-2xl  "></section>
    </div>
  );
};

export default Home;
