import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6';
import { FiBookOpen } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();

    const navItems = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Gallery",
            path: "/gallery",
        },
        {
            id: 3,
            name: "Exhibitions",
            path: "/exhibitions",
        },
        {
            id: 4,
            name: "Artists",
            path: "/artists",
        },
        {
            id: 5,
            name: "About",
            path: "/about",
        },
        {
            id: 6,
            name: "Contact",
            path: "/contact",
        },

    ];

    const toggleNavbar = () => {
        setOpen(!open);
    };

    const closeNavbar = () => {
        setOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    // Adding eventlisteners 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div
            id="navbar"
            className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between lg:px-20 md:px-14 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 border-b ${isScrolled ? 'bg-neutral-900/80 border-neutral-700' : 'bg-neutral-950/60 border-neutral-800'}`}
        >
            {/* Logo section */}
            <div className="flex items-center gap-2 md:pr-16 pr-0">
                <Link to="/" className='text-lg font-semibold text-neutral-200 flex items-center gap-x-2'>
                    <FiBookOpen size={24} />
                    <span>LearnHub</span>
                </Link>
            </div>

            {/* Hamburger menu for mobile/ Toggle menu */}
            <div className="md:hidden">
                <button onClick={toggleNavbar} className="text-neutral-400 focus:outline-none">
                    <FaBars size={24} />
                </button>
            </div>

            {/* Navbar items and buttons */}
            <div className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-neutral-950 md:border-none md:bg-transparent shadow-lg md:shadow-none ease-in-out duration-300 transition-transform flex-1 ${open ? "translate-x-0 " : "translate-x-full"} md:translate-x-0 z-60`}>

                {/* Logo and close icon inside toggle menu card */}
                <div className="w-full md:hidden flex items-center justify-between px-4">
                    {/* Logo */}
                    <Link to="/" className='text-lg font-semibold text-neutral-300 flex items-center gap-x-2'>
                        <FiBookOpen size={24} />
                        <span>LearnHub</span>
                    </Link>

                    {/* Close icon */}
                    <div className="md:hidden flex justify-end py-6">
                        <button onClick={closeNavbar} className="text-neutral-500 focus:outline-none">
                            <IoMdClose size={24} />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-b border-neutral-900 md:hidden"></div>

                {/* Navbar Items and button */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
                    {/* Navbar items */}
                    <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-300 md:font-normal font-medium">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={closeNavbar}
                                className={`hover:text-neutral-300 ease-in-out duration-300 ${location.pathname === item.path ? 'text-neutral-300' : 'text-neutral-400'} cursor-pointer`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    {/* Navbar buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button className="w-fit px-6 py-2 md:text-base text-xl text-neutral-200 hover:text-neutral-300 eas-in-out duration-300 cursor-pointer">
                            Sign In
                        </button>
                        <button className="w-fit px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-base text-neutral-50 eas-in-out duration-300 cursor-pointer">
                            Join Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar