import { GiHamburger } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Store/menuSlice";
import SinglePizzaCard from "./SinglePizzaCard";
import { Link } from "react-router-dom";

const MenuSection = () => {

  const MENU_CATS = [
    "Special Pizza",
    "Pizza",
    "Pizza Flavor",
    "Burger",
    "Roll",
    "Shawarma",
    "Others"
  ];


  const dispatch = useDispatch();

  const { items, activeCategory } = useSelector(
    (state) => state.menu
  );

  const filteredItems = items.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="MenuSection" className="py-14 md:px-20 max-w-7xl mx-auto px-4">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">
        OUR MENU
      </p>
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Try our top position
      </h2>

      {/* Category tabs */}
      <div className="flex  md:rounded-tl-full rounded-lg md:rounded-bl-full md:rounded-tr-full  md:rounded-br-full justify-evenly items-center w-full bg-[#EFD0AB] flex-wrap mb-4">
        {MENU_CATS.map((cat, idx) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}

            className={`flex  ${idx === 1 ? "border-l-0" : "border-l"}   border-white flex-1 text-nowrap py-3 px-6 justify-center items-center gap-3  text-sm font-semibold transition-all ${activeCategory === cat
              ? "bg-[#AF2A2F] border-r-2 border-white rounded-full text-white shadow-md"
              : "text-gray-600"
              }`}
          >
            <span className="h-8 w-8 bg-white text-black rounded-full flex justify-center items-center"><GiHamburger /></span>{cat}
          </button>
        ))}
      </div>



      {/* Pizza grid */}
      <div className="grid mt-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((pizza) => (
          <SinglePizzaCard key={pizza.id} pizza={pizza} />
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
