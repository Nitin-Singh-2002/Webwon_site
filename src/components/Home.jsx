import React from 'react';
import { Carousel } from 'flowbite-react';
import Banner1 from '../assets/banner1.svg';
import Banner2 from '../assets/banner2.svg';
import Banner3 from '../assets/banner3.svg';

const Home = () => {
return (
    <div className = 'bg-slate-200' id='home'>
        <div className = 'px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className = "w-full mx-auto">
        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src= {Banner1} alt='Banner' className = 'w-60 mt-10 md:w-96 mr-8'/>
            </div>
            <div className = "md:w-1/2">
                <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Innovate with tech <span className = ' text-[#C96BDB] leading-snug'>lead the future</span></h3>
                <p className = 'text-gray-800 text-base mb-8'>Harnessing the power of technology for a brighter future.</p>
                <button className = "btn-first">Register</button>
            </div>
        </div>
        </div>
        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src= {Banner2} alt='Banner' className = 'w-60 mt-10 md:w-96 mr-8'/>
            </div>
            <div className = "md:w-1/2">
                <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Developing ideas <span className = ' text-[#C96BDB] leading-snug'>into impact</span></h3>
                <p className = 'text-gray-800 text-base mb-8'>Development: Where ideas evolve into reality.</p>
                <button className = "btn-first">Register</button>
            </div>
        </div>
        </div>
        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src= {Banner3} alt='Banner' className = 'w-60 mt-10 md:w-96 mr-8'/>
            </div>
            <div className = "md:w-1/2">
                <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Grow boldly, <span className = ' text-[#C96BDB] leading-snug'>thrive endlessly</span></h3>
                <p className = 'text-gray-800 text-base mb-8'>Fuel your success through continuous growth.</p>
                <button className = "btn-first">Register</button>
            </div>
        </div>
        </div>
        </Carousel>
        </div>
    </div>
)
}

export default Home;