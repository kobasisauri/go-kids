"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <Image src="/logo.png" alt="Logo" width={100} height={60} />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                isOpen ? "is-active" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("portfolio");
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("service");
                }}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("blog");
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li className="download_cv">
              <a href="/cv.pdf" download>
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_mobile_menu {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          background-color: #fff;
        }

        .mobile_menu_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          border-bottom: 1px solid #eee;
        }

        .mobile_in {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          max-width: 100px;
          max-height: 60px;
        }

        .trigger {
          cursor: pointer;
        }

        .hamburger {
          padding: 15px 15px;
          display: inline-block;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
        }

        .hamburger-box {
          width: 40px;
          height: 24px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px;
        }

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 40px;
          height: 4px;
          background-color: #000;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        .hamburger-inner::before,
        .hamburger-inner::after {
          content: "";
          display: block;
        }

        .hamburger-inner::before {
          top: -10px;
        }

        .hamburger-inner::after {
          bottom: -10px;
        }

        .hamburger--slider .hamburger-inner {
          top: 2px;
        }

        .hamburger--slider .hamburger-inner::before {
          top: 10px;
          transition-property: transform, opacity;
          transition-timing-function: ease;
          transition-duration: 0.15s;
        }

        .hamburger--slider .hamburger-inner::after {
          top: 20px;
        }

        .hamburger--slider.is-active .hamburger-inner {
          transform: translate3d(0, 10px, 0) rotate(45deg);
        }

        .hamburger--slider.is-active .hamburger-inner::before {
          transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
          opacity: 0;
        }

        .hamburger--slider.is-active .hamburger-inner::after {
          transform: translate3d(0, -20px, 0) rotate(-90deg);
        }

        .dropdown {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: none;
          background-color: #fff;
        }

        .dropdown.open {
          display: block;
        }

        .dropdown_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 0px 20px 20px 20px;
        }

        .dropdown_inner ul {
          margin: 0px;
          list-style-type: none;
        }

        .dropdown_inner ul li {
          margin: 0px 0px 5px 0px;
          width: 100%;
          border-bottom: 1px solid #eee;
          padding-bottom: 8px;
        }

        .dropdown_inner ul li a {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          font-family: "Jost", sans-serif;
          transition: all 0.3s ease;
          display: block;
          padding: 5px 0px;
        }

        .dropdown_inner ul li.current a {
          color: #8067f0;
        }

        .dropdown_inner ul li a:hover {
          color: #8067f0;
        }

        .download_cv a {
          background-color: #8067f0;
          color: #fff !important;
          padding: 10px 20px;
          border-radius: 50px;
          text-align: center;
          margin-top: 10px;
        }

        @media (max-width: 1040px) {
          .dizme_tm_mobile_menu {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
