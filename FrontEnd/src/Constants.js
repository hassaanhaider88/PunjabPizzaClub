import { AiOutlineHome } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const BACK_END_API = "http://localhost:3000"

const AllCategory = [
    "Pizza",
    "Burger",
    "Sharwaama",
    "Paratha Roll",
    "Hot Wings",
];

// To show user navbar on these navbars
const RestricetPages = [
    "/",
    "/menu",
    "/about",
    "/contact"
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
    {
        name: "Statistics",
        link: "/statistics",
        icon: FcStatistics,
    },
];



export { BACK_END_API, sideBarNavLins, AllCategory, RestricetPages }