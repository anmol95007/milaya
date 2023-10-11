import React, { useState, useEffect } from "react";
import EcobuyPage from "../../Styles/EcobuyPage.css";
import ecobuy_Recycle_01 from "../../Assets/images/ecobuy_Recycle_01.jpg";
import ecobuy_Recycle_02 from "../../Assets/images/ecobuy_Recycle_02.jpg";
import ecobuy_recycle_05 from "../../Assets/images/ecobuy_Recycle_05.webp";
import ecobuy_Recycle_03 from "../../Assets/images/ecobuy_Recycle_03.webp";
import ecobuy_Recycle_04 from "../../Assets/images/ecobuy_Recycle_04.jpg";

const Ecobuy = () => {
  return (
    <>
      {/* Banner Section code start from here */}
      <div className="ecobuy-container">
        <div className="ecobuy-content">
          <div className="ecobuy-text-carousel">
            <h1> Responsible for sustainable Procurement</h1>
            <h1> Delivering more using less</h1>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      {/* Banner Section code start from here */}

      {/* Banner Image-Text Section code start from here */}
      <div>
        {/* Section one */}
        <div className="ecobuy-wrapper">
          <div className="ecobuy-left-container">
            <h1>Reuse, Reduce and Recycle </h1>
            <p>
              At Milaya Energy, we have led the way in revolutionizing smart
              procurement practices within the oil and gas industry. With our
              highly skilled international team and unparalleled access to
              manufacturers and vendors worldwide, we've developed systems that
              optimize procurement, reducing waste and inefficiencies.
            </p>

            <p>
              Now, it's time to turn our attention to a pressing issue.
              Sustainability and environmental responsibility have become top
              priorities for client businesses, industry bodies, governments,
              and consumers. The focus on environmental concerns is expected to
              intensify in the coming years, and at Milaya Energy, we fully
              embrace and support this important cause
            </p>
          </div>
          <div className="ecobuy-right-container">
            <img src={ecobuy_recycle_05} alt="global image here" />
          </div>
        </div>

        {/* section Second */}
        <div className="ecobuy-wrapper ecobuy-wrapper-2">
          <div className="ecobuy-right-container">
            <img src={ecobuy_Recycle_02} alt="global image here" />
          </div>
          <div className="ecobuy-left-container">
            <h1>Sustainable Future</h1>
            <p>
              At Milaya Energy, we're fortunate to have the ability to make a
              positive impact. We're adapting our working methods and embracing
              more sustainable choices wherever feasible. Within our own
              operations, we're actively reducing our carbon footprint and
              minimizing waste across our offices, facilities, vehicles, and
              work routines. Furthermore, we understand that we can leverage our
              influence by encouraging our partners, suppliers, and clients to
              join us in these efforts.
            </p>

            <p>
              Annually, we procure millions of items, ranging from major pieces
              of engineering equipment to smaller MRO items, covering both
              upstream and downstream sectors and more. We're proactively
              collaborating with suppliers to ensure they uphold their
              environmental responsibilities, and we're partnering with industry
              leaders to provide sustainable product alternatives. This
              initiative, known as EcoBuy, is a fundamental component of our
              present and future business strategy."
            </p>
          </div>
        </div>

        {/* Section Third */}
        <div className="ecobuy-wrapper">
          <div className="ecobuy-left-container">
            <h1>Energy Surplus </h1>
            <p>
              At Milaya Energy, we are deeply committed to helping our customers
              embrace sustainable practices. An excellent illustration of this
              commitment is our EnergySurplus service, which aids businesses
              worldwide in the purchase and sale of surplus materials and
              equipment. This not only contributes to waste reduction and
              resource conservation but also empowers our customers to unlock
              the value associated with surplus stock, optimizing their resource
              utilization.
            </p>
          </div>
          <div className="ecobuy-right-container">
            <img src={ecobuy_Recycle_03} alt="global image here" />
          </div>
        </div>

        {/* section four */}
        <div className="ecobuy-wrapper ecobuy-wrapper-2">
          <div className="ecobuy-right-container">
            <img src={ecobuy_Recycle_04} alt="global image here" />
          </div>
          <div className="ecobuy-left-container">
            <h1>Circular Economy</h1>
            <p>
              At Milaya Energy, we are dedicated to embracing the principles of
              a circular economy, where resources are optimally utilized to
              maximize value while minimizing waste. We actively seek
              partnerships with businesses that share our commitment, both as
              suppliers and customers, to collectively make significant strides
              toward sustainable progress.
            </p>

            <p>
              Our goal is to achieve greater efficiency while reducing resource
              consumption, which not only benefits our business but also
              contributes to environmental preservation. It's a strategy that
              aligns with both business interests and environmental
              responsibility, reflecting our commitment to a better future.
            </p>
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}
    </>
  );
};

export default Ecobuy;
