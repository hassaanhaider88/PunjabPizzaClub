import { IoMdArrowDropup } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import {
  FaPhone,
  FaClock,
  FaTruck,
  FaMotorcycle,
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaHeart,
  FaChevronDown,
  FaMapMarkerAlt,
  FaUser,
  FaGlobe,
  FaCheckCircle,
  FaLeaf,
  FaBan,
  FaFire,
  FaChild,
  FaSearch,
  FaTimes,
  FaBars,
  FaPlus,
  FaMinus,
  FaSmile,
  FaMeh,
  FaFrown,
  FaGrinStars,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { MdDeliveryDining, MdWhatsapp, MdAccessTime } from "react-icons/md";
import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import DeliveryServiceSection from "../Components/DeliveryServiceSection";
import DeliveryZoneSection from "../Components/DeliveryZoneSection";
import FeedBackSection from "../Components/FeedBackSection";

// ── DATA ────────────────────────────────────────────────────────────────────
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

// ── PIZZA CARD ───────────────────────────────────────────────────────────────
function PizzaCard({ pizza }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all duration-300">
      {pizza.tag && (
        <span
          className={`absolute top-3 left-3 z-10 text-white text-xs font-bold px-2 py-0.5 rounded-full ${pizza.tag === "HIT" ? "bg-red-500" : "bg-[#2d6a4f]"}`}
        >
          {pizza.tag}
        </span>
      )}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-10 text-gray-300 hover:text-red-400 transition-colors"
      >
        <FaHeart className={liked ? "text-red-400" : ""} />
      </button>
      <div className="flex justify-center mb-3">
        <img
          src={`https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop&auto=format`}
          alt={pizza.name}
          className="w-36 h-36 object-cover rounded-full"
          style={{
            filter: "saturate(1.2)",
          }}
        />
      </div>
      <p className="text-xs text-gray-400 mb-1">
        {pizza.weight} · {pizza.size}
      </p>
      <h3 className="font-bold text-gray-800 text-sm mb-1">{pizza.name}</h3>
      <p className="text-xs text-gray-400 mb-3 leading-relaxed line-clamp-2">
        {pizza.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-800">{pizza.price} uah</span>
        <button className="flex items-center gap-1.5 bg-[#1a3c2e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#2d6a4f] transition-colors">
          <FaShoppingCart size={11} /> ORDER
        </button>
      </div>
    </div>
  );
}

// ── MAIN HOME COMPONENT ──────────────────────────────────────────────────────
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  // const [guests, setGuests] = useState(2);
  const [activeFilter, setActiveFilter] = useState(null);


  return (
    <div className="font-sans bg-[#faf7f2] text-gray-800 min-h-screen">
      {/* ── NAVBAR ── */}
      <NavBar />

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── DELIVERY SERVICE ── */}
      <DeliveryServiceSection />

      {/* ── MENU ── */}
      <section id="MenuSection" className="py-14 max-w-7xl mx-auto px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
          Our Menu
        </p>
        <h2 className="text-3xl font-black text-gray-800 mb-6">
          Try our top position
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {MENU_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#1a3c2e] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {cat === "Pizza" && "🍕 "}
              {cat}
            </button>
          ))}
        </div>

        {/* Diet filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(activeFilter === f ? null : f)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs border transition-all ${
                activeFilter === f
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
        </div>

        {/* Pizza grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PIZZAS.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border-2 border-gray-800 px-8 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 hover:text-white transition-all">
            GO TO MENU
          </button>
        </div>
      </section>

      {/* ── DELIVERY ZONES ── */}
      <DeliveryZoneSection/>



      {/* ── FEEDBACK ── */}
      <FeedBackSection />

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a3c2e] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-[#1a3c2e] rounded-lg p-1.5 leading-none">
                <span className="text-xs font-black tracking-tight">PEPE</span>
              </div>
              <div>
                <div className="text-white font-black text-lg leading-none tracking-tight">
                  PIZZA
                </div>
                <div className="text-green-300 text-[8px] uppercase tracking-widest">
                  Pizza restaurant
                </div>
              </div>
            </div>
            <p className="text-green-200 text-xs leading-relaxed mb-3">
              Open hours: 09:00 – 23:00
            </p>
            <p className="text-green-200 text-xs">
              Delivery time: 09:00 – 23:00
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Restaurants",
              links: ["About company", "Our restaurants"],
            },
            {
              title: "Services",
              links: ["Promotions", "Shipping and payment"],
            },
            {
              title: "Legal information",
              links: ["Public offer", "Privacy policy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-3 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-green-200 text-xs hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Follow us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-green-800 hover:bg-green-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="bg-green-800 hover:bg-green-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-green-400">
            <p>© 2024 Pepe Pizza. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <span className="font-bold text-white">VISA</span>
              <span className="font-bold text-white">Mastercard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
