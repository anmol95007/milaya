import React from "react";
import Footercss from "../../Styles/Footer.css";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <>
      <footer class="padding_4x">
        <div class="flex">
          <section class="flex-content padding_1x">
            <h3>Platform</h3>
            <a href="#">Project Manegement</a>
            <a href="#">Asset Manegement</a>
            <a href="#">Drilling Services</a>
            <a href="#">Integrate Sports</a>
            <a href="#">Oil fields Supplies</a>
          </section>
          <section class="flex-content padding_1x">
            <h3>Quick Links</h3>
            <a href="#">Procurement</a>
            <a href="#">Global Reach</a>
            <a href="#">Supply Chail</a>
            <a href="#">About US</a>
            <a href="#">Ecobuy</a>
            <a href="#">Contact US</a>
          </section>
          <section class="flex-content padding_1x">
            <h3>Features</h3>
            <a href="#">Jobs</a>
            <a href="#">Brand Assets</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Service</a>
          </section>
          <section class="flex-content padding_1x">
            <h3>Resources</h3>
            <a href="#">Guides</a>
            <a href="#">Research</a>
            <a href="#">Experts</a>
            <a href="#">Agencies</a>
          </section>
          <section class="flex-content padding_1x">
            <h3>Address</h3>
            <p>
              {" "}
              <ApartmentOutlinedIcon style={{ color: "#aa5a29" }} /> 178 street
              - Al Qusais Industrial Area 3 - Dubai - United Arab Emirates
            </p>
            <p>
              {" "}
              <CallIcon style={{ color: "#aa5a29" }} />
              +971 43213224
            </p>
            <p>
              {" "}
              <LocalPostOfficeOutlinedIcon style={{ color: "#aa5a29" }} />{" "}
              info@milayaenergy.com
            </p>
            <fieldset class="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button class="btn btn_2">Subscribe</button>
            </fieldset>
          </section>
        </div>
        <div class="flex">
          <section class="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved || Milaya Energy</p>
          </section>
          <section class="flex-content padding_1x">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
