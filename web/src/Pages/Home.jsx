import React from 'react'
import Bg1 from '../album/bg1.jpeg';
import Bg2 from '../album/bg2.jpeg';
import { Cart,Footer } from '../component';
import ImgHome from '../album/ImgHome.jpg';
import ImgHome2 from '../album/ImgHome2.jpg';
import ImgHome3 from '../album/ImgHome3.jpg';
import {GiCompass,GiDiamondHard,GiNewspaper} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='py-[150px] w-[100%] mx-auto relative '>
        <div className='w-[80%] mx-auto py-[50px]'>
          <div className='flex flex-col md:items-center items-start md:flex-row'>
            <div className='md:w-[50%] w-full'>
                <h2 className='text-5xl w-full md:leading-normal leading-[70px]  font-bold tracking-wider mb-5'>Design Your Comfort Zone</h2>
                <p className='text-lg leading-7 text-gray-500 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. lusto, at sed omnit corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati lib
                  ro et quia tempora exceptuti quis alias?
                </p>
                <Link className='bg-[#996633] text-lg text-white tracking-wider px-4 py-2 rounded-lg' to='/product'>SHOP NOW</Link>
            </div>
            <div className='relative h-[500px] w-[50%]  md:visible md:opacity-100 invisible opacity-0 hidden md:block'>
              <div className='absolute top-[100px] left-[100px] w-[30%] h-[300px] bg-[#f6e4f6] rounded-sm '></div>
                <div className='absolute top-[0px] w-[70%] ml-[100px] left-[50px] h-full ' >
                  <img src={Bg1} alt="Bg1" className='w-full h-full object-cover rounded-sm' />
                </div>
                <div className="absolute bottom-0 left-[20px] w-[250px]  "> 
                  <img src={Bg2} alt="Bg2" className='w-full h-auto rounded-md'/>
                </div>
              </div>
            </div>
        </div>
        <div className='mt-10 bg-teal-50 py-[50px] '>
          <div className='w-[80%] mx-auto'>
          <h2 className='relative text-center text-4xl font-semibold  after:absolute after:content-[""] after:w-[100px] after:h-[3px] after:bg-[#993333] after:left-[50%] after:-bottom-[10px] after:translate-x-[-50%]'>Featured Products</h2>
          <div className='w-full flex  items-center gap-3 justify-center mt-16 flex-wrap lg:justify-between'>
          <Cart img={ImgHome} title="Entertainment Center" price="599.99" id="9" />
          <Cart img={ImgHome2} title="High-Back Bench" price="399.99" id='2' />
          <Cart img={ImgHome3} title="Modern Bookshelf" price="319.99" id='23'/>
          </div>
          <div className='text-center w-[100%] mt-12'>
          <Link className=" bg-[#993333] text-white px-3 py-1 rounded-md font-semibold tracking-wide text-lg cursor-pointer" to='/product'>ALL PRODUCTS</Link>
          </div>
          </div>
        </div>
        <div className='w-[100%] bg-[#cc9966] md:h-[400px] h-auto'>
          <div className='w-[80%] mx-auto py-10 relative h-[100%]'>
          <div className='flex md:flex-row flex-col md:items-center items-start justify-between mb-5 '>
            <h2 className='text-4xl font-semibold  md:w-[350px] w-auto  tracking-wider text-[#431816] mb-4'>Custom Furniture Built Only For You</h2>
            <p className='md:w-[600px] w-auto text-sm text-[#624121]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Saepe dolorum debitis consectur reprehenderit non aliquam voluptates aut vero consequuntur.</p>
          </div>
          <div className='md:flex flex flex-col md:flex-row items-center justify-between gap-10 md:absolute bottom-0 relative md:-bottom-[100px] left-0 w-[100%]'>
          <div className='flex flex-col bg-[#d9934c] items-center text-center py-10 px-3 gap-3 rounded-sm'>
            <GiCompass className='w-[70px] h-[70px] text-4xl p-4 rounded-full bg-white text-[#431816]'/>
            <h2 className='text-2xl text-[#431816] font-semibold'>Mission</h2>
            <p className='font-normal text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
          </div>
          <div className='flex flex-col bg-[#d9934c] items-center text-center px-3 gap-3 py-10 rounded-sm'>
            <GiDiamondHard className='w-[70px] h-[70px] text-4xl p-4 rounded-full bg-white text-[#431816]'/>
            <h2 className='text-2xl text-[#431816] font-semibold'>Vision</h2>
            <p className='font-normal text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
          </div>
          <div className='flex flex-col bg-[#d9934c] items-center text-center px-3 py-10 rounded-sm gap-3'>
            <GiNewspaper className='w-[70px] h-[70px] text-4xl p-4 rounded-full bg-white text-[#431816]'/>
            <h2 className='text-2xl text-[#431816] font-semibold'>History</h2>
            <p className='font-normal text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
          </div>
          </div>
          </div>
        </div>
        <div className='bg-white w-[100%] pt-[400px]'>  
          <div className='w-[80%] mx-auto flex md:flex-row flex-col items-start md:items-center gap-4'>  
            <div className='md:w-[50%] w-full'>
          <h2 className='font-semibold text-3xl tracking-wider mb-[40px] '>Join our newsletter and get 20% off</h2>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            </div>
            <div className='border-2 h-[40px] flex items-center md:w-[50%] w-full  border-black rounded-md '>
             
                <input type="email" name='email' placeholder='Enter Email' className='w-[70%] h-[100%] outline-none px-3' />
                <button  className='w-[30%] h-[100%] bg-[#d9934c] border-l-2 border-black'>Subscribe</button>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home