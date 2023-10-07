import React, { useState, useEffect } from "react";
import SupplyChainPage from "../../Styles/SupplyChainPage.css";
import supply_project__01 from "../../Assets/images/supply_project__01.jpg";
import supply_refinery_02 from "../../Assets/images/supply_refinery_02.jpg";
import supply_house__03 from "../../Assets/images/supply_house__03.jpg";
import supply_shutdown__04 from "../../Assets/images/supply_shutdown__04.jpg";
import supply_procement__05 from "../../Assets/images/supply_procement__05.jpg";

const SupplyChain = () => {
  const textItems = [
    "your technogically-advanced procurement partner for the modern day energy industry.",
    "Milaya: our fully integrated online procurement system with a 60,000-product client catalogue.",
    "your virtual procurement team, applying strategic thinking to your purchasing.",
    "A unique trading hub that realises savings if you’re looking to sell stock - or buy.",
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
      <div className="supply-container">
        <div className="supply-content">
          <div className="supply-text-carousel">
            <div className="supply-carousel-text-container">
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
      <div>
        {/* Section one */}
        <div className="supply-wrapper">
          <div className="supply-left-container">
            <h1>Smart Procurement</h1>
            <p>
              At Milaya Energy, we transcend the traditional role of a
              procurement function extension. We collaborate closely with our
              clients to establish a unified, efficient process that adds
              significant value.
            </p>

            <p>
              By seamlessly integrating our systems with yours, we create a
              streamlined procurement environment that covers the entire
              process, from ordering and sourcing to monitoring and delivery.
            </p>
            <p>
              Our adaptability enables us to integrate with any client system,
              accommodating your unique working style. Milaya Energy leads the
              industry in applying advanced procurement systems to enhance
              efficiency and excellence in your procurement processes.
            </p>
          </div>
          <div className="supply-right-container">
            <img src={supply_project__01} alt="supply image here" />
          </div>
        </div>

        {/* section Second */}
        <div className="supply-wrapper supply-wrapper-2">
          <div className="supply-right-container">
            <img src={supply_refinery_02} alt="supply image here" />
          </div>
          <div className="supply-left-container">
            <h1>Dedicated In-House Support </h1>
            <p>
              Milaya Energy offers a unique opportunity to harness our wealth of
              knowledge and experience in-house, adding significant value while
              optimizing costs within your procurement function.
            </p>

            <p>
              Our approach involves embedding one of our skilled procurement
              professionals directly within your organization, ensuring a
              seamless integration that yields immediate advantages.
            </p>

            <p>
              This dedicated service model has a demonstrated track record of
              success with prominent clients throughout our history.
              Furthermore, its flexibility ensures that we can provide in-house
              support for as long as you require. At Milaya Energy, we're
              committed to delivering tailored solutions that meet your specific
              needs.
            </p>
          </div>
        </div>

        {/* Section Third */}
        <div className="supply-wrapper">
          <div className="supply-left-container">
            <h1>Project Management </h1>
            <p>
              At Milaya Energy, our expertise lies in the seamless transition of
              your capital investments into fully operational assets.
            </p>
            <p>
              We have a distinguished history of delivering 'first fill'
              projects, furnishing new vessels or fixed installations with
              everything necessary to initiate operations successfully.
            </p>
            <p>
              From specialized equipment and we play a crucial role in
              transforming your investments into a fully functional and
              operational end product
            </p>
          </div>

          <div className="supply-right-container">
            <img src={supply_house__03} alt="supply image here" />
          </div>
        </div>

        {/* section four */}
        <div className="supply-wrapper supply-wrapper-2">
          <div className="supply-right-container">
            <img src={supply_shutdown__04} alt="supply image here" />
          </div>
          <div className="supply-left-container">
            <h1>Refineries </h1>
            <p>
              At Milaya Energy, we provide all-encompassing procurement services
              to refineries worldwide. Our client portfolio includes some of the
              world's largest players in the Middle East, Europe, and the United
              States.
            </p>

            <p>
              Our commitment to downstream support is founded on the imperative
              need for swift execution in an industry where the speed of
              delivery is of utmost significance.
            </p>
          </div>
        </div>

        {/* Section Fifth */}
        <div className="supply-wrapper">
          <div className="supply-left-container">
            <h1>Shutdown/Turnaround </h1>
            <p>
              At Milaya Energy, we are well-prepared to be your procurement
              partner for shutdowns and turnarounds, whether offshore or
              onshore.
            </p>
            <p>
              Our support encompasses the entire process, from strategic
              planning to long-lead sourcing, ensuring a well-coordinated and
              efficient operation.
            </p>
            <p>
              During critical phases of program execution, just before and
              during the process, you can rely on us to uphold efficiency,
              minimize downtime, and keep your production on track.
            </p>
          </div>

          <div className="supply-right-container">
            <img src={supply_procement__05} alt="supply image here" />
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}
    </>
  );
};

export default SupplyChain;
