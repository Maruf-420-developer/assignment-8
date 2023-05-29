import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width-2">
        <h2 className="title-4">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in touch</div>
            <p>
              If you have question, please feel free to fill out contact form or
              drop me an email. I am always open to discussing new projects,
              creative ideas or opportunities to be part of your visions.
            </p>
            <div className="icons">
              <div className="row">
                <i className="bx bxs-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">MD Maruf</div>
                </div>
              </div>
              <div className="row">
                <i className="bx bx-map"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="row">
                <i className="bx bx-mail-send"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">mostufabinmaruf@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Enter your Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Enter your Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="textarea">
                <textarea
                  className="text-areaa"
                  cols="30"
                  rows="10"
                  placeholder="Enter your describe"
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
