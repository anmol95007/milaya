import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
import HomePage from "../../Styles/HomePage.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import home_right_image from "../../Assets/images/home_right_image.png";
import slider1 from "../../Assets/images/slider1.jpg";
import slider2 from "../../Assets/images/slider2.jpg";
import slider3 from "../../Assets/images/slider3.jpg";
import slider4 from "../../Assets/images/slider4.jpg";
import slider5 from "../../Assets/images/slider5.jpg";
import craig_img from "../../Assets/images/craig_img.jpg";

const Home = () => {
  const sliderRef = useRef(null); // Create a ref for the slider component

  const settings = {
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false, // Disable mouse slide
    fade: true, // Add fade transition
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <>
      {/* Home Banner Slider Code Start from here */}
      <div className="banner-slider">
        <Slider {...settings} ref={sliderRef}>
          <div className="slider-item">
            <img src={slider1} alt="Banner 1" />
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading">
                  <h2>Project Management </h2>
                  <p>
                    Milaya Energy recognizes the growing significance of Project
                    Management and Execution in the industry, with its
                    substantial impact on customers' total asset ownership
                    costs. Our comprehensive capabilities are dedicated to
                    assisting customers in successfully managing reactivation
                    and modification projects, providing value at every phase.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  Next: Asset Management
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <img src={slider2} alt="Banner 2" />
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading">
                  <h2>Asset Management</h2>
                  <p>
                    At Milaya, our extensive decades-long experience in Asset
                    Management, combined with a wide-ranging portfolio of
                    products and services, is dedicated to enhancing the
                    reliability of your physical assets while optimizing
                    life-cycle costs.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  Next: Drilling Services
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <img src={slider3} alt="Banner 3" />
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading">
                  <h2>Drilling Services </h2>
                  <p>
                    At Milaya Energy, we excel in Drilling and Well Intervention
                    Services, providing tailored solutions to meet your
                    operational requirements.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  Next: Integrated Support
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <img src={slider4} alt="Banner 3" />
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading">
                  <h2>Integrated Support </h2>
                  <p>
                    Catering to the oil and gas industry, Milaya Energy provides
                    comprehensive Integrated Support services to boost
                    operational efficiency, safety, and productivity.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  Next: Oil Field Supplies
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <img src={slider5} alt="Banner 3" />
            <div className="text-container">
              <div className="home-banner-text-top">
                <div className="home-banner-heading">
                  <h2>Oil Field Supplies Services </h2>
                  <p>
                    Milaya Energy delivers comprehensive Oil Field Supplies
                    Services designed to meet the unique needs of your
                    operations in the oil and gas industry. We prioritize
                    quality and efficiency, providing essential equipment and
                    resources to support your success in the field.
                  </p>
                </div>
              </div>
              <div className="home-banner-text-bottom">
                <div className="home-banner-text-bottom-handler">
                  Next: Project Management
                  <div className="home-banner-slider-btn">
                    <button
                      className="slider-button-prev"
                      onClick={goToPrevSlide}
                    >
                      <ArrowBackIosIcon />
                    </button>
                    <button
                      className="slider-button-next"
                      onClick={goToNextSlide}
                    >
                      <ArrowForwardIosIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Home Banner Slider Code End from here */}

      {/* Home Banner Code Start from here */}
      <div className="main-container">
        <div className="container">
          <div className="row row-home-container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="home-banner-text">
                <h1>Milaya Energy</h1>
                <h1>Fulfilling Energy Needs Every Day</h1>
                <p style={{ textAlign: "justify" }}>
                  Milaya Energy is a leading energy provider in the Oil & Gas
                  industry, serving both upstream and downstream sectors. We
                  pride ourselves on delivering reliable results that enhance
                  productivity, optimize operations, and minimize risk through
                  our advanced services within the industry.
                </p>
              </div>
              <div className="home-btn">
                <button>
                  <NavigateNextIcon />
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="home-banner">
                <img src={home_right_image} alt="home_right_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Banner Code End from here */}

      {/* Home About Section Code Start From Here */}
      <div className="container about-container pt-3">
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

      {/* Home Portfolio Section Code Start From Here */}
      <section className="box-wrapper-3 pt-3" id="platform">
        <div className="container portfolio-container">
          <div className="row no-gutters justify-content-end">
            <div className="col-md-12 col-lg-6 pt-col">
              <h2 className="text-center">
                MILAYA ENERGY <br /> PLATFORMS
              </h2>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 pt-col-sm no-gutter pb-3"
              style={{ background: "#aa5a29" }}
            >
              <a href="/project-management">
                <div className="pt-head-wrap">
                  <h3 className="title-wrp">Project Management</h3>
                </div>
                <div
                  className="pt-wrap"
                  style={{
                    background:
                      "url(https://joulon.com/wp-content/uploads/2019/03/ProjectManagement_thump.jpg) no-repeat center",
                    backgroundSize: "cover",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Our project management oriented companies execute a wide
                    range of projects including major repairs and…
                  </p>
                </div>
              </a>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 pt-col-sm no-gutter pb-3"
              style={{ background: "#008ba6" }}
            >
              <a href="/assest-management">
                <div className="pt-head-wrap">
                  <h3 className="title-wrp"> Asset Management</h3>
                </div>
                <div
                  className="pt-wrap"
                  style={{
                    background:
                      "url(https://joulon.com/wp-content/uploads/2019/03/2.jpg) no-repeat center",
                    backgroundSize: "cover",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Pressure control and management platform supports all high
                    pressure systems on drilling and production vessels and land
                    rigs …
                  </p>
                </div>
              </a>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 pt-col-sm no-gutter pb-3"
              style={{ background: "#aa5a29" }}
            >
              <a href="/drilling-services">
                <div className="pt-head-wrap">
                  <h3 className="title-wrp">Drilling Services </h3>
                </div>
                <div
                  className="pt-wrap"
                  style={{
                    background:
                      "url(https://joulon.com/wp-content/uploads/2019/03/3.jpg) no-repeat center",
                    backgroundSize: "cover",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Inspection &amp; recertification as required by flag state,
                    class society, coastal state, API and maintenance system
                    driven inspection …
                  </p>
                </div>
              </a>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 pt-col-sm no-gutter pb-3"
              style={{ background: "#008ba6" }}
            >
              <a href="/integrated-support">
                <div className="pt-head-wrap">
                  <h3 className="title-wrp">
                    Integrated Support &amp; CONTROLS
                  </h3>
                </div>
                <div
                  className="pt-wrap"
                  style={{
                    background:
                      "url(https://joulon.com/wp-content/uploads/2019/03/4.jpg) no-repeat center",
                    backgroundSize: "cover",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Power plant &amp; controls platform offers maintenance
                    services for power generation equipment, along with control
                    system solutions for power plants, process equipment, safety
                    systems, remote monitoring, SCADA and vessel management
                    systems …
                  </p>
                </div>
              </a>
            </div>

            <div
              className="col-sm-6 col-md-6 col-lg-3 pt-col-sm no-gutter pb-3"
              style={{ background: "#aa5a29" }}
            >
              <a href="/oil-Field-supplies">
                <div className="pt-head-wrap">
                  <h3 className="title-wrp">Oil Field Supplies Services </h3>
                </div>
                <div
                  className="pt-wrap"
                  style={{
                    background:
                      "url(https://joulon.com/wp-content/uploads/2019/03/5.jpg) no-repeat center",
                    backgroundSize: "cover",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Mechanical works brings together the equipment design,
                    overhaul, and repair expertise of our portfolio companies …
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Home Portfolio Section Code End From Here */}

      {/* Home Craig International Section Code Start From Here */}
      <div className="home-craig-container mt-3">
        <div class="home-craig-left">
          <img src={craig_img} alt="Carig image" />
        </div>
        <div class="home-craig-right">
          <div class="home-craig-right-cover">

            <div className="craig-heading">

              <h2>
                Why Milaya <br className="craig-break" /> Energy
              </h2>
            </div>
            <div className="craig-para">
              <p>
                We have been formally acknowledged for our service excellence and
                innovative approach. Together with our scale, experience and
                know-how, they make your procurement pound go further
              </p>
            </div>
            <div className="craig-btn">
              <div className="home-btn">
                <button className="border border-white">
                  <NavigateNextIcon />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home Craig International Section Code End From Here */}
    </>
  );
};

export default Home;
