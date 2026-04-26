import { AiOutlineHome } from "react-icons/ai";
import { FcStatistics } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const BACK_END_API = "http://localhost:3000"

const sideBarNavLins = [
    {
        name: "Home",
        link: "/",
        icon: AiOutlineHome,
    },
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: MdOutlineDashboardCustomize,
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

export { BACK_END_API ,sideBarNavLins}