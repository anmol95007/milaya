import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactPage from "../../Styles/ContactPage.css";
import contact_banner from "../../Assets/images/contact_banner.jpg";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string(),
    subject: Yup.string(),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema,
    //   onSubmit: (values) => {
    //     // Here, you can submit the form data to your server or perform any other actions.
    //     // You can access the form values via the 'values' parameter.
    //     console.log(values);
    //     // Add your form submission logic here.
    //   },
    // });
    // Add your validation schema here
    onSubmit: async (values, { resetForm }) => {
      try {
        // Make an HTTP POST request to your server
        await axios.post("http://localhost:3001/submit-form", values);

        // Handle successful form submission, e.g., show a success message
        alert("Form submitted successfully");

        // Optionally, you can reset the form after submission
        resetForm();
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <>
      {/* Contact Us Banner Section */}
      <div className="contact-us-banner">
        <section className="ban_sec">
          {/* <div className="container"> */}
          <div className="ban_img">
            <img src={contact_banner} alt="contact image banner" />
            <div className="ban_text">
              <strong>
                <span>Contact With Us</span>
              </strong>
              {/* <p>

                It is a long established fact that a reader <br />
                will be distracted by the readable content
              </p> */}
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
      {/* Contact Us Banner Section */}

      {/* Contact us form Section code start from here */}
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <ApartmentIcon
                      style={{ color: "white", fontSize: "3rem" }}
                    />
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>178 street</span>
                    <span>Al Qusais Industrial Area 3</span>
                    <span>Dubai - United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <ContactMailIcon
                      style={{ color: "white", fontSize: "3rem" }}
                    />
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span> info@milayaenergy.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <ScheduleIcon
                      style={{ color: "white", fontSize: "3rem" }}
                    />
                  </div>
                  <div className="contact-info-text">
                    <h2>office time</h2>
                    <span>Mon - Fri 8:00 am - 5.00 pm</span>
                    {/* <span>Thu - Mon 10.00 pm - 5.00 pm</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form">
                <h2>Get in Touch With US</h2>
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error">{formik.errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          required
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error">{formik.errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.subject}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                        ></textarea>
                        {formik.touched.message && formik.errors.message ? (
                          <div className="error">{formik.errors.message}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <button type="submit">Send Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.135663377414!2d55.3870863!3d25.2996457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db017079b37%3A0x2c4199b02f6451dd!2sMilaya%20Energy%20Oilfield%20%26%20Natural%20Gas!5e0!3m2!1sen!2sin!4v1696528207982!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us form Section code end from here */}
    </>
  );
};

export default Contact;
