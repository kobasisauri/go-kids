"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`dizme_tm_header ${isScrolled ? "animate" : ""}`}>
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <Image src="/logo.png" alt="Logo" width={120} height={80} />
            </a>
          </div>
          <div className="menu">
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
      </div>

      <style jsx>{`
        .dizme_tm_header {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 20px 0px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          transition: all 0.3s ease;
        }

        .dizme_tm_header.animate {
          padding: 15px 0px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        }

        .dizme_tm_header .inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dizme_tm_header .logo img {
          max-width: 120px;
          max-height: 80px;
        }

        .dizme_tm_header .menu ul {
          margin: 0px;
          list-style-type: none;
          display: flex;
          align-items: center;
        }

        .dizme_tm_header .menu ul li {
          margin-right: 40px;
          display: inline-block;
        }

        .dizme_tm_header .menu ul li:last-child {
          margin-right: 0px;
        }

        .dizme_tm_header .menu ul li.current a {
          color: #8067f0;
        }

        .dizme_tm_header .menu ul li a:hover {
          color: #8067f0;
        }

        .dizme_tm_header .menu ul li a {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          font-family: "Jost", sans-serif;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .dizme_tm_header .download_cv {
          position: relative;
        }

        .dizme_tm_header .download_cv a {
          color: #fff !important;
          background-color: #8067f0;
          padding: 8px 30px 7px 30px;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .dizme_tm_header .download_cv span {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .dizme_tm_header .download_cv a:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #000;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .dizme_tm_header .download_cv a:hover:before {
          width: 100%;
        }

        .dizme_tm_header .download_cv a:hover span {
          color: #fff;
        }

        @media (max-width: 1040px) {
          .dizme_tm_header {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
