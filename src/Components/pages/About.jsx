import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src="../images/About.png" alt="About" className="image" />
        <h1 className="image-text">ABOUT US</h1>
      </div>
      <div className="additional-text">
        <p>
          At Blood Link, our mission is to create a life-saving connection between blood donors and those in need. We are a platform dedicated to facilitating safe, quick, and efficient blood donations, making it easier for people to volunteer as donors and for patients to request life-saving blood when they need it most.
        </p>
      </div>
      {/*another image container with similar styling */}
      <div className="image-container">
        <img src="../images/About us.png" alt="Additional Info" className="image" />
      </div>
        {/*  Vision, Mission, and Core Values */}
        <div className="values-section">
        <div className="value-item">
          <h2>Vision</h2>
          <p>
            To build a world where every person in need of blood receives it promptly and safely, fostering a global community of donors committed to saving lives and empowering healthcare systems through reliable blood accessibility.
          </p>
        </div>
        <div className="value-item">
          <h2>Mission</h2>
          <p>
            Our mission at Blood Link is to connect willing blood donors with those in urgent need, providing a seamless platform that makes the donation and request process safe, efficient, and accessible to all.
          </p>
        </div>
        <div className="value-item">
          <h2>Core Values</h2>
          <p>
            <strong>Compassion:</strong> We are driven by empathy and a deep commitment to saving lives.
          </p>
          <p>
            <strong>Accessibility:</strong> We believe in making blood donation and access to blood simple and inclusive, ensuring everyone can connect and contribute to this life-saving mission.
          </p>
        </div>
      </div>
    </div>
  );
};
