import "../Navbar.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className={`bg-[#8B0A1A] min-[700px]:h-[100vh]`}>
        <div className={`text-white space-y-2 lg:mx-[2em] pt-4 pb-4`}>
          <p className={`lg:text-4xl md:text-2xl font-bold font-lora`}>
            Give the Gift of Life – <br /> Donate Blood Today!
          </p>
          <p
            className={`md:place-self-end max-sm:text-xs font-normal font-rethinksans re`}
          >
            By donating blood, you can save up to three lives with just <br />
            one donation. Every two seconds, someone in the world <br />
            needs a blood transfusion, and your contribution is critical.
          </p>
          <div>
            <Link reloadDocument to="/donate-blood#donateBlood">
            <button
              className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg re font-bold place-items-start pl-6 pr-6 `}
            >
              Donate Now
            </button>
            </Link>
          </div>

          <iframe
            className="w-[100%] h-[60vh] rounded-lg"
            src="https://www.youtube.com/embed/n_ageaVcc-0?si=jwFXiXKRe_UsJ60j"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>

      <div className={`pt-10`}>
        <div
          className={`bg-[#8B0A1A1A] lg:flex justify-between rounded-lg max-sm:flex max-sm:flex-col-reverse`}
        >
          <img
            className={`max-lg:mx-auto lg:mx-[2em]`}
            src="images/emergency.png"
            alt="emergency"
          />

          <div className="place-self-center flex flex-col space-y-4 mx-[2em]">
            <p className="md:text-4xl font-bold font-lora">
              Activate Emergency Mode – <br /> Get Help Now!
            </p>

            <p className={`max-md:text-xs re`}>
              When every second counts, activate Emergency Mode to <br />
              instantly connect with blood donors in your area. This <br />
              feature prioritizes your request and sends urgent <br />
              notifications to donors ready to help, ensuring the fastest <br />
              possible response. Don’t wait—activate Emergency Mode to <br />
              secure the blood you need in critical moments. Take action <br />{" "}
              now!
            </p>

            <div className="">
              <button
                className={`bg-[#008000] hover:bg-green-600 p-3 rounded-lg font-bold text-white pl-6 pr-6`}
              >
                Activate Now
              </button>
            </div>
          </div>
        </div>

        <div className={`pt-10 text-center max-md:text-sm`}>
          <p className={`md:text-4xl font-lora`}>
            Quickly <span className={`text-[#008000]`}>connect</span> with blood
            donors or recipients near you.
            <br />
            Our platform offers real-time availability and hyper-local <br />
            matching, making lifesaving support easy
          </p>
          <p className={`text-[#706F6F] pt-4 re`}>
            Join a network built for immediate, local blood <br /> connections
          </p>
        </div>

        <div
          className={`pt-10 mx-[3em] md:flex max-md:space-y-4 justify-between items-center text-center`}
        >
          <div className={`space-y-2`}>
            <img
              className={`mx-auto`}
              src="../images/instant.png"
              alt="instant"
            />
            <p className={`text-xl font-lora`}>Instant Matching</p>
            <p className={`text-[#706F6F] re`}>
              Find compatible blood donors in <br /> moments for urgent needs
            </p>
          </div>

          <div className={`space-y-2`}>
            <img
              className={`mx-auto`}
              src="../images/community.png"
              alt="instant"
            />
            <p className={`text-xl font-lora`}>Community Support</p>
            <p className={`text-[#706F6F] re`}>
              Empowering communities to unite and <br /> save lives together
            </p>
          </div>

          <div className={`space-y-2`}>
            <img
              className={`mx-auto`}
              src="../images/real-time.png"
              alt="instant"
            />
            <p className={`text-xl font-lora`}>Real-Time Notifications</p>
            <p className={`text-[#706F6F] re`}>
              Receive instant alerts for critical blood <br /> requests and
              updates
            </p>
          </div>
        </div>

        <div
          className={`relative bg-[#8B0A1A] pt-10 mt-10 md:pb-[180px] max-md:pb-[180px]`}
        >
          <div className={`text-center text-white space-y-4`}>
            <p className={`text-4xl font-bold font-lora`}>How It works</p>
            <p className={`text-xs sm:text-base re`}>
              Sign up and create a profile as a donor or a recipient. This helps
              us <br />
              match you with the right people and ensures all information is
              secure.
            </p>
          </div>

          <div
            className={`absolute grid grid-cols-7 md:pl-8 pt-10 max-[801px]:hidden`}
          >
            <img src="../images/card1.png" alt="sign up" />
            <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
            <img src="../images/card2.png" alt="verify" />
            <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
            <img src="../images/card3.png" alt="schedule" />
            <img className={`mx-auto`} src="images/arrow.png" alt="arrow" />
            <img src="../images/card4.png" alt="stay informed" />
          </div>

          <div
            className={`absolute left-1/2 -translate-x-1/2 pt-4 min-[801px]:hidden `}
          >
            <img src="../images/card1.png" alt="sign up" />
            <img src="../images/card2.png" alt="verify" />
            <img src="../images/card3.png" alt="schedule" />
            <img src="../images/card4.png" alt="stay informed" />
          </div>
        </div>

        <div
          className={`text-center text-[#404040] space-y-4 min-[801px]:pt-[18em] max-[801px]:pt-[85em]`}
        >
          <p className={`text-4xl font-bold font-lora`}>What people say</p>
          <p className={`text-xs sm:text-base re`}>
            From donors to recipients, every story matters. <br />
            Explore the heartfelt testimonials from ur BloodLink family.
          </p>
        </div>

        <div>
          <div
            className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center pt-10 mx-[2em]`}
          >
            <img className={`md:place-self-start`} src="../images/moses.png" alt="moses" />
            <img className={``} src="../images/sarah.png" alt="sarah" />
            <img className={`md:place-self-end`} src="../images/emily.png" alt="emily" />
          </div>
          <img
            className={`pt-4 mx-auto hover:cursor-pointer`}
            src="../images/indicator.png"
            alt="indicator"
          />
        </div>
      </div>
    </div>
  );
};
