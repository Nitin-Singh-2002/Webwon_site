import React from 'react'
import logo2 from "../assets/logo2.png";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Myfooter = () => {
return (
    <Footer container>
    <div className="w-full">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className = 'space-y-4 mb-8'>
        <a
                        href="#"
                        className="text-xl font-semibold inline-flex items-center"
                    >
                        <img
                            src={logo2}
                            alt="Logo"
                            className=" w-16 inline-block items-center"
                        />
                        <span className="text-[#263238]">WEBWON</span>
                    </a>
                    <div>
                        <p className = 'mb-1'>Copyright © 2024 WEBWON Ltd.</p>
                        <p> All Right Reserved</p>

                    </div>
                
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
            <Footer.Link href="#">WEBWON</Footer.Link>
            </Footer.LinkGroup>
        </div>
        <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Github</Footer.Link>
            </Footer.LinkGroup>
        </div>
        <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
        </div>
        </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
        <div className=" items-center mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
        </div>
    </div>
    </div>
</Footer>
)
}

export default Myfooter