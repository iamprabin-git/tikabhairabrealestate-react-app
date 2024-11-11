import React, { useEffect, useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, SetIsOpen] = useState(false);
    const [activeSection, SetActiveSection] = useState('home')
    const handleToggle = () => {
        SetIsOpen(!isOpen)
    }
    const handleCloseMenu = () =>{
        SetIsOpen(false)
    }
    const handleScroll =()=>{
        const sections =['home','about','properties','testimonial','price','service'];
        const scrollPosition = window.scrollY+100;

        sections.forEach(section =>{
            const element = document.getElementById(section);
            if(element){
                const offsetTop =element.offsetTop;
                const height = element.offsetHeight;
                if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    SetActiveSection(section)
                }
            }
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[]);
    const handleScrollTo = (targetId)=>{
        const targetElement =document.getElementById(targetId);
        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    }
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0 '>
             <li className='hover:bg-red-500'>
                <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#home"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('home')
                }}
                className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
                >Home</motion.a>
            </li>
            <li className='hover:bg-red-500'>
            <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#about"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('about')
                }}
                    className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
                >About Us</motion.a>
            </li>
            <li className='hover:bg-red-500'>
            <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#properties"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('properties')
                }}
                    className={`text-white ${activeSection === 'properties' ? 'isActive' : ''}`}
                >Properties</motion.a>
            </li>
            
            <li className='hover:bg-red-500'>
            <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#price"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('price')
                }}
                    className={`text-white ${activeSection === 'price' ? 'isActive' : ''}`}
                >Pricing</motion.a>
            </li>
            <li className='hover:bg-red-500'>
            <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#service"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('service')
                }}
                    className={`text-white ${activeSection === 'service' ? 'isActive' : ''}`}
                >Services Request</motion.a>
            </li>
            <li className='hover:bg-red-500'>
            <motion.a
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                href="#testimonial"
                onClick={(e) =>{
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo('testimonial')
                }}
                    className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}
                >Testimonial</motion.a>
            </li>
        </ul>
    )
    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className="container mx-auto flex justify-between items-center h-full">
                {/* logo */}
                <div className='logo'>
                    <a href="/">
                        <img src="/logo.png" alt="logo" />
                    </a>
                </div>
                {/* navitems */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>
                        {navLinks}
                    </nav>
                </div>


                {/* button */}
                <div className='hidden md:block'>
                    <a 
                    onClick={e =>{
                        e.preventDefault();
                        handleScrollTo('contact')
                    }}
                    href="#contact" className='text-white bg-blue-800 hover:bg-purple-700 px-4 py-2 rounded'>
                        Contact
                    </a>
                </div>
                {/* Hamburger menu */}
                <div className='block md:hidden'>
                    <button onClick={handleToggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                        <HiMenuAlt3 className='size-6' />
                    </button>
                </div>
            </div>
            {/* mobile nav items */}
            {
                isOpen && (
                    <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-y-3'>
                            {navLinks.props.children}
                            <li className='py-2'>
                                <a href="#contact"
                                    className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleCloseMenu();
                                        handleScrollTo('contact')
                                    }}>contact Us</a>
                            </li>
                        </ul>

                    </nav>
                )
            }
        </header>
    )
}

export default Navbar
