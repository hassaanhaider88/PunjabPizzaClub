import { AiOutlineHome } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const BACK_END_API = "http://localhost:3000"

const AllCategory = [
    "Pizza",
    "Burger",
    "Shoarwaama",
    "Paratha Roll",
    "Hot Wings",
];

// To show user navbar on these navbar
const RestrictPages = [
    "/",
    "/menu",
    "/about",
    "/contact",
    "/auth",
    "/checkout",
    "/user-profile",
    "/privacy",
    "/tofs"
];

const sideBarNavLins = [
    {
        name: "Home",
        link: "/",
        icon: AiOutlineHome,
    },
    {
        name: "Products",
        link: "/all-products",
        icon: FaSitemap,
    },
    {
        name: "Orders",
        link: "/all-orders",
        icon: MdOutlineProductionQuantityLimits,
    },
    {
        name: "Customers",
        link: "/all-customers",
        icon: FaUsers,
    },
];

const SIZE_OPTIONS = ["Small", "Medium", "Large", "Xtra Large", "default"];



export { BACK_END_API, sideBarNavLins, AllCategory, RestrictPages ,SIZE_OPTIONS}