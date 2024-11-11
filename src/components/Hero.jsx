import React from 'react';
import heroImg from "../assets/hero.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex item-center pt-28 md:h-screen'>
<div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
  {/* ledt side */}
  <motion.div
  variants={fadeIn('down', 0.2)} 
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.7}}
  className='md:w-1/2'>
    <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>LET US GUIDE YOU HOME</h1>
    <p className='text-lg mb-12 md:pr-8'>Tell us what you need and we will try to find the perfect match for you.</p>
    <button className='bg-primary text-white py-3 px-8 font-medium rounded-md hover:bg-purple-400'>
      <a href="#contact" className='flex gap-1 items-center'>
        <span>Get Started</span><FaArrowAltCircleRight />
      </a>
    </button>
  </motion.div>
  {/* right side */}
  <motion.div 
  variants={fadeIn('left', 0.2)} 
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false, amount: 0.7}}
  className='md:w-1/2 h-full'>
    <img src={heroImg} alt="heroImg" className='w-full object-cover' />
  </motion.div>
  </div>
    </section>
  )
}

export default Hero
