import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <div className='p-3 md:px-20 py-20 w-full flex flex-col items-center'>
            <h1 className='md:text-3xl text-2xl font-bold pb-5 '>Contact <span>Us</span></h1>
            <div className='border border-[#371E80] p-4 rounded-md w-full md:w-[30rem] h-fit'>
                <form className='flex gap-3 flex-col w-full' action="">
                    <label htmlFor="" className='font-bold text-lg '>First Name</label>
                    <input type="text" placeholder='Name' className='w-full bg-gray-400 placeholder:text-[#371E80] border border-[#371E80] rounded-md p-3'/>
                    <label htmlFor="" className='font-bold text-lg '>First Name</label>
                    <input type="text" placeholder='Name' className='w-full bg-gray-400 placeholder:text-[#371E80] border border-[#371E80] rounded-md p-3'/>
                    <label htmlFor="" className='font-bold text-lg '>First Name</label>
                    <input type="text" placeholder='Name' className='w-full bg-gray-400 placeholder:text-[#371E80] border border-[#371E80] rounded-md p-3'/>
                    <button className='b2'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact