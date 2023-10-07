import React, { useState, useEffect } from "react";
import GlobalPage from "../../Styles/GlobalPage.css";
import craig_img from "../../Assets/images/craig_img.jpg";

const GlobalReach = () => {
  const textItems = [
    "Our unrivalled Scale of access to vendor and products worldwide means we are always positioned to meet your needs",
    "Trusted to deliver by many of the worlds leading energy operator and contractor .",
    "Equipped with all accreditations to support your operations wherever you are",
    "Bases in the UAE, Qatar, KSA, USA, & UK",
    "Established Partner to client in 55 countries worldwide .",
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textItems[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % textItems.length);
      setCurrentText(textItems[visibleIndex]);
    }, 5000); // Change slide every 3 seconds (adjust the duration as needed)

    return () => clearInterval(interval);
  }, [visibleIndex, textItems]);

  return (
    <>
      {/* Banner Section code start from here */}
      <div className="global-container">
        <div className="global-content">
          <div className="global-text-carousel">
            <div className="global-carousel-text-container">
              {textItems.map((text, index) => (
                <p
                  key={index}
                  className={`carousel-text ${
                    visibleIndex === index ? "visible" : ""
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      {/* Banner Section code start from here */}

      {/* Banner Image-Text Section code start from here */}
      <div className="#">
        <div className="global-wrapper">
          <div className="global-left-container">
            <h1>Your Procurement Partner</h1>
            <p>
              At Milaya Energy, our advanced systems and services are the
              foundation of our ability to deliver outsourced procurement
              support wherever it's needed.
            </p>

            <p>
              Our international teams, comprised of experienced buyers and
              dedicated support personnel, possess deep insights into your
              market, understand your challenges, and prioritize your needs.
            </p>

            <p>
              The result is a unique and customized procurement package designed
              to meet your specific requirements.
            </p>
          </div>
          <div className="global-right-container">
            <img src={craig_img} alt="global image here" />
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}

      {/* Global Map Section code start from here */}
      <div style={{marginTop:'1rem'}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.135663377414!2d55.3870863!3d25.2996457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db017079b37%3A0x2c4199b02f6451dd!2sMilaya%20Energy%20Oilfield%20%26%20Natural%20Gas!5e0!3m2!1sen!2sin!4v1696528207982!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Global Map Section code start from here */}
    </>
  );
};

export default GlobalReach;
