import {Link} from 'react-router-dom'
import './Navbar.css'

export const Footer = () => {
    return (
        <div className="pt-6 mt-10">
        <div className={`border-solid border-[#8B0A1A] border-2 `}>

            <div className={`md:grid md:grid-cols-5 pt-10 max-md:place-self-center`}>
            <div className={`col-span-2 mx-auto`}>
                <p className={`text-[#8B0A1A] text-4xl font-semibold font-lora`}>BloodLink</p>
                <p className='re pt-2'>BloodLink is a nonprofit platform <br />
connecting voluntary blood donors <br />
with patients in need.</p>

<div className={`pb-6 pt-10 md:pt-20 space-y-4 `}>
                <p className={`text-[#40404080] text-4xl font-semibold font-lora`}>Connect with Us!</p>
                <div className={`flex gap-4`}>
                    <img className={`cursor-pointer`} src="../images/facebook.png" alt="facebook" />
                    <img className={`cursor-pointer`} src="../images/instagram.png" alt="facebook" />
                    <img className={`cursor-pointer`} src="../images/x.png" alt="facebook" />
                    <img className={`cursor-pointer`} src="../images/web.png" alt="facebook" />
                </div>
            </div>
            </div>

                <div className="">
                <p className={`text-[#8B0A1A] text-4xl font-semibold font-lora`}>Engage</p>
                <ul className='space-y-1'>
                    <Link reloadDocument to='/verification'><li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Donate Blood</li></Link>
                    <Link reloadDocument to="/signup"><li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Host a Blood Drive</li></Link>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Stories of Hope</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Support Us</li>
                    <Link reloadDocument to='/About'><li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>About Us</li></Link>
                </ul>
                </div>

                <div>
                <p className={`text-[#8B0A1A] text-4xl font-semibold font-lora`}>About</p>
                <ul className='space-y-1'>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Who we are</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Leadership</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Privacy & Policy</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Mission & History</li>
                </ul>
                </div>

                <div className="max-md:pb-2">
                <p className={`text-[#8B0A1A] text-4xl font-semibold font-lora `}>Resources</p>
                <ul className='space-y-1'>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Contact Us</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Customer Care FAQ</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Blog</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Video Hub</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Media</li>
                    <li className={`hover:text-[#8B0A1A] hover:cursor-pointer re`}>Donor Forms</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
  };
