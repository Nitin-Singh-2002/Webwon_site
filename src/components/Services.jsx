import React from 'react'
import Paytm from '../assets/paytm.svg'
import Ola from '../assets/ola.svg'
import Uber from '../assets/uber.svg'
import Hp from '../assets/hp.svg'
import Swiggy from '../assets/swiggy.svg'
import Lamborghini from '../assets/lamborghini.svg'
import { Fade, Slide, Zoom } from "react-awesome-reveal"


const Services = () => {
    const services = [
        {id: 1, title: "Create Your Presence On Web", description: "With us you can make your web presence easily", image: "/src/assets/img1.png"},
        {id: 2, title: "Maintain And Update Your Site", description: "With us your site will be maintained and updated Always", image:"/src/assets/img2.png"},
        {id: 3, title: "Grow Your Company", description: "With us your company's growth will reach new heights", image: "/src/assets/img3.png"},
    ]
return (
    <div className = 'md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <Fade cascade damping={0.1}>
        <div className = ' text-center my-8'>
            <h2 className = 'text-4xl text-gray-800 font-semibold mb-2'>Our Clients</h2>
            <p className = 'text-gray-800'>We have been working with some Fortune 100+ clients</p>
        </div>
        </Fade>
        <div className = 'my-12 flex flex-wrap justify-between items-center gap-8'>
            <Slide direction='up'>
            <img src= {Paytm} alt="Phonepe" className = ' w-24'/>
            <img src= {Ola} alt="Ola" className = ' w-24'/>
            <img src= {Uber} alt="Uber" className = ' w-24'/>
            </Slide>
            <Slide direction='down'>
            <img src= {Lamborghini} alt="Lamborghini" className = ' w-16'/>
            <img src= {Hp} alt="Hp" className = ' w-20'/>
            <img src= {Swiggy} alt="Swiggy" className = ' w-20'/>
            </Slide>
        </div>

        <Fade cascade damping={0.1}>
        <div className = 'mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className = 'text-4xl text-gray-800 font-semibold mb-3'>Manage Your Company On Web With Us</h2>
            <p className = 'text-gray-800'>What we provide to our clients</p>
        </div>
        </Fade>

        <Zoom>
        <div className = 'mt-14 grid lg:grid-cols-3 md:grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
            services.map(service => <div key={service.id} className = 'px-4 py-8 tex-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className = 'mb-4 h-15 w-15 max-auto rounded-tl-3xl rounded-br-3xl items-center'><img src={service.image} alt = "" className = ' m-auto w-52 '/>
                                <h4 className = 'text-2xl font-bold text-gray-800 mb-2 px-2'>{service.title}</h4>
                                <p className = 'text-sm text-gray-800'>{service.description}</p>
                                </div>
                            </div>
                    </div> )
            }
        </div>
        </Zoom>
    </div>
)
}

export default Services
