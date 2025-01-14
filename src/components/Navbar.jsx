import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const isSpaceBackground = location.pathname === "/";
    const navbarStyles = isSpaceBackground
        ? "bg-black bg-opacity-70 text-white"
        : "bg-white text-black";

    return (
        <header className={`header p-5 flex items-center justify-between ${navbarStyles}`}>
            {/* Logo */}
            <NavLink
                to="/"
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center font-bold"
            >
                <p className="text-white">BI</p>
            </NavLink>

            {/* Navigation */}
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-pink-500" : "hover:text-pink-400 transition"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "text-pink-500" : "hover:text-pink-400 transition"
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/certificates"
                    className={({ isActive }) =>
                        isActive ? "text-pink-500" : "hover:text-pink-400 transition"
                    }
                >
                    Certificates
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
