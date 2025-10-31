import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Drinks = () => {
  const [isOpen, setIsOpen] = useState(true);

  const Cards = [
    {
      id: 1,
      name: "Monster Original",
      flavor: "Original",
      type: "Regular",
      packSize: "Single cane",
      price: 99,
      volume: "473ml",
      caffeineContent: "160mg",
      imagesUrl: "/product-1.webp",
      available: true,
      rating: 4.6,
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caffeine",
        "Taurine",
        "Ginseng Extract",
      ],
      description:
        "The original green Monster Energy drink delivers a powerful punch with a smooth flavor.",
      reviews: ["Perfect pre-workout drink!", "Strong and tasty."],
    },
    {
      id: 2,
      name: "Monster Mango Loco",
      flavor: "Mango Loco",
      type: "Juice",
      packSize: "Pack of 4",
      price: 200,
      volume: "473ml",
      caffeineContent: "150mg",
      imagesUrl: "/product-2.webp",
      available: true,
      rating: 4.8,
      ingredients: [
        "Mango Juice",
        "Apple Juice",
        "Guava",
        "Caffeine",
        "Taurine",
      ],
      description:
        "Mango Loco is a heavenly blend of exotic juices mixed with Monster’s energy blend.",
      reviews: ["Love the tropical vibe!", "My go-to energy juice!"],
    },
    {
      id: 3,
      name: "Monster Ultra Sunrise",
      flavor: "Ultra Sunrise",
      type: "Ultra",
      packSize: "Pack of 12",
      price: 299,
      volume: "355ml",
      caffeineContent: "140mg",
      imagesUrl: "/product-3.webp",
      available: true,
      rating: 4.7,
      ingredients: [
        "Carbonated Water",
        "Citric Acid",
        "Natural Flavors",
        "Caffeine",
        "Ginseng Extract",
      ],
      description:
        "Crisp citrus flavor with zero sugar, designed for early risers and grind chasers.",
      reviews: ["Refreshing and no sugar!", "Amazing start to the day."],
    },
    {
      id: 4,
      name: "Monster Zero Sugar",
      flavor: "Zero Sugar",
      type: "Zero Sugar",
      packSize: "Single cane",
      price: 90,
      volume: "473ml",
      caffeineContent: "140mg",
      imagesUrl: "/product-4.webp",
      available: true,
      rating: 4.3,
      ingredients: [
        "Carbonated Water",
        "Erythritol",
        "Sucralose",
        "Caffeine",
        "Taurine",
      ],
      description:
        "All the buzz, none of the sugar. Classic Monster energy with a guilt-free formula.",
      reviews: ["Tastes just like the original!", "Love the zero calories."],
    },
    {
      id: 5,
      name: "Monster Watermelon",
      flavor: "Watermelon",
      type: "Ultra",
      packSize: "Pack of 4",
      price: 160,
      volume: "355ml",
      caffeineContent: "150mg",
      imagesUrl: "/product-5.webp",
      available: true,
      rating: 4.5,
      ingredients: [
        "Watermelon Juice",
        "Carbonated Water",
        "Caffeine",
        "B Vitamins",
      ],
      description:
        "Bright and bold watermelon flavor with a clean, refreshing finish and zero sugar.",
      reviews: ["So fresh!", "Summer vibes in a cane."],
    },
    {
      id: 6,
      name: "Monster Hydro",
      flavor: "Watermelon",
      type: "Hydro",
      packSize: "Single cane",
      price: 110,
      volume: "650ml",
      caffeineContent: "188mg",
      imagesUrl: "/product-6.webp",
      available: true,
      rating: 4.2,
      ingredients: ["Water", "Electrolytes", "Caffeine", "L-Carnitine"],
      description:
        "Hydration meets energy. Ideal for athletes needing a fuel + hydration boost.",
      reviews: ["Hydrating and energetic!", "Great after workout."],
    },
    {
      id: 7,
      name: "Monster Rehab",
      flavor: "Mango Loco",
      type: "Rehab",
      packSize: "Pack of 12",
      price: 300,
      volume: "473ml",
      caffeineContent: "160mg",
      imagesUrl: "/product-9.webp",
      available: false,
      rating: 4.4,
      ingredients: ["Tea Extract", "Mango Juice", "Electrolytes", "Caffeine"],
      description:
        "Non-carbonated drink with electrolytes and tea-based mango flavor. Rehydrates and energizes.",
      reviews: ["Mellow and effective!", "Great post-run drink."],
    },
    {
      id: 8,
      name: "Monster Ultra Sunrise",
      flavor: "Ultra Sunrise",
      type: "Ultra",
      packSize: "Pack of 4",
      price: 300,
      volume: "355ml",
      caffeineContent: "140mg",
      imagesUrl: "/product-8.webp",
      available: true,
      rating: 4.7,
      ingredients: ["Carbonated Water", "Caffeine", "Sucralose", "Citric Acid"],
      description:
        "Zero sugar citrus-flavored energy drink in a budget-friendly 4-pack.",
      reviews: ["Good value!", "Crisp flavor, no calories."],
    },
  ];

  const CardData = [
    {
      id: 9,
      name: "Monster Juice Punch",
      flavor: "Mango Loco",
      type: "Juice",
      packSize: "Pack of 12",
      price: 310,
      volume: "473ml",
      caffeineContent: "160mg",
      imagesUrl: "/product-10.webp",
      available: true,
      rating: 4.6,
      ingredients: ["Mixed Juices", "Carbonated Water", "Caffeine", "Taurine"],
      description:
        "A fruity explosion with high-energy kick, combining flavor and performance.",
      reviews: ["My favorite flavor!", "Fruit punch for adults!"],
    },
    {
      id: 10,
      name: "Monster Regular OG",
      flavor: "Original",
      type: "Regular",
      packSize: "Single cane",
      price: 85,
      volume: "473ml",
      caffeineContent: "160mg",
      imagesUrl: "/product-11.webp",
      available: true,
      rating: 4.5,
      ingredients: ["Carbonated Water", "Sugar", "Caffeine", "Taurine"],
      description:
        "The OG flavor that started it all. Smooth, bold, and addictive.",
      reviews: ["Still the best!", "Classic for a reason."],
    },
  ];

  return (
    <div className="w-full min-h-screen py-1">
      <Navigation />
      <section className="w-full mt-19 min-h-[88vh] flex items-center ">
        <div className="w-[20%] min-h-[88vh]  font-[Kaushan Script] px-4 py-2 flex flex-col gap-4 ">
          <div className="w-full bg-zinc-700 px-3 py-3 rounded-lg ">
            <div className="flex items-center justify-between ">
              <h1 className="font-bold capitalize text-white text-xl font-[Kaushan Script] ">
                flavor
              </h1>
              <h1 className="text-sm hover:text-white cursor-pointer capitalize underline text-zinc-400 font-[Kaushan Script]  ">
                reset
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pizza"
                  className="accent-green-500"
                />
                Original
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="burger"
                  className="accent-green-500"
                />
                Mango Loco
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pasta"
                  className="accent-green-500"
                />
                Ultra Sunrise
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="sushi"
                  className="accent-green-500"
                />
                Zero Sugar
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="sushi"
                  className="accent-green-500"
                />
                Watermelon
              </label>
            </div>
          </div>

          <div className="w-full bg-zinc-700 px-3 py-3 rounded-lg ">
            <div className="flex items-center justify-between ">
              <h1 className="font-bold capitalize text-white text-xl font-[Kaushan Script] ">
                Type
              </h1>
              <h1 className="text-sm hover:text-white cursor-pointer capitalize underline text-zinc-400 font-[Kaushan Script]  ">
                reset
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pizza"
                  className="accent-green-500"
                />
                Regular
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="burger"
                  className="accent-green-500"
                />
                Zero Sugar
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pasta"
                  className="accent-green-500"
                />
                Ultra
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="sushi"
                  className="accent-green-500"
                />
                Juice
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="sushi"
                  className="accent-green-500"
                />
                Rehab
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="sushi"
                  className="accent-green-500"
                />
                Hydro
              </label>
            </div>
          </div>

          <div className="w-full bg-zinc-700 px-3 py-3 rounded-lg ">
            <div className="flex items-center justify-between ">
              <h1 className="font-bold capitalize text-white text-xl font-[Kaushan Script] ">
                Pack Size
              </h1>
              <h1 className="text-sm hover:text-white cursor-pointer capitalize underline text-zinc-400 font-[Kaushan Script]  ">
                reset
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pizza"
                  className="accent-green-500"
                />
                Single can
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="burger"
                  className="accent-green-500"
                />
                Pack of 4
              </label>
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  name="food"
                  value="pasta"
                  className="accent-green-500"
                />
                Pack of 12
              </label>
            </div>
          </div>

          <div className="w-full bg-zinc-700 px-3 py-3 rounded-lg ">
            <div className="flex items-center justify-between ">
              <h1 className="font-bold capitalize text-white text-xl font-[Kaushan Script] ">
                Price
              </h1>
              <h1 className="text-sm hover:text-white cursor-pointer capitalize underline text-zinc-400 font-[Kaushan Script]  ">
                reset
              </h1>
            </div>

            <div className="flex items-center justify-between flex-wrap mt-3 ">
              <button className="bg-[#78BB00] hover:bg-[#529455] font-semibold px-5 rounded-lg py-1.5 ">
                ₹50 - ₹99
              </button>
              <button className="bg-[#78BB00] hover:bg-[#529455] font-semibold px-5 rounded-lg py-1.5 ">
                ₹100 - ₹199
              </button>
              <button className="bg-[#78BB00] hover:bg-[#529455] font-semibold px-2.5 mt-1.5  rounded-lg py-1.5 ">
                ₹200 - ₹299
              </button>
              <button className="bg-[#78BB00] hover:bg-[#529455] font-semibold px-9 mt-2 rounded-lg py-1.5 ">
                ₹300 +
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] min-h-[115.7vh] px-3  ">
          <div className="w-full flex items-center justify-between ">
            <div className=" w-[50%]  h-53 flex items-start justify-center flex-col mt-2.5 ">
              <h1 className="text-4xl capitalize text-white font-[Poppins] font-semibold ">
                pure energy big discount
              </h1>
              <p className="text-white mt-2 text-xl font-[Poppins] ">
                Save up to 50% off on your first order
              </p>
              <div className="mt-3 flex gap-2 w-full ">
                <input
                  className="border border-zinc-400 w-[42%] rounded font-semibold px-2  py-1.5 outline-none text-white "
                  type="email"
                  placeholder="Your Email Address..."
                />
                <button className="bg-[#78BB00] cursor-pointer px-4  rounded-lg capitalize  font-[Poppins] ">
                  get coupon
                </button>
              </div>
            </div>
            <div className="w-[50%]  h-53 flex items-center justify-end   ">
              <div className="w-[20vh] h-[20vh] mr-3.5 ">
                <img
                  className="w-full h-full object-cover rounded-lg "
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs9xYUoN65O3g0X9X5QkfMgDng7TEvoA96XGFv8VniRE9rCA9Kxd4pN-_2gGwmGP2kDENm2uvWtW-A2M_WkQ6OXrzKN-cEekF11s_d0J4Vwj2RfaIjIgAylcY5InD7DtPo2zZUz7NjDEQ/s1600/Tickle_LasVegas_Cox_2011_077.jpg"
                  alt="images show only"
                />
              </div>
            </div>
          </div>

          <div className="w-full   ">
            <h1 className="text-2xl text-white font-semibold font-[Poppins] leading-none">
              Popular Products
            </h1>

            <div className="mt-5 flex gap-7 flex-wrap  ">
              {isOpen
                ? Cards.map((card) => (
                    <Link
                      to={`/drinks/${card.id}`}
                      className="group bg-zinc-800 rounded-lg relative px-2.5 pt-2.5 pb-1 w-[39vh] transition-shadow duration-300 shadow-amber-100 md hover:shadow-2xl hover:shadow-[#78BB00]/10 cursor-pointer transform transition-transform hover:scale-105"
                    >
                      <img
                        className="w-full h-[30vh] rounded-lg object-center object-cover "
                        src={card.imagesUrl}
                        alt="images show only"
                      />
                      <p className="text-md text-white bg-black bottom-[21%] left-[6%] inline px-3 rounded absolute py-1 ">
                        ₹{card.price}
                      </p>
                      <div className="flex items-center justify-between">
                        <h1 className="text-md text-white font-[Poppins] ">
                          {card.name}
                        </h1>
                        <span className="bg-white group-hover:bg-[#78BB00] mt-1.5 p-1 text-3xl rounded-full -mr-1 transition-colors duration-300">
                          <GoArrowUpRight />
                        </span>
                      </div>
                    </Link>
                  ))
                : CardData.map((card) => (
                    <Link
                      to={`/drinks/${card.id}`}
                      className="group bg-zinc-800 rounded-lg relative px-2.5 pt-2.5 pb-1 w-[39vh] transition-shadow duration-300 shadow-amber-100 md hover:shadow-2xl hover:shadow-[#78BB00]/10 cursor-pointer transform transition-transform hover:scale-105"
                    >
                      <img
                        className="w-full h-[30vh] rounded-lg object-center object-cover "
                        src={card.imagesUrl}
                        alt="images show only"
                      />
                      <p className="text-md text-white bg-black bottom-[21%] left-[6%] inline px-3 rounded absolute py-1 ">
                        ₹{card.price}
                      </p>
                      <div className="flex items-center justify-between">
                        <h1 className="text-md text-white font-[Poppins] ">
                          {card.name}
                        </h1>
                        <span className="bg-white group-hover:bg-[#78BB00] mt-1.5 p-1 text-3xl rounded-full -mr-1 transition-colors duration-300">
                          <GoArrowUpRight />
                        </span>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 flex items-center justify-center gap-3 ">
        <button
          className={`ml-72 text-xl rounded-lg px-3 py-1 text-white ${
            isOpen ? "bg-[#78BB00]" : "bg-zinc-900"
          }`}
          onClick={() => setIsOpen(true)}
        >
          1
        </button>
        <button
          className={`text-xl rounded-lg px-3 py-1 text-white ${
            !isOpen ? "bg-[#78BB00]" : "bg-zinc-900"
          }`}
          onClick={() => setIsOpen(false)}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Drinks;
