import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black py-10 text-gray-200'>
            <div className="max-w-7xl text-center flex flex-col lg:flex-row items-center gap-3 justify-between mx-auto">
                <div className='flex flex-col items-center gap-2'>
                    <img src="/logo.png" alt="" />
                    <h2 className='text-2xl font-bold'>Sheikh Task</h2>
                </div>
                <div>
                    <p> &copy;All right reserved by Sheikh Ashequr Rahman </p>

                </div>
                <div className=''>
                    <ul className='flex gap-5 justify-center mx-auto text-xl'>
                        <li><Link to="https://www.facebook.com/profile.php?id=100082603343699" target='_blank' title='Probesh Deb Nath || Facebook '  className='text-[#4267B2]'><FaFacebookF /></Link></li>
                        <li><Link to="https://github.com/skashequr" target='_blank' title='Sheikh Ashequr || Github Account' className=''><FaGithub  /></Link></li>
                        <li><Link to="https://www.linkedin.com/in/sheikh-ashequr-rahman-350998254/" target='_blank' title='Probesh Deb Nath || LinkedIn Channel' className='text-[#0077b5]'><FaLinkedinIn  /></Link></li>
                        <li><Link to="https://www.youtube.com" title='Sheikh Ashequr || Youtube Channel' target='_blank' className='text-[#c4302b]'><FaYoutube  /></Link></li>
                        <li><Link to="https://www.instagram.com" target='_blank' title='Sheikh Ashequr || Instragram' className='text-[#fccc63]'><FaInstagram  /></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer