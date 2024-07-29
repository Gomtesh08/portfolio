import React from 'react'
import aboutImg from '../assets/aboutImage.png'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
       <h2 className='my-20 text-center text-4xl '>About 
        <span className='text-neutral-500'> Me</span></h2>
        <div  className="flex flex-wrap">

        <motion.div 
       whileInView={{opacity : 1 , x : 0}}
       initial = {{opacity:0 , x : -100}}
       transition={{duration : 0.6}}
        className="w-full lg:w-1/2 lg:p-8">
        
             <div className="flex items-center justify-center">
                <img src={aboutImg} alt="about" />
             </div>
        </motion.div >
        <motion.div
          whileInView={{opacity : 1 , x : 0}}
          initial = {{opacity:0 , x : 100}}
          transition={{duration : 0.6}}
        className="w-full lg:w-1/2 ">
            
            <div className="flex justify-center lg:justify-start">
               <p className='my-2 max-w-xl py-6 '>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, rerum! Eaque, culpa dolorum. Quas, fuga nostrum. Commodi, quod explicabo quidem, quibusdam, pariatur nihil repellendus nam numquam quaerat labore dignissimos qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati, ex non fugit quis, officiis iusto reiciendis velit mollitia blanditiis nostrum laborum tempore accusamus voluptatum recusandae debitis consequatur fuga distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione perspiciatis cumque ea error odit vitae, ad, in tenetur ducimus eum unde accusamus laborum, repellendus incidunt soluta qui molestias consequatur corrupti.
               </p>
            </div>
           </motion.div>

        </div>
    </div>
  )
}

export default About
