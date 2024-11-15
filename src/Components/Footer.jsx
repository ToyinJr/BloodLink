let Footer = () => {
    return (
        <div className="pt-6">
            <div className={`border-solid border-[#8B0A1A] border-2 `}>

                <div className={`md:grid md:grid-cols-5 pt-10 max-md:place-self-center`}>
                <div className={`col-span-2 mx-auto`}>
                    <p className={`text-[#8B0A1A] text-4xl font-semibold`}>BloodLink</p>
                    <p>BloodLink is a nonprofit platform <br />
connecting voluntary blood donors <br />
with patients in need.</p>

<div className={`pb-6 pt-10 md:pt-20 space-y-4 `}>
                    <p className={`text-[#40404080] text-4xl font-semibold`}>Connect with Us!</p>
                    <div className={`flex gap-4`}>
                        <img className={`cursor-pointer`} src="images/facebook.png" alt="facebook" />
                        <img className={`cursor-pointer`} src="images/instagram.png" alt="facebook" />
                        <img className={`cursor-pointer`} src="images/x.png" alt="facebook" />
                        <img className={`cursor-pointer`} src="images/web.png" alt="facebook" />
                    </div>
                </div>
                </div>

                    <div className="">
                    <p className={`text-[#8B0A1A] text-4xl font-semibold`}>Engage</p>
                    <ul>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Donate Blood</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Host a Blood Drive</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Stories of Hope</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Support Us</li>
                    </ul>
                    </div>

                    <div>
                    <p className={`text-[#8B0A1A] text-4xl font-semibold`}>About</p>
                    <ul>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Who we are</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Leadership</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Privacy & Policy</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Mission & History</li>
                    </ul>
                    </div>

                    <div className="max-md:pb-2">
                    <p className={`text-[#8B0A1A] text-4xl font-semibold`}>Resources</p>
                    <ul>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Contact Us</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Customer Care FAQ</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Blog</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Video Hub</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Media</li>
                        <li className={`hover:text-[#8B0A1A] hover:cursor-pointer`}>Donor Forms</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;