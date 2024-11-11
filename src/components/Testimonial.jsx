import React from 'react';
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/uttam.png";
import review2 from "../assets/kailash.png"
import {motion} from "framer-motion"
import { fadeIn } from '../utilis/animationVariants';

const testimonials =[
  {
      name: 'Uttam Gopali',
      Company: 'Lele Agricultural Co-operative Ltd',
      post: 'Chairmen',
      review: 'The service provided by tikabhairab Real Estate is very awesome and reasonable than other platforms. i am very satisfied with this service',
      image: review1,
  },
  {
      name: 'Kailash Man Karmacharya',
      Company: 'Ganga Jamuna English School',
      post: 'teacher',
      review: 'The service provided by tikabhairab Real Estate is very awesome and reasonable than other platforms. i am very satisfied with this service',
      image: review2,
  },
]

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-28'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center mb-12'>
          <motion.h2
          variants={fadeIn('left', 0.2)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
           className='text-4xl font-bold font-primary text-heroBg mb-3'>What Our Clients Say</motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.2)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          className='text-lg mb-12 md:w-1/2 mx-auto'>Hear from some of our satisfied clients about how our services have positively impacted their lives and well-being</motion.p>
        </div>
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            testimonials.map((testimonial, index)=> (
              <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                <BsChatQuoteFill className='size-12 text-primary ' />
                </div>
                <div className='flex flex-col space-y-3 mb-4'>
                  <motion.p
                  variants={fadeIn('down', 0.2)} 
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.7}}
                   className='text-lg mb-2'>{testimonial.review}</motion.p>
                  <motion.div
                   variants={fadeIn('up', 0.2)} 
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once: false, amount: 0.7}}
                  className='flex gap-3'>
                    <img src={testimonial.image} alt="reiviewer image" className='size-20 rounded-full object-cover mr-4' />
                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-800'>{testimonial.post}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))
          }
        </div>
        </div>
      </div>
      )
}

      export default Testimonial
