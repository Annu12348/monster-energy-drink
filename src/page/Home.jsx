import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import { FaRegUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";

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

  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;

    // 🔥 1) Content duplicate for perfect infinite loop
    const clone = element.innerHTML;
    element.innerHTML += clone;

    // 🔥 2) GSAP animation (Smooth, Infinite, No Jitter)
    gsap.to(element, {
      x: "-50%", // Half width because content is doubled
      duration: 1, // Slow + Premium feeling (Industry standard)
      ease: "none", // Linear smooth scroll
      repeat: -1, // Infinite
    });
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
        <div className="w-full py-1 px-8   absolute top-35 left-0 z-10 md:flex hidden items-center justify-between">
          <div className="">
            <h1 className="text-5xl w-[60%] text-white tracking-tight font-[Kaushan Script]">
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
        <div className="w-full py-1 px-8  absolute top-100  left-0 z-10 md:flex hidden items-center justify-between">
          <div className="">
            <Link
              to="https://www.facebook.com/MonsterEnergy"
              target="_blank"
              className="text-xl text-zinc-100 "
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              className="mt-11 block text-xl text-zinc-400 "
            >
              <FaXTwitter />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/monsterenergy/"
              className="mt-11 block text-xl text-zinc-300 "
            >
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/monsterenergy"
              className="mt-11 block text-xl text-zinc-300 "
            >
              <AiOutlineYoutube />
            </Link>
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
        <div className="w-full px-2 py-8   absolute bottom-0 flex md:hidden items-center justify-center flex-col ">
          <h1 className="text-2xl w-[60%] text-white leading-9 tracking-tight font-[Kaushan Script] relative">
            Ignite your Pulse With{" "}
            <span className="font-[Brush] text-3xl    text-[#9AE600] ">
              Caffeine
            </span>
          </h1>

          <div className="w-full flex items-center justify-cente px-16 mt-5  gap-8 ">
            <Link
              to="https://www.facebook.com/MonsterEnergy"
              target="_blank"
              className="text-xl text-zinc-100 "
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/MonsterEnergy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              className=" block text-xl text-zinc-400 "
            >
              <FaXTwitter />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/monsterenergy/"
              className=" block text-xl text-zinc-300 "
            >
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/monsterenergy"
              className=" block text-xl text-zinc-300 "
            >
              <AiOutlineYoutube />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full   h-screen flex flex-col items-center justify-center ">
        <h1 className="text-white font-[Brush] text-8xl  w-[50%] text-center ">
          STIR UP YOUR FEARLESS PAST AND
        </h1>
        <h1 className="text-black border-8  border-black px-4 bg-[#78BB00] text-8xl absolute -rotate-8 font-[Brush]">
          FIRE UP
        </h1>
        <h1 className="text-white font-[Brush] text-8xl w-[70%] mt-25 text-center ">
          YOUR FUTURE WITH EVERY GULP OF PERFECT CAFFINE
        </h1>
      </section>

      <section className="w-full   min-h-screen py-3  relative ">
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

        <div className="w-full overflow-hidden mt-30  p-2">
          <div ref={marqueeRef} className="flex gap-10 whitespace-nowrap">
            {CardData.map((card) => (
              <div
                key={card.title}
                className="w-[43vh] h-[62vh] rounded-2xl inline-block flex-shrink-0"
              >
                <div className="w-full h-[84%] rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={card.imageUrl}
                    alt={card.title}
                  />
                </div>

                <h1 className="text-xl capitalize text-white font-[Poppins] text-center mt-3">
                  {card.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full h-[88vh] relative bg-[#E2C5CA] rounded-t-2xl flex items-start  justify-center overflow-hidden  ">
        <img
          className="w-[45%] absolute -top-3  -rotate-16 -left-45  object-cover "
          src="/labubu.webp"
          alt="images show only"
        />

        <div className="w-[60vh] p-3 mr-24   mt-29 flex flex-col items-center justify-center ">
          <h1 className="flex px-5 rounded-full  py-2 items-center justify-center gap-3 font-[Kaushan Script] font-bold  bg-[#c597cf] ">
            <span className="text-xl mt-0.5 text-black  ">
              <BsBrightnessHigh />
            </span>
            BOOST ENERYGY
          </h1>
          <h1 className="mt-6 text-center leading-14 font-[Brush] text-6xl ">
            Turning fantasies into reality.
          </h1>
          <p className="text-center font-[Brush]  w-[80%] mt-5 text-xl ">
            The full strength of monster is comes from naturally infused
            taurine.
          </p>
          <button className="text-xl mt-5 font-[Brush] capitalize border flex items-center justify-center gap-6 px-6 py-2 rounded-full ">
            drink it up
            <IoIosArrowRoundForward />
          </button>
        </div>

        <img
          className="w-[44%] absolute -top-4  rotate-16 -right-24  object-cover "
          src="/labubu.webp"
          alt="images show only"
        />
      </footer>
    </div>
  );
};

export default Home;
//5:50 to 8:40 = 2:50
//10:00 to 11:40 = 1:40
//2:18 to 3:18 = 1:00
//7:00 to
// 5Hourse 30Minat;
