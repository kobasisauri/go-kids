"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const skills = [
  { name: "Photoshop", percentage: 95 },
  { name: "Figma", percentage: 80 },
  { name: "Illustrator", percentage: 90 },
  { name: "Wordpress", percentage: 85 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dizme_tm_section" id="skills">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="dodo_progress">
                {skills.map((skill, index) => (
                  <div key={index} className="progress_inner">
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.percentage}%</span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className={`bar_in ${isVisible ? "open" : ""}`}
                          style={{
                            width: isVisible ? `${skill.percentage}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <Image
                src="/skills/1.jpg"
                alt="Skills"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_skills {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px;
          background-color: #f8f8f8;
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
          width: 50%;
          padding-right: 50px;
        }

        .dodo_progress {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .progress_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          margin-bottom: 40px;
        }

        .progress_inner:last-child {
          margin-bottom: 0px;
        }

        .progress_inner .label {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 500;
          color: #000;
          font-family: "Jost", sans-serif;
        }

        .progress_inner .number {
          position: absolute;
          top: -35px;
          right: 0px;
          font-size: 14px;
          font-weight: 600;
          color: #8067f0;
          font-family: "Jost", sans-serif;
        }

        .progress_inner .background {
          width: 100%;
          height: 6px;
          background-color: #e0e0e0;
          border-radius: 3px;
          position: relative;
        }

        .progress_inner .background .bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: #8067f0;
          border-radius: 3px;
        }

        .progress_inner .background .bar_in {
          width: 0%;
          height: 100%;
          background-color: #8067f0;
          border-radius: 3px;
          transition: width 2s ease;
        }

        .progress_inner .background .bar.open {
          animation: wow 2s ease forwards;
        }

        @keyframes wow {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .right {
          width: 45%;
          padding-left: 50px;
        }

        .right img {
          border-radius: 20px;
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 1040px) {
          .wrapper {
            flex-direction: column;
            align-items: baseline;
          }

          .left {
            width: 100%;
            padding-right: 0;
            margin-bottom: 50px;
          }

          .right {
            width: 100%;
            padding-left: 0;
          }

          .right img {
            max-width: 300px;
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
