"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Smith",
    role: "CEO, Company",
    image: "/testimonials/1.jpg",
    text: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!",
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Designer, Studio",
    image: "/testimonials/2.jpg",
    text: "Amazing design quality and awesome support. The team is very professional and helpful. Highly recommended!",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Developer, Agency",
    image: "/testimonials/3.jpg",
    text: "Great experience working with this team. They delivered exactly what we needed on time and within budget.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="container">
          <div className="list_wrapper">
            <div className="total">
              <div className="in">
                <div className="icon">
                  <Image
                    className="svg"
                    src="/svg/testimonials/quote.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="text">
                  <p>{currentTestimonial.text}</p>
                </div>
                <div className="short">
                  <div className="image">
                    <div className="main">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                  <div className="detail">
                    <h3>{currentTestimonial.name}</h3>
                    <span>{currentTestimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="navigation">
              <button onClick={prevTestimonial} className="nav-btn prev">
                ‹
              </button>
              <div className="dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="nav-btn next">
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="brush_1">
          <Image
            src="/brushes/testimonials/1.png"
            alt=""
            width={150}
            height={150}
          />
        </div>

        <div className="left_details">
          <div className="det_image one">
            <Image src="/testimonials/4.jpg" alt="" width={60} height={60} />
          </div>
          <div className="det_image two">
            <Image src="/testimonials/5.jpg" alt="" width={60} height={60} />
          </div>
          <div className="det_image three">
            <Image src="/testimonials/6.jpg" alt="" width={60} height={60} />
          </div>
          <div className="circle green"></div>
          <div className="circle yellow"></div>
          <div className="border"></div>
        </div>

        <div className="right_details">
          <div className="det_image one">
            <Image src="/testimonials/7.jpg" alt="" width={60} height={60} />
          </div>
          <div className="det_image two">
            <Image src="/testimonials/1.jpg" alt="" width={60} height={60} />
          </div>
          <div className="det_image three">
            <Image src="/testimonials/2.jpg" alt="" width={60} height={60} />
          </div>
          <div className="circle yellow"></div>
          <div className="circle purple"></div>
          <div className="border"></div>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_testimonials {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px;
          background-color: #f8f8f8;
          position: relative;
        }

        .list_wrapper {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          text-align: center;
          margin-top: 70px;
        }

        .total {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .in {
          max-width: 700px;
          width: 100%;
          text-align: center;
        }

        .icon {
          margin-bottom: 30px;
        }

        .icon .svg {
          color: #8067f0;
        }

        .text {
          margin-bottom: 40px;
        }

        .text p {
          font-size: 22px;
          line-height: 1.6;
          color: #000;
          font-style: italic;
          font-weight: 400;
        }

        .short {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .short .image {
          margin-right: 20px;
        }

        .short .image .main {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
        }

        .short .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail h3 {
          font-size: 20px;
          margin-bottom: 5px;
          color: #000;
        }

        .detail span {
          color: #6f6b80;
          font-size: 16px;
        }

        .navigation {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #8067f0;
          cursor: pointer;
          padding: 10px;
          margin: 0 20px;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          color: #000;
        }

        .dots {
          display: flex;
          align-items: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #e0e0e0;
          border: none;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background-color: #8067f0;
        }

        .brush_1 {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          opacity: 0.3;
        }

        .left_details,
        .right_details {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .left_details {
          left: 50px;
        }

        .right_details {
          right: 50px;
        }

        .det_image {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #fff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .left_details .det_image.one {
          top: 0px;
          left: 0px;
        }

        .left_details .det_image.two {
          top: 50px;
          left: 80px;
        }

        .left_details .det_image.three {
          top: 100px;
          left: 160px;
        }

        .right_details .det_image.one {
          top: 0px;
          right: 0px;
        }

        .right_details .det_image.two {
          top: 50px;
          right: 80px;
        }

        .right_details .det_image.three {
          top: 100px;
          right: 160px;
        }

        .det_image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .circle.green {
          background-color: #1cbe59;
        }

        .circle.yellow {
          background-color: #f0c45c;
        }

        .circle.purple {
          background-color: #8067f0;
        }

        .left_details .circle.green {
          top: -20px;
          left: 50px;
        }

        .left_details .circle.yellow {
          bottom: -20px;
          left: 100px;
        }

        .right_details .circle.yellow {
          top: -20px;
          right: 50px;
        }

        .right_details .circle.purple {
          bottom: -20px;
          right: 100px;
        }

        .border {
          position: absolute;
          width: 200px;
          height: 1px;
          background-color: #e0e0e0;
        }

        .left_details .border {
          top: 50%;
          left: 200px;
        }

        .right_details .border {
          top: 50%;
          right: 200px;
        }

        @media (max-width: 1040px) {
          .left_details,
          .right_details,
          .brush_1 {
            display: none;
          }

          .text p {
            font-size: 20px;
          }

          .detail h3 {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .in {
            padding: 0px 20px;
          }

          .text p {
            font-size: 18px;
          }

          .short {
            flex-direction: column;
          }

          .short .image {
            margin-right: 0;
            margin-bottom: 15px;
          }

          .navigation {
            margin-top: 30px;
          }
        }
      `}</style>
    </div>
  );
}
