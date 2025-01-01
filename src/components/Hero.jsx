import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='p-3 md:px-20 '>
            <div className='md:flex-row flex flex-col-reverse items-center justify-between w-full py-10 pb-20'>
            
<div className='md:w-[45%] lg:w-[45%] w-full pt-9'>
   <h1 className='text-4xl font-bold text-center md:text-left'>Master New <span>Skills</span> Empower Your <span>Future</span>.</h1> 
   <p className='text-center md:text-left text-gray-500 pt-2 text-sm'>Join our expert-led courses and gain the knowledge and confidence to achieve your personal and professional goals. Learn anytime, anywhere!</p>
   <div className='pt-4 flex w-full gap-4 justify-center md:justify-start'>
   <button className=' b2 '>Register</button>
   <button className=' b1 block md:hidden'>Sign up</button>
   </div>
</div>
<img src="https://i.imgur.com/8kHxTrK.png" className='object-cover md:w-[40%] lg:w-[45%] w-full' alt="pi-code" />
            </div>
        </div>




        <div className='md:px-20 px-0'>
<div className='p-4 rounded-lg bg-gray-300 flex flex-col w-full justify-center items-center'>
<h1 className='md:text-4xl text-2xl w-52 font-bold text-center text-white md:w-96'>Test Your <span>Knowledge</span> And <span>WIN</span>🎉</h1>
<p className='py-8 text-center'>Challenge yourself with a variety of general knowledge questions and discover how much you really know!</p>
<button className='b1'>Start</button>
           </div>
        </div>
        
    </div>
  )
}

export default Hero