import React from 'react'

const Course = () => {
  return (
    <div id="course">
        <div className='p-3 md:px-20 pt-20 '>
            <div className=''>
                <h1 className='md:text-3xl text-2xl font-bold'>Our most Popular <span>Course</span></h1>
                <p className='text-gray-500 pt-3 text-sm'>Enhance your skills with courses in Web Development, Data Analysis, and Digital Marketing.</p>
            </div>

            <div className='  pt-10 w-full overflow-x-auto h-fit hide-scrollbar  flex '>
                <div className='  gap-8 flex w-max '>
                <div className=' course'>
                    <div className='w-full h-40 bg-white'>

                    </div>
                    <div className='course_cont'>
                        <h1 className='course_heding'>Web Development Essentials</h1>
                        <p className='course_des'>Learn to build stunning websites from scratch with HTML, CSS, and JavaScript. Perfect for beginners looking to kickstart their coding journey.</p>
                        <button className='b2'>Register</button>
                    </div>
                    </div>
                <div className=' course'>
                    <div className='w-full h-40 bg-white'>

                    </div>
                    <div className='course_cont'>
                        <h1 className='course_heding'>Mastering Data Analysis</h1>
                        <p className='course_des'>Unlock the power of data! Dive into Excel, Python, and visualization tools to make data-driven decisions like a pro.</p>
                        <button className='b2'>Register</button>
                    </div>
                    </div>
                <div className=' course'>
                    <div className='w-full h-40 bg-white'>

                    </div>
                    <div className='course_cont'>
                        <h1 className='course_heding'>Digital Marketing Basics</h1>
                        <p className='course_des'>Discover the secrets of online growth! Master SEO, social media, and content marketing to boost your digital presence.</p>
                        <button className='b2'>Register</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Course