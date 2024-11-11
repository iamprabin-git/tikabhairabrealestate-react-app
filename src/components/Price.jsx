import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.jpg";
import serviceImg2 from "../assets/service2.jpg";
import serviceImg3 from "../assets/service3.jpg";
import serviceImg4 from "../assets/service4.jpg";
import serviceImg5 from "../assets/service5.jpg";
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';


const Price = () => {
  return (
    <div id='price' className=' bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <motion.h2 
          variants={fadeIn('down', 0.2)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='text-4xl font-bold font-secondary text-heroBg'>Pricing</motion.h2>
          <motion.p 
          variants={fadeIn('left', 0.2)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='text-wrap'>advertisement.tnmultipurpose.com.np provides different kind of services for the buyers and sellers of properties in Nepal. If you are a seller, you choose among the following type of services which is best fit for your property</motion.p>
        </div>
        {/* Service Category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
              <Tab>Basic Package</Tab>
              <Tab>Silver Package</Tab>
              <Tab>Golden Package</Tab>
              <Tab>Platinum Package</Tab>
              <Tab>Free Listing</Tab>
            </TabList>

            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
              <motion.div
             variants={fadeIn('down', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
               className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Basic Package</h2>
                <p className='mb-8'>NRs.5,000</p>
              <ul className='list-disc list-inside space-y-3'>
              <li>HIGH QUALITY IMAGES OF THE PROPERTY</li>
              <li>PROPERTY DESCRIPTION</li>
              <li>FACEBOOK SPONSORED PROMOTION FOR 7 DAYS </li>
              <li>PROPERTY UPDATE EVERY 10 DAYS</li>
              <li>LISTED UNTIL THE PROPERTY IS SOLD.</li>
              <li>SUITABLE FOR 3 MONTHS</li></ul>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='md:w-1/2'>
                <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
            </TabPanel>
            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
            <motion.div
             variants={fadeIn('down', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}} className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Silver Package</h2>
                <p className='mb-8'>NRs.10,000</p>
              <ul className='list-disc list-inside space-y-3'>
              <li>HIGH QUALITY IMAGES OF THE PROPERTY</li>
              <li>PROPERTY DESCRIPTION </li>
              <li>PROPERTY UPDATE EVERY 7 DAYS</li>
              <li>FACEBOOK SPONSORED PROMOTION IN 2 TIMES FOR 7 DAYS INTERVAL</li>
              <li>LISTED UNTIL THE PROPERTY IS SOLD.</li>
              <li>SUITABLE FOR 6 MONTHS</li>
              </ul>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className='md:w-1/2'>
                <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
            </TabPanel>
            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
            <motion.div
             variants={fadeIn('down', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}} className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Golden Package</h2>
                <p className='mb-8'>NRs.16,000</p>
              <ul className='list-disc list-inside space-y-3'>
              <li>HIGH QUALITY IMAGES OF THE PROPERTY</li>
              <li>PROPERTY DESCRIPTION</li>
              <li>FACEBOOK SPONSORED PROMOTION IN 4 TIMES FOR 7 DAYS INTERVAL </li>
              <li>PROPERTY UPDATE EVERY 5 DAYS</li>
              <li>YOUTUBE VIDEO PROMOTION. VIDEO SHOT BY PROFESSIONAL PHOTOGRAPHER</li>
              <li>LISTED UNTIL THE PROPERTY IS SOLD.</li>
              <li>SUITABLE FOR URGENT PROPERTY SALE.</li>
              </ul>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className='md:w-1/2'>
                <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
            </TabPanel>
            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
            <motion.div
             variants={fadeIn('down', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}} className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Platinum Package</h2>
                <p className='mb-8'>NRs.22,000</p>
              <ul className='list-disc list-inside space-y-3'>
              <li>HIGH QUALITY IMAGES OF THE PROPERTY</li>
              <li>PROPERTY DESCRIPTION</li>
              <li>FACEBOOK SPONSORED PROMOTION IN 7 TIMES FOR 10 DAYS INTERVAL</li>
              <li>YOUTUBE VIDEO PROMOTION. VIDEO SHOT BY PROFESSIONAL PHOTOGRAPHER </li>
              <li>PROPERTY UPDATE EVERY 2 DAYS</li>
              <li>Tikabhairab REAL ESTATE WILL REFER THE WALK-IN CUSTOMER FOR THE PROPERTY</li>
              <li>LISTED UNTIL THE PROPERTY IS SOLD.</li>
              <li>SUITABLE FOR URGENT SALE AND LARGE REAL-ESTATE PROPERTY.  </li>
              </ul>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className='md:w-1/2'>
                <img src={serviceImg5} alt="" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
            </TabPanel>
            <TabPanel className='flex flex-col md:flex-row gap-8 mt-8'>
            <motion.div
             variants={fadeIn('down', 0.2)} 
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}} className='md:w-1/2 bg-white rounded-lg p-12 font-primary'>
                <h2 className='text-3xl font-semibold text-primary mb-4'>Free Listing</h2>
                <p className='mb-8'>NRs. Free</p>
              <ul className='list-disc list-inside space-y-3'>
              <li>HIGH QUALITY IMAGES OF THE PROPERTY</li>
              <li>PROPERTY DESCRIPTION</li>
              <li>Offer Valid for 1 time per person </li>
              <li>No Any facebook post boost </li>
              <li>only listed in Website for a week </li>
              </ul>
              </motion.div>
              <motion.div
              variants={fadeIn('left', 0.2)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} className='md:w-1/2'>
                <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
              </motion.div>
              
            </TabPanel>
          </Tabs>
        <motion.p
        variants={fadeIn('down', 0.2)} 
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}>If you are confused to choose service, you can simply contact us. Our team will help you select the suitable service for you depending upon the nature of your property and your immediate need. 
        </motion.p>
<br /><motion.span
variants={fadeIn('left', 0.2)} 
initial="hidden"
whileInView={"show"}
viewport={{once: false, amount: 0.7}}
className='text-white text-center bg-red-600'>Note: advertising charges are non refundable.Thank you</motion.span>
        </div>
      </div>
    </div>
  )
}

export default Price