import React, { useState } from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [showModel, SetShowModel] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            message
        }
        // console.log(data);
        if (!data) {
            alert("please fill all field"

            )
            return;
        }
        SetShowModel(true)
    }
    const closeModal = () => {
        SetShowModel(false)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }
    return (
        <div className='bg-sky-700 flex items-center justify-center py-28 px-8' id="contact">
            <div className='container mx-auto'>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 item-center md:gap-12 gap-8'>
                    {/* left side */}
                    <motion.div 
                    variants={fadeIn('right', 0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className='space-y-8 p-8 shadow-lg rounded-md '>
                        <h2 className='text-4xl font-bold font-secondary mb-4 text-white underline'>Contact Us</h2>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                <FaPhoneVolume className='text-white text-2xl' />
                            </div>
                            <div className='text-white'>
                                <h2 className='text-2xl'>Call Us Now</h2>
                                <p className='text-xl'>9851182568 <br />9851080459 <br />9803844730 <br />9808083620</p>
                            </div>

                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                <MdEmail className='text-white text-2xl' />
                            </div>
                            <div className='text-white'>
                                <h2 className='text-2xl'>Email Address</h2>
                                <p className='text-xl'>advertisement.tnmultipurpose.com.np <br /> tnmultipurpose2076@gmail.com</p>
                            </div>

                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                <IoLocationSharp className='text-white text-3xl' />
                            </div>
                            <div className='text-white'>
                                <h2 className='text-2xl'>Contact Address</h2>
                                <p className='text-xl'>Godawari Municipality-5, Lalitpur</p>
                            </div>

                        </div>
                    </motion.div>
                    {/* Right side */}
                    <motion.div 
                    variants={fadeIn('left', 0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                        <h2 className='text-2xl font-bold mb-4'>Service Request</h2>
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            <div className='flex gap-3'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                    <IoPerson className='text-primary text-3xl' />
                                </div>
                                <div>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text" placeholder='Name' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                    <MdEmail className='text-primary text-3xl' />
                                </div>
                                <div>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        type="email" placeholder='Email Address' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                                </div>
                            </div>
                            <div className='flex gap-3 item'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                    <FaPhoneVolume className='text-primary text-2xl' />
                                </div>
                                <div>
                                    <input
                                        onChange={e => setPhone(e.target.value)}
                                        type="tel" placeholder='Contact Number' className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                                </div>
                            </div>
                            <div className='flex gap-3 item'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffffla] p-3'>
                                    <FaPenToSquare className='text-primary text-2xl' />
                                </div>

                                <div>

                                    <textarea
                                        onChange={e => setMessage(e.target.value)}
                                        cols={50} rows={5} placeholder='write your message'
                                        className='w-full p-4 rounded:md focus:outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
                                </div>
                            </div>
                            <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-sky-500'>Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>
            {
                showModel && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'>
                        <div className='bg-white p-8 rounded-md shadow-lg'>
                            <h2 className='text-2xl font-bold mb-4'>Submit Successfully</h2>
                            <p>Thank You, {name} for submitting your querry to us.</p>
                            <button
                                onClick={closeModal}
                                className='mt-4 px-4 py-2 bg-primary text-white rounded-md'>Close</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Contact
