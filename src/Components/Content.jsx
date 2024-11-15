let Content = () => {
    return (
        <div>
            <div className={`bg-[#8B0A1A]`}>
                <div className={`text-white space-y-2 lg:mx-[180px] mx-16 pt-4`}>
                    <p className={`lg:text-4xl md:text-2xl font-bold`}>Give the Gift of Life – <br /> Donate Blood Today!</p>
                    <p className={`md:place-self-end max-sm:text-xs`}>By donating blood, you can save up to three lives with just <br /> 
                    one donation. Every two seconds, someone in the world <br />
                     needs a blood transfusion, and your contribution is critical.</p>
                     <div><button className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg font-bold`}>Donate Now</button></div>

                     <img src="images/hero-img.png" alt="hero" className={`mx-auto p-2 max-[700px]:hidden`} />
                     <img src="images/hero-img-mobile.png" alt="hero" className={`mx-auto rounded-lg hamburger min-[700px]:hidden`} />
                </div>
            </div>
        </div>
    )
}

export default Content