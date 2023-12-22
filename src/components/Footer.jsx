import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black py-10 text-gray-200'>
            <div className="max-w-7xl text-center flex flex-col lg:flex-row items-center gap-3 justify-between mx-auto">
                <div className='flex flex-col items-center gap-2'>
                    <img src="/logo.png" alt="" />
                    <h2 className='text-2xl font-bold'>SCC Technovision</h2>
                </div>
                <div>
                    <p> &copy;All right reserved by Probesh Deb Nath </p>

                </div>
                <div className=''>
                    <ul className='flex gap-5 justify-center mx-auto text-xl'>
                        <li><Link to="https://www.facebook.com/probeshdebnath20/" target='_blank' title='Probesh Deb Nath || Facebook '  className='text-[#4267B2]'><FaFacebookF /></Link></li>
                        <li><Link to="https://github.com/probeshnath" target='_blank' title='Probesh Deb Nath || Github Account' className=''><FaGithub  /></Link></li>
                        <li><Link to="https://www.linkedin.com/in/probeshnath/" target='_blank' title='Probesh Deb Nath || LinkedIn Channel' className='text-[#0077b5]'><FaLinkedinIn  /></Link></li>
                        <li><Link to="https://www.youtube.com/channel/UCOI9Q9N-ZWHZYq3NFDeRplw" title='Probesh Deb Nath || Youtube Channel' target='_blank' className='text-[#c4302b]'><FaYoutube  /></Link></li>
                        <li><Link to="https://www.instagram.com/probeshnath/" target='_blank' title='Probesh Deb Nath || Instragram' className='text-[#fccc63]'><FaInstagram  /></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer