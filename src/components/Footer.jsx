import React from 'react'
import footerLogo from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
    return (
        <div className='py-12 bg-heroBg px-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
                <div className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2'>
                        <img src={footerLogo} alt="Footerlogo" className='w-50 h-auto' />
                    </div>
                    <p className='text-white'>घर जग्गा खरिद बिक्रि तथा भाँडामा लिनु दिनु परेमा हामीलाई सम्झनुहोस.</p>
                    <p className='text-yellow-400'>हामीलाइ सामाजिक संजालबाट पनि सम्पर्क गर्न सक्नुहुन्छ</p>
                    <div className='flex gap-4 pt-8'>
                        <a href="#" className='bg-gray-200 text-blue-500 rounded-full size-10 flex items-center justify-center hover:bg-blue-600 hover:text-white'>
                            <FaFacebook className='text-2xl' />
                        </a>
                        <a href="#" className='bg-gray-200 text-red-500 rounded-full size-10 flex items-center justify-center hover:bg-red-700 hover:text-white'>
                            <GrInstagram className='text-2xl' />
                        </a>
                        <a href="#" className='bg-gray-200 text-red-500 rounded-full size-10 flex items-center justify-center hover:bg-red-700 hover:text-white'>
                            <FaYoutube className='text-2xl' />
                        </a>
                        <a href="#" className='bg-gray-200 text-red-950 rounded-full size-10 flex items-center justify-center hover:bg-red-950 hover:text-white'>
                            <AiFillTikTok className='text-2xl' />
                        </a>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4 text-yellow-400 underline'>Quick links</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#home" className='hover:text-yellow-500 text-white'>Home</a>
                        </li>
                        <li>
                            <a href="#about" className='hover:text-yellow-500 text-white'>About</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:text-yellow-500 text-white'>Contact</a>
                        </li>
                        <li>
                            <a href="#properties" className='hover:text-yellow-500 text-white'>Property</a>
                        </li>
                    </ul>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4 text-yellow-400 underline'>Supports</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#" className='hover:text-yellow-500 text-white'>FAQs</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-yellow-500 text-white'>Terms of Services</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-yellow-500 text-white'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:text-yellow-500 text-white'>Support Services</a>
                        </li>
                    </ul>
                </div>

                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4 text-yellow-400 underline'>Contact Info</h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2' >
                            <FaLocationDot className='text-primary' />
                            <p className='text-white'> Godawari Municipality-5, Lalitpur</p>
                        </li>
                        <li className='flex items-center gap-2' >
                            <FaPhoneVolume className='text-primary' />
                            <p className='text-white'>9851182568, 9808083620</p>
                        </li>
                        <li className='flex items-center gap-2' >
                            <TfiEmail className='text-primary' />
                            <p className='text-white'>advertisement@tnmultipurpose.com.np </p>
                        </li>

                    </ul>
                </div>
            </div>
          
        </div>
    )
}

export default Footer