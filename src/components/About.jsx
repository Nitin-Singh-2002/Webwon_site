import React from 'react'
import About_img from '../assets/about.svg'
import Client from '../assets/Client.svg'
import Project from '../assets/project.svg'
import Websites from '../assets/Websites.svg'
import Customers from '../assets/Customers.svg'

const About = () => {
return (
    <div id='about'>
        {/* about text  */}
        <div className='px-4 lg:p-14 max-w-screen-2xl mx-auto my-8'>
            <div className = 'md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className = ' ml-12 md:w-3/5 max-auto'>
                    <h2 className = ' text-4xl text-gray-800 font-semibold mb-4 md:w-4/5'>About</h2>
                    <p className = 'md:w-3/4 text-sm text-gray-800 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores tempora, mollitia impedit suscipit numquam voluptas eos, omnis quod corporis ea maxime ab consectetur fugit ipsam at aspernatur expedita repudiandae eaque architecto enim distinctio libero neque id? Nisi aliquam, exercitationem cum officia iure veniam odio tempora consequuntur, perferendis nostrum deleniti.</p>
                    <button className = 'btn-first'>Learn More</button>
                </div>
        {/* about image */}
                <div>
                    <img src= {About_img} alt="About" className = ' w-80 mr-12' />
                </div>
            </div>
        </div>

        {/* company stats */}
        <div className = 'px-4 lg:p-14 max-w-screen-2xl mx-auto bg-slate-200 py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className = 'md:w-1/2'>
                <h2 className = ' text-4xl text-gray-800 font-semibold mb-4 md:w-2/3'>Helping Clients To <br/><span className = 'text-[#C96BDB]'>Reinvent There Business</span></h2>
                    <p>We Reached Here With Our Hard Work And Dedication</p>
                </div>

        {/* stats */}
                
                <div className = 'md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className = 'space-y-8'>
                        <div className = 'flex items-center gap-4'>
                            <img src= {Client} alt="Client" className = 'w-16'/>
                            <div>
                                <h4 className = 'text-2xl text-gray-800 font-semibold'>100+</h4>
                                <p>Clients</p>
                            </div>
                        </div>

                        <div className = 'flex items-center gap-4'>
                            <img src= {Websites} alt="Websites" className = 'w-16'/>
                            <div>
                                <h4 className = 'text-2xl text-gray-800 font-semibold'>1000+</h4>
                                <p>Websites</p>
                            </div>
                        </div>
                    </div>

                    <div className = 'space-y-8'>
                        <div className = 'flex items-center gap-4'>
                            <img src= {Project} alt="Project" className = 'w-16'/>
                            <div>
                                <h4 className = 'text-2xl text-gray-800 font-semibold'>100+</h4>
                                <p>Project</p>
                            </div>
                        </div>

                        <div className = 'flex items-center gap-4'>
                            <img src= {Customers} alt="Customers" className = 'w-16'/>
                            <div>
                                <h4 className = 'text-2xl text-gray-800 font-semibold'>1000+</h4>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
)
}

export default About
