import { GiHamburger } from "react-icons/gi";
import React, { useState } from "react";
import SinglePizzaCart from "./SinglePizzaCart";
import { Link } from "react-router-dom";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  // const [guests, setGuests] = useState(2);
  // const [activeFilter, setActiveFilter] = useState(null);

  const MENU_CATS = [
    "Pizza",
    "Warm Dishes",
    "Side Dish",
    "Salads",
    "Desserts",
    "Drinks",
    "Children's Menu",
  ];
  const FILTERS = [
    "Without meat",
    "Vegan",
    "Gluten fee",
    "Gluten free",
    "Spicy",
    "With Chicken",
    "With seafood",
  ];

  const PIZZAS = [
    {
      id: 1,
      name: "Tomato Pesto",
      weight: "500 g",
      size: "45 cm",
      desc: "Sun-dried tomatoes, pesto sauce, red onion, pepperoni, and pesons.",
      price: 110,
      tag: null,
    },
    {
      id: 2,
      name: "The Diana Roes",
      weight: "500 g",
      size: "45 cm",
      desc: "Mozzarella, smoked chicken, hot-other, corn, tomato sauce.",
      price: 180,
      tag: "NEW",
    },
    {
      id: 3,
      name: "The Mary Wilson",
      weight: "500 g",
      size: "45 cm",
      desc: "Pan, thin blue-cheese mono, cashew nuts, tomato sauce.",
      price: 160,
      tag: null,
    },
    {
      id: 4,
      name: "Gugliano",
      weight: "500 g",
      size: "45 cm",
      desc: "Mozzarella chicken, fresh mushrooms, cream sauce, parmesan.",
      price: 140,
      tag: null,
    },
    {
      id: 5,
      name: "Pepe Sausage",
      weight: "500 g",
      size: "35 cm",
      desc: "Hunting sausages from mozzarella cheese, mushrooms, banana pepper, tomato sauce.",
      price: 130,
      tag: null,
    },
    {
      id: 6,
      name: "Hawaiian",
      weight: "500 g",
      size: "35 cm",
      desc: "Smoked chicken, mozzarella cheese, pineapple, tomato sauce.",
      price: 170,
      tag: "HIT",
    },
    {
      id: 7,
      name: "Salmone",
      weight: "500 g",
      size: "45 cm",
      desc: "Salmon, avocado, onion, pickled, jalapeños, red onion, tomato, noodle.",
      price: 180,
      tag: null,
    },
    {
      id: 8,
      name: "Margherita",
      weight: "500 g",
      size: "45 cm",
      desc: "Mozzarella, chicken, cherry tomatoes, basil, tomato sauce.",
      price: 110,
      tag: null,
    },
    {
      id: 9,
      name: "Pepperoni",
      weight: "500 g",
      size: "45 cm",
      desc: "60 best hot dog, pickled, red onion, tomato, mozzarella.",
      price: 150,
      tag: null,
    },
  ];

  return (
    <section id="MenuSection" className="py-14 md:px-20 max-w-7xl mx-auto px-4">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">
        OUR MENU
      </p>
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Try our top position
      </h2>

      {/* Category tabs */}
      <div className="flex rounded-tl-full rounded-bl-full justify-evenly items-center w-full bg-[#EFD0AB] flex-wrap mb-4">
        {MENU_CATS.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex  ${idx === 1 ? "border-l-0" : "border-l"}   border-white flex-1 text-nowrap py-4 px-6 justify-center items-center gap-3  text-sm font-semibold transition-all ${activeCategory === cat
              ? "bg-[#1a3c2e] border-r-2 border-white rounded-full text-white shadow-md"
              : "text-gray-600"
              }`}
          >
            <span className="h-8 w-8 bg-white text-black rounded-full flex justify-center items-center"><GiHamburger /></span>{cat}
          </button>
        ))}
      </div>

      {/* Diet filters */}
      {/* <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(activeFilter === f ? null : f)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border transition-all ${activeFilter === f
              ? "bg-[#c84b11] text-white border-[#c84b11]"
              : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
          >
            {f}
          </button>
        ))}
        <button className="px-3 py-1 rounded-full text-xs border border-gray-200 text-gray-400 hover:border-gray-400 transition-all">
          Reset all
        </button>
      </div> */}

      {/* Pizza grid */}
      <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PIZZAS.map((pizza) => (
          <SinglePizzaCart key={pizza.id} pizza={pizza} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to={"/menu"} className="border-2 border-[#AF2A2F] px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#AF2A2F] text-[#AF2A2F] hover:text-white transition-all">
          GO TO MENU
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
