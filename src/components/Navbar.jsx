import React from "react";
import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { FaXmark, FaBars} from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.addEventListener("scroll", handleScroll);
        };
    });

    const navItem = [
        {
        name: 'Home',
        href: '#home',
        },
        {
        name: 'Service',
        href: '#service',
        },
        {
        name: 'About',
        href: '#about',
        },
        {
        name: 'Product',
        href: '#product',
        },
        {
        name: 'Testimonial',
        href: '#testimonial',
        },
    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className = {`py-4 lg:px-14 px-4 ${sticky ? "sticky top-0 left-0 right-0 bg-white duration-300" : ""}`} >
                <div className = "flex justify-between items-center text-base gap-8">
                    <a
                        href="#"
                        className="text-xl font-semibold inline-flex items-center"
                    >
                        <img
                            src={logo2}
                            alt="Logo"
                            className=" w-16 inline-block items-center"
                        />
                        <span className="text-[#263238]">WEBWON</span>
                    </a>
                

                {/* nav items for large devices */}

        <ul className="ls:flex space-x-12 hidden">
            {navItem.map((item) => (
            <li key={item.name} className="active:text-[#C96BDB]">
                <a
                href={item.href}
                className="block text-base text-gray-900 hover:text-[#C96BDB] first:font-medium"
                >
                {item.name}
                </a>
            </li>
            ))}
        </ul>

        {/* btn for large devices */}

        <div className = 'space-x-12 hidden ls:flex items-center'>
            <a className = 'hidden font-medium lg:flex items-center text-[#C96BDB] hover:text-gray-900'>Login</a>
            <button className = 'bg-[#C96BDB] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-gray-800 hover:text-[#C96BDB]'>Signup</button>
        </div>

        {/* menu btn for only mobile device */}

        <div className = 'ls:hidden'>
            <button onClick={toggleMenu} className = 'text-gray-800 focus:outline-none focus:text-gray-500'>
                {
                    isMenuOpen ? (<FaXmark className = 'h-6 w-6'/>) : (<FaBars className = ' h-6 w-6'/>) 
                }
            </button>
        </div>
        </div>

        {/* nav items for mobile device  */}
    
        <div className = {`ls:hidden space-y-4 px-4 text-center mt-16 py-7 list-none bg-gray-300 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-60 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {navItem.map((item) => (
            <li key={item.name}>
                <a
                href={item.href}
                className="block text-base text-gray-900 hover:text-[#C96BDB] first:font-medium"
                >
                {item.name}
                </a>
            </li>
            ))}
            <div className = 'flex flex-col'>
            <li>
            <a className = 'font-medium py-2 flex flex-col items-center text-[#C96BDB] hover:text-gray-900'>Login</a>
            <button className = 'bg-[#C96BDB] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-gray-800'>Signup</button>
            </li>
            </div>
        </div>
        </nav>
        </header>
    );
};

export default Navbar;
