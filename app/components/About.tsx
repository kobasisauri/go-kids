"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const animateCounter = (
      setter: (value: number) => void,
      target: number,
      duration: number
    ) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(setYearsCount, 18, 2000);
          animateCounter(setProjectsCount, 9, 2000);
          observer.disconnect();
        }
      });
    });

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <Image
                  src="/about/1.jpg"
                  alt="About"
                  width={400}
                  height={500}
                />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>{yearsCount}</h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>{projectsCount}K</h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>I&apos;m a Designer</span>
                <h3>I Can Design Anything You Want</h3>
              </div>
              <div className="text">
                <p>
                  Hello there! I&apos;m a web designer, and I&apos;m very
                  passionate and dedicated to my work. With 20 years experience
                  as a professional web developer, I have acquired the skills
                  and knowledge necessary to make your project a success. I
                  enjoy every step of the design process, from discussion and
                  collaboration.
                </p>
              </div>
              <div className="dizme_tm_button">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1">
          <Image src="/brushes/about/1.png" alt="" width={150} height={150} />
        </div>
        <div className="brush_2">
          <Image src="/brushes/about/2.png" alt="" width={150} height={150} />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_about {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px;
          position: relative;
        }

        .wrapper {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .left {
          width: 45%;
          padding-right: 50px;
        }

        .left .image {
          position: relative;
          display: inline-block;
        }

        .left .image img {
          border-radius: 20px;
          max-width: 100%;
          height: auto;
        }

        .numbers {
          position: absolute;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .numbers.year {
          top: 50px;
          left: -50px;
        }

        .numbers.project {
          bottom: 50px;
          right: -50px;
        }

        .numbers .wrapper {
          padding: 30px 35px 26px 30px;
          text-align: center;
        }

        .numbers .wrapper h3 {
          font-size: 60px;
          color: #8067f0;
          margin-bottom: 5px;
          font-weight: 700;
        }

        .numbers.project h3 {
          color: #1cbe59;
        }

        .numbers .wrapper .name {
          font-size: 16px;
          color: #6f6b80;
          font-weight: 500;
          font-family: "Jost", sans-serif;
        }

        .right {
          width: 50%;
          padding-left: 50px;
        }

        .right .title {
          margin-bottom: 25px;
        }

        .right .title span {
          color: #8067f0;
          font-size: 24px;
          font-weight: 500;
          font-family: "Jost", sans-serif;
          margin-bottom: 11px;
          display: block;
        }

        .right .title h3 {
          font-size: 45px;
          line-height: 1.3;
          max-width: 80%;
        }

        .right .text {
          margin-bottom: 35px;
        }

        .right .text p {
          font-size: 16px;
          line-height: 1.7;
          color: #6f6b80;
        }

        .brush_1 {
          position: absolute;
          top: 50px;
          left: 80px;
          z-index: -1;
          opacity: 0.5;
        }

        .brush_2 {
          position: absolute;
          bottom: 0px;
          right: 150px;
          z-index: -1;
          opacity: 0.5;
        }

        @media (max-width: 1040px) {
          .wrapper {
            flex-direction: column;
            text-align: center;
          }

          .left {
            width: 100%;
            padding-right: 0;
            margin-bottom: 40px;
          }

          .left .image img {
            max-width: 300px;
            max-height: 300px;
          }

          .right {
            width: 100%;
            padding-left: 0;
          }

          .right .title span {
            font-size: 20px;
          }

          .right .title h3 {
            font-size: 35px;
            max-width: 100%;
          }

          .numbers {
            position: relative;
          }

          .numbers.year {
            top: auto;
            left: auto;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .numbers.project {
            bottom: auto;
            right: auto;
            margin-bottom: 30px;
          }

          .numbers .wrapper h3 {
            font-size: 45px;
          }

          .brush_1,
          .brush_2 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
