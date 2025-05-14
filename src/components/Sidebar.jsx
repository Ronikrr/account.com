
import { Link } from "react-router-dom";
import {
    FaTachometerAlt,
    FaPlusCircle,
    FaMoneyBillWave,
    FaUsers,
    FaBalanceScale,
    FaChartPie,
} from "react-icons/fa";

const routes = [
    {
        id: 1,
        name: "dashboard",
        icon: <FaTachometerAlt className="text-lg" />,
        path: "/dashboard",
    },
    {
        id: 2,
        name: "add-expense",
        icon: <FaPlusCircle className="text-lg" />,
        path: "/add-expense",
    },
    {
        id: 3,
        name: "expenses",
        icon: <FaMoneyBillWave className="text-lg" />,
        path: "/expenses",
    },
    {
        id: 4,
        name: "groups",
        icon: <FaUsers className="text-lg" />,
        path: "/groups",
    },
    {
        id: 5,
        name: "settle-up",
        icon: <FaBalanceScale className="text-lg" />,
        path: "/settle-up",
    },
    {
        id: 6,
        name: "reports",
        icon: <FaChartPie className="text-lg" />,
        path: "/reports",
    },
];

const Sidebar = () => {
   
    return (
        <aside className="w-full sm:w-64 h-screen bg-primary text-black p-6 shadow-lg flex flex-col items-center sm:items-start ">
            {/* User Profile Section */}
            <div className="flex flex-col items-center w-full mb-20">
                <p className="font-semibold text-lg">Username</p>
                <p className="text-sm text-gray-600">Admin</p>
            </div>

            {/* Navigation Links with Icons */}
            <nav className="w-full">
                <ul className="menu menu-vertical px-1 w-full text-base">
                    {routes.map((item, index) => (
                        <>
                            <li className="my-2 " key={index}>
                                <Link
                                    to={item.path}
                                    className="hover:bg-white hover:text-black rounded-lg flex items-center gap-3 p-2 "
                                >
                                    {/* <FaHome className="text-lg" />*/}
                                    {item.icon}
                                    <span className="capitalize">{item.name}</span>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
