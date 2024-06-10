import { Link } from 'react-router-dom';
import { Logo, Home, Job, Referral, Setting, Mail } from "../assets/icons.tsx";

const menuItems = [
    { icon: <Home />, text: "Home", path: "/" },
    { icon: <Job />, text: "Job", path: "/job" },
    { icon: <Referral />, text: "Referral", path: "/referral" },
    { icon: <Setting />, text: "Settings", path: "/settings" },
];

const Sidebar = () => {
    return (
        <div className="w-64 bg-sidebarBG border-solid border-r-2 border-sidebarBorder px-6 py-8 flex flex-col items-start justify-between h-screen">
            <div className="w-full flex flex-col items-start gap-10">
                <Logo />
                <nav>
                    <div>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="w-48 flex flex-row hover:duration-150 border-transparent border-[1px] focus:ring focus:ring-gray-400 hover:border-hover-gray-300 items-center rounded-lg hover:shadow-hover-inset hover:bg-white hover:text-black group gap-4 mb-2 text-itemGray px-3 py-2"
                            >
                                {item.icon} <div className="text-xl">{item.text}</div>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            <div className="flex flex-row items-start gap-3 hover:duration-150 text-itemGray px-3 group py-2 hover:underline hover:text-black">
                <Mail /> <a href="mailto:raghavnagpal2003@gmail.com" className="inline">Raghav Nagpal</a>
            </div>
        </div>
    );
};

export default Sidebar;