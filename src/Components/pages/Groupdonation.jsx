import "../Navbar.css"
import { Link } from "react-router-dom";

export const Groupdonation = () => {
  return (
    <div>
      <div
        className={`w-[100%] h-[100vh] flex justify-center items-center bg-cover bg-center `}
        style={{ backgroundImage: `url(${"../images/group-donation.png"})` }}
      >
        <div className="text-center text-white space-y-4 mb-[8em]">
          <p className="text-4xl max-md:text-2xl font-lora">
            Donate as a Team and <br />
            Save More Lives
          </p>
          <p className="max-md:text-sm re">
            Come together to save lives and make a greater <br />
            impact. Join our community of donors today !
          </p>
          <Link reloadDocument to="/signup">
          <button
            className={`bg-[#008000] hover:bg-[#008000e1] text-white p-3 rounded-lg pr-6 pl-6 re`}
          >
            Get Started
          </button></Link>
        </div>
      </div>

      <div className={`p-10`}>
        <p className="text-2xl text-center text-[#404040] font-bold font-lora">
          Donate blood
        </p>
      </div>

      <img src="../images/reg.png" alt="reg" className={`mx-auto w-[80%]`} />

      <div
        className={`md:flex justify-around pt-4 max-[780px]:text-center max-[780px]:text-sm max-[780px]:space-y-10 pb-10`}
      >
        <div
          className={`space-y-10 border-solid border-2 border-[#8B0A1A] rounded-lg p-4`}
        >
          <p className="re">Registration</p>

          <p className="re">
            Please provide demographic details and <br />
            a valid government-issued ID (national <br />
            ID, driver's license, voter's card, or <br />
            passport) to our on-site staff.
          </p>
        </div>

        <div
          className={`space-y-10 border-solid bg-[#8B0A1A] rounded-lg p-4 text-white`}
        >
          <p className="re">Screening</p>

          <p className="re">
          To safeguard your health and the blood <br />
           supply, we'll conduct a quick medical <br />
            assessment, including vital signs and <br />
             health history questions.
          </p>
        </div>

        <div
          className={`space-y-10 border-solid border-2 border-[#8B0A1A] rounded-md p-4`}
        >
          <p className="re">Donation</p>

          <p className="re">
            Clearance confirmed? Our
            <br />
            phlebotomist will then collect your life- <br />
            saving blood, prioritizing aseptic <br />
            techniques."
          </p>
        </div>
      </div>

      <div
        className={`lg:flex justify-around items-center max-md:flex max-md:flex-col-reverse max-md:bg-[#8B0A1A] max-md:text-white pt-10 pb-10`}
      >
        <img
          src="../images/group-donation2.png"
          alt="group-donation 2"
          className={`place-self-center max-md:pt-4 rounded-lg px-1`}
        />

        <div className="text-center space-y-6">
          <p className={`max-md:text-xs re`}>
            "ABC Corporate partnered with Bloodlink to organize a <br />
            company-wide blood drive. Inspired by their core value of <br />
            giving back to the community, over 40 employees came <br />
            together for this life-saving mission. The drive was set up in{" "}
            <br />
            their office, and in just one day, they donated enough blood <br />
            to save 75 lives. One of the recipients, a young child <br />
            undergoing surgery, received life-saving blood just in time, <br />
            thanks to ABC Corporate’s donation. 'It’s the best thing <br />
            we've done as a team,' said team leader, Mary Johnson."
          </p>

          <p className={`text-2xl max-md:text-base font-lora text-[#706F6F]`}>
            "Do you want your company to make a <br />
            difference like ABC Corporate? <br />
            Start your group donation drive today and <br />
            save lives together."
          </p>

          <Link reloadDocument to="/signup">
          <button
            className={`bg-[#008000] hover:bg-[#008000e1] text-white p-3 rounded-lg w-[100%] re`}
          >
            Start Now
          </button></Link>

        </div>
      </div>

      <div className={`border-solid border-2 border-[#40404068] md:mx-20 mt-4 mb-6`}>
        <div className={`text-center space-y-4 p-4`}>
          <p className="text-3xl font-lora">Frequently Asked Questions </p>
          <p className="re">We are here to answer all your questions</p>
        </div>

        <div className={`md:flex justify-around p-4`}>
          <div className="space-y-4">
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">What are the eligibility requirements for donating blood?</p>
            </div>
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">Why is there a need for blood donations?</p>
            </div>
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">How often can I donate blood?</p>
            </div>
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">What can I expect during the donation process?</p>
            </div>
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">What should I do after donating blood?</p>
            </div>
            <div
              className={`border-solid border-2 border-[#40404037] rounded-md p-4`}
            >
              <p className="re">Are there any side effects to donating blood?</p>
            </div>

            <div className="flex gap-10 place-self-center">
              <img
                src="../images/left-arrow.png"
                alt="left arrow"
                className="hover:cursor-pointer"
              />
              <img
                src="../images/right-arrow.png"
                alt="right arrow"
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <img src="../images/faq.png" alt="faq" />
            <p className="text-center text-2xl font-lora">Ask a Question</p>
            <input
              type="text"
              placeholder="Enter a question"
              className={`border-solid border-2 border-[#40404037] rounded-md p-2 re` }
            />
            <button
              className={`bg-[#008000] hover:bg-[#008000e1] text-white p-3 rounded-lg pr-6 pl-6 re`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
