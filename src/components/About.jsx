import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import visionImg from "../assets/vision.jpg";
import missionImg from "../assets/mission.webp"
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';

const About = () => {
  return (
    <div id='about' className=' bg-[#f7f8fc] p-3 py-28'>
     <motion.h2 
      variants={fadeIn('down', 0.2)} 
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
     className='text-4xl text-center font-primary text-primary pt-8 pb-6'>About Us</motion.h2>
     <motion.p
     variants={fadeIn('up', 0.2)} 
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false, amount: 0.7}}
     >Tikabhairab Real Estate establish as the complete Ghar Jagga solution. We are real estate agency helping property owners, developers & agents for smooth transitions of selling, renting & management of their properties. 

We offer comprehensive Real Estate listings, supported by the property owners or developers & first-class agents ready to help you on your terms. We pride ourselves in understanding the markets, and making the process easy from start to finish.
We meet people where they are with the tools and assistance they need to move forward with knowledge and confidence. With personalized tools, expert guidance, tailored resources, and market insights, we support each person’s journey — from taking the first steps in home search to building long-term wealth as a homeowner.
Today, home ownership isn't within reach of everyone. Join us in creating a world where all people — no matter their race, class, or gender — have what they need to own a home.</motion.p>
<div className='py-12 md:w-4/5 mx-auto'>
<Tabs>
            <TabList className='flex flex-wrap  items-center md:gap-8 gap-4'>
              <Tab>Vision</Tab>
              <Tab>Mission</Tab>
              
            </TabList>

            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
              <motion.div 
              variants={fadeIn('right', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Our Vision</h2>
                <p className='mb-8'>Delivering trustworthy experiences to the clients</p>
             </motion.div>
             <motion.div
             variants={fadeIn('left', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
              className='md:w-1/2'>
                <img src={visionImg} alt="vision image" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
              
            </TabPanel>
            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
              <motion.div 
              variants={fadeIn('down', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Our Mission</h2>
                <p className='mb-8'>Our mission is to continue to be one of the best real estate selling, buying & renting site in Nepal.</p>
                <ul className='list-disc list-inside space-y-3'> Our mission is 
              <li>to help the seller/buyer/renter/investor</li>
              <li>to guide him/her to the right property of his own choice</li>
              <li>within his affordable budget  </li>
              <li>comparatively reasonably priced in the given market</li>
             </ul>

              
             </motion.div>
             <motion.div 
             variants={fadeIn('left', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
             className='md:w-1/2'>
                <img src={missionImg} alt="vision image" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
              
            </TabPanel>
            </Tabs>
            </div>
            <motion.div
            variants={fadeIn('up', 0.2)} 
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}>
              <p>To be the best, we will serve our customers and clients by delivering on our commitments made before, during and after every transaction.</p>
            Please Visit our Official Website : <a href="https://advertisement.tnmultipurpose.com.np/" className='hover:bg-blue-700'>www.advertisement.tnmultipurpose.com.np</a>
            </motion.div>
    </div>
  )
}

export default About
