import React from 'react'
import Bg1 from '../album/bg1.jpeg'; 
const About = () => {
  return (
    <div className='pt-[100px] pb-[150px]'>
      <div className='w-full bg-[#e2c7c7] py-[50px] opacity-80'>
      <h1 className='text-[#331200] text-3xl font-semibold ml-[200px]'><span className='text-[#993300]'>Home</span> / About</h1>
      </div>
      <div className='lg:flex-row flex flex-col mt-20 w-[80%] mx-auto gap-5'>
        <img src={Bg1} alt={Bg1} className="lg:w-[50%] h-auto w-full  lg:h-[500px] object-cover" />
        <div className='lg:w-[50%] w-full'>
          <h2 className='text-5xl relative after:absolute after:content-[""] after:-bottom-[10px] after:left-0 after:w-[80px] after:h-[4px] after:bg-[#993300]  font-semibold mb-10'>Our Story</h2>
          <p className='text-gray-600 text-[16px] leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
        </div>
      </div>
    </div>
  )
}

export default About