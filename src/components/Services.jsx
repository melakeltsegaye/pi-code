import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { BsSuitcaseLg, BsPalette } from "react-icons/bs";

const Services = () => {
  return (
    <div id="services">
        <div className='p-0 md:px-20 py-20 h-fit'>
            <div className='pb-5 md:px-0 px-3'>
                <h1 className='md:text-3xl text-2xl font-bold'>Our Additional <span>Services</span></h1>
                <p className='text-gray-500 pt-3 text-sm'>We offer website development, software design, and corporate solutions.</p>
            </div>
            <div className='bg-gray-300 w-full p-2 md:p-5 h-fit flex  gap-4 '>
                <div className='w-full bg-white rounded-md p-3 min-h-32 max-h-fit flex flex-col md:flex-row gap-3'>
                    <div className='h-fit w-full md:w-[12%] bg-gray-300 flex justify-center items-center p-4'><TbWorldWww className='text-6xl t_color' /></div>
                    <div className='md:w-[80%] w-full  md:text-start text-center'>
                        <h1 className='md:text-2xl text-md font-bold'>website development</h1>
                        <p className='pt-2 md:text-1xl text-sm'>Specializing in crafting bespoke websites that seamlessly blend aesthetics and functionality, delivering exceptional digital experiences.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-300 w-full p-2 md:p-5 h-fit flex  gap-4 '>
                <div className='w-full bg-white rounded-md p-3 min-h-32 max-h-fit flex flex-col md:flex-row gap-3'>
                    <div className='h-fit w-full md:w-[12%] bg-gray-300 flex justify-center items-center p-4'><BsPalette className='text-6xl t_color' /></div>
                    <div className='md:w-[80%] w-full  md:text-start text-center'>
                        <h1 className='md:text-2xl text-md font-bold'>software design</h1>
                        <p className='pt-2 md:text-1xl text-sm'>Designing and developing innovative software solutions that streamline processes, enhance productivity, and drive business growth.</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-300 w-full p-2 md:p-5 h-fit flex  gap-4 '>
                <div className='w-full bg-white rounded-md p-3 min-h-32 max-h-fit flex flex-col md:flex-row gap-3'>
                    <div className='h-fit w-full md:w-[12%] bg-gray-300 flex justify-center items-center p-4'><BsSuitcaseLg className='text-6xl t_color' /></div>
                    <div className='md:w-[80%] w-full  md:text-start text-center'>
                        <h1 className='md:text-2xl text-md font-bold'>corporate solutions</h1>
                        <p className='pt-2 md:text-1xl text-sm'>Providing a comprehensive suite of strategic consulting and technological services to help organizations navigate the digital landscape and achieve sustainable success.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services