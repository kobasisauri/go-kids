"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>

          <div className="contact_inner">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="icon orangeBackground">
                      <i className="icon-location orangeText">📍</i>
                    </div>
                    <div className="short">
                      <h3>Address</h3>
                      <span>20, Somewhere in world</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon greenBackground">
                      <i className="icon-mail-1 greenText">✉️</i>
                    </div>
                    <div className="short">
                      <h3>Email</h3>
                      <span>
                        <a href="mailto:hello@dizme.com">hello@dizme.com</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="icon purpleBackground">
                      <i className="icon-phone purpleText">📞</i>
                    </div>
                    <div className="short">
                      <h3>Phone</h3>
                      <span>+123 456 7890</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="right">
              <div className="fields">
                <form onSubmit={handleSubmit} className="contact_form">
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="dizme_tm_button">
                    <button type="submit">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="brush_2">
              <Image
                src="/brushes/contact/2.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="dizme_tm_map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="375"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="brush_1">
          <Image src="/brushes/contact/1.png" alt="" width={150} height={150} />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_contact {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px;
          position: relative;
        }

        .contact_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: 70px;
          margin-bottom: 120px;
          position: relative;
        }

        .left {
          width: 35%;
          padding-right: 50px;
        }

        .left ul {
          margin: 0;
          list-style-type: none;
        }

        .left ul li {
          margin-bottom: 40px;
        }

        .left ul li:last-child {
          margin-bottom: 0;
        }

        .list_inner {
          display: flex;
          align-items: center;
        }

        .icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          font-size: 24px;
        }

        .short h3 {
          font-size: 20px;
          margin-bottom: 5px;
          color: #000;
        }

        .short span {
          color: #6f6b80;
          font-size: 16px;
        }

        .short a {
          color: #6f6b80;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .short a:hover {
          color: #8067f0;
        }

        .right {
          width: 60%;
          padding-left: 50px;
        }

        .input_list {
          margin-bottom: 30px;
        }

        .input_list ul {
          margin: 0px -10px;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
        }

        .input_list ul li {
          width: 50%;
          padding: 0px 10px;
          margin-bottom: 20px;
        }

        .contact_form input,
        .contact_form textarea {
          width: 100%;
          border: 1px solid #e0e0e0;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
          background-color: #fff;
        }

        .contact_form input:focus,
        .contact_form textarea:focus {
          border-color: #8067f0;
          box-shadow: 0 0 10px rgba(128, 103, 240, 0.1);
        }

        .message_area {
          margin-bottom: 30px;
        }

        .message_area textarea {
          height: 150px;
          resize: vertical;
        }

        .dizme_tm_button button {
          background-color: transparent;
          border: 2px solid #000;
          color: #000;
          padding: 10px 40px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Jost", sans-serif;
          position: relative;
          overflow: hidden;
        }

        .dizme_tm_button button:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #000;
          transition: all 0.3s ease;
          border-radius: 50px;
        }

        .dizme_tm_button button:hover:before {
          width: 100%;
        }

        .dizme_tm_button button:hover span {
          color: #fff;
        }

        .dizme_tm_button span {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .dizme_tm_map {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .mapouter {
          position: relative;
          text-align: right;
          height: 375px;
          width: 100%;
        }

        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 375px;
          width: 100%;
          border-radius: 10px;
        }

        .brush_1 {
          position: absolute;
          top: 50px;
          left: 50px;
          z-index: -1;
          opacity: 0.3;
        }

        .brush_2 {
          position: absolute;
          bottom: 50px;
          right: -50px;
          z-index: -1;
          opacity: 0.3;
        }

        @media (max-width: 1040px) {
          .contact_inner {
            flex-direction: column;
            align-items: baseline;
          }

          .left {
            width: 100%;
            padding-right: 0;
            margin-bottom: 40px;
          }

          .right {
            width: 100%;
            padding-left: 0;
          }

          .short h3 {
            font-size: 18px;
          }

          .brush_1,
          .brush_2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .input_list ul {
            margin: 0px;
          }

          .input_list ul li {
            width: 100%;
            padding-left: 0px;
          }

          .list_inner {
            flex-direction: column;
            text-align: center;
          }

          .icon {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}
