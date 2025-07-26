import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (

        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="text-xl font-bold tracking-wide text-white">
                    iLokiCodes
                </Link>

                <div className="hidden md:flex space-x-6">
                    {
                        navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`hover:text-blue-400 transition-colors duration-200
                                    ${pathname === link.path ? "text-blue-400" : "text-white"}`}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>

                <button className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {
                isOpen && (
                    <div className="md:hidden px-6 pb-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-white hover:text-blue-400
                                        ${pathname === link.path ? "text-blue-400" : ""}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }
        </nav>
    )
};

export default Navbar;