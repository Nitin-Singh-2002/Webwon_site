import React from 'react'
import Website from '../assets/website.svg'
import App from '../assets/web app.svg'

const Product = () => {
return (
    <div id='product'>
    {/* Product text  */}
    <div className='px-4 lg:p-14 max-w-screen-2xl mx-auto my-8'>
        <div className = 'md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className = ' ml-8 md:w-3/5 max-auto'>
                <h2 className = ' text-4xl text-gray-800 font-semibold mb-4 md:w-4/5'>Static Websites</h2>
                <p className = 'md:w-3/4 text-sm text-gray-800 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores tempora, mollitia impedit suscipit numquam voluptas eos, omnis quod corporis ea maxime ab consectetur fugit ipsam at aspernatur expedita repudiandae eaque architecto enim distinctio libero neque id? Nisi aliquam, exercitationem cum officia iure veniam odio tempora consequuntur, perferendis nostrum deleniti.</p>
                <button className = 'btn-first'>Learn More</button>
            </div>
    {/*  Product image */}
            <div>
                <img src= {Website} alt="Website" className = ' w-72' />
            </div>
        </div>
    </div>

    <div className='px-4 lg:p-14 max-w-screen-2xl mx-auto my-8'>
        <div className = 'md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            
              {/* Product text */}
            <div className = ' ml-8 md:w-3/5 max-auto'>
                <h2 className = ' text-4xl text-gray-800 font-semibold mb-4 md:w-4/5'>Web Applications</h2>
                <p className = 'md:w-3/4 text-sm text-gray-800 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores tempora, mollitia impedit suscipit numquam voluptas eos, omnis quod corporis ea maxime ab consectetur fugit ipsam at aspernatur expedita repudiandae eaque architecto enim distinctio libero neque id? Nisi aliquam, exercitationem cum officia iure veniam odio tempora consequuntur, perferendis nostrum deleniti.</p>
                <button className = 'btn-first'>Learn More</button>
            </div>
    
            {/* Product image */}
            <div>
                <img src= {App} alt="Web App" className = ' w-72' />
            </div>
        
        </div>
    </div>    
    </div>
)
}

export default Product
