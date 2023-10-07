import React from "react";
import AboutPage from "../../Styles/AboutPage.css";
import about_banner_img from "../../Assets/images/about_banner_img.jpg";

const About = () => {
  return (
    <>
      <div className="about-us-banner">
        <section className="ban_sec">
          <div className="about_img">
            <img src={about_banner_img} alt="contact image banner" />
          </div>
        </section>
      </div>

      
      {/* Home About Section Code Start From Here */}
      <div className="container about-container py-5">
        <div className="row">
          <div className="col-md-12 col-lg-1 about-block">
            <div className="blockdiv"></div>
          </div>
          <div className="col-md-12 col-lg-11 about-wrp">
            <h2>ABOUT US</h2>
            <div className="row" style={{ margin: "0" }}>
              <div className="col-md-6">
                <p>
                  At Milaya Energy, we have established a sterling reputation
                  synonymous with high-quality procurement services over the
                  years. For us, procurement transcends mere processes,
                  products, and figures. We foster a culture of ownership among
                  our dedicated personnel, entrusting them to adeptly manage
                  tasks on your behalf.
                </p>
                <p>
                  Our dedication to client satisfaction knows no bounds. We are
                  continually seeking fresh avenues to enhance value and
                  regularly introduce cutting-edge technological solutions to
                  simplify, expedite, and elevate service delivery.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Our teams are well-versed in overcoming even the most
                  formidable challenges, and we enthusiastically embrace every
                  opportunity to reciprocate the trust our clients place in us.
                  We thrive in the daily diversity of our work, tailoring our
                  solutions to meet your distinct requirements.
                </p>
                <p>
                  In the realm of procurement, we grasp it comprehensively. Our
                  commitment lies in infusing value, innovation, and efficiency
                  at every juncture within your supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home About Section Code End From Here */}
    </>
  );
};

export default About;
