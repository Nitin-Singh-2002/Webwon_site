import React from "react";
import Website from "../assets/website.svg";
import App from "../assets/web app.svg";
import { Slide } from "react-awesome-reveal";

const Product = () => {
  return (
    <div id="product">
      {/* Product text  */}
      <Slide>
        <div className="px-4 lg:p-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className=" ml-8 md:w-3/5 max-auto">
              <h2 className=" text-4xl text-gray-800 font-semibold mb-4 md:w-4/5">
                Static Websites
              </h2>
              <p className="md:w-3/4 text-sm text-gray-800 mb-8">
                At Webwon, we specialize in creating high-quality static
                websites that deliver fast, secure, and reliable online
                experiences. Our static websites are perfect for businesses and
                individuals looking for a cost-effective and efficient way to
                establish a strong online presence. Static websites consist of
                fixed content that doesn’t change dynamically. Unlike dynamic
                websites that rely on server-side processing and databases,
                static websites are built using simple HTML, CSS, and
                JavaScript. This makes them incredibly fast and easy to deploy,
                maintain, and scale.
              </p>
              <button className="btn-first">Learn More</button>
            </div>
            {/*  Product image */}
            <div>
              <img src={Website} alt="Website" className=" w-72" />
            </div>
          </div>
        </div>
      </Slide>

      <Slide direction="right">
        <div className="px-4 lg:p-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Product text */}
            <div className=" ml-8 md:w-3/5 max-auto">
              <h2 className=" text-4xl text-gray-800 font-semibold mb-4 md:w-4/5">
                Web Applications
              </h2>
              <p className="md:w-3/4 text-sm text-gray-800 mb-8">
                Discover the power of modern web applications with our latest
                project, designed to deliver seamless functionality, exceptional
                user experience, and robust performance. Our web application is
                crafted to meet the diverse needs of businesses and individuals,
                providing a powerful tool for managing and optimizing various
                tasks and processes. A web application is a dynamic, interactive
                software application that runs on a web server and is accessed
                through a web browser. Unlike static websites, web applications
                offer real-time interaction and are capable of performing
                complex operations, making them ideal for a wide range of
                purposes from e-commerce to project management.
              </p>
              <button className="btn-first">Learn More</button>
            </div>

            {/* Product image */}
            <div>
              <img src={App} alt="Web App" className=" w-72" />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Product;
