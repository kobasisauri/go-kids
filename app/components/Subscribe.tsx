"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_subscribe">
        <div className="container">
          <div className="inner">
            <div className="background">
              <div className="dots"></div>
              <div className="overlay"></div>
            </div>
            <div className="content">
              <div className="left">
                <span className="subtitle">Subscribe Now</span>
                <h3 className="title">Get My Newsletter</h3>
                <p className="text">
                  Get latest news, updates, tips and tricks in your inbox
                </p>
              </div>
              <div className="right">
                <form onSubmit={handleSubmit} className="field">
                  <input
                    type="email"
                    placeholder="Your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Send Now" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_subscribe {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 0px;
        }

        .inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .background .dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/subscribe/dots.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .background .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(128, 103, 240, 0.9);
        }

        .content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 50px;
        }

        .left {
          width: 50%;
          padding-right: 50px;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          font-weight: 500;
          font-family: "Jost", sans-serif;
          margin-bottom: 10px;
          display: block;
        }

        .title {
          color: #fff;
          font-size: 40px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.6;
        }

        .right {
          width: 50%;
          padding-left: 50px;
        }

        .field {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 50px;
          padding: 5px;
        }

        .field input[type="email"] {
          flex: 1;
          border: none;
          outline: none;
          padding: 15px 25px;
          font-size: 16px;
          background: transparent;
          color: #000;
        }

        .field input[type="email"]::placeholder {
          color: #999;
        }

        .field input[type="submit"] {
          background-color: #8067f0;
          color: #fff;
          border: none;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Jost", sans-serif;
        }

        .field input[type="submit"]:hover {
          background-color: #000;
        }

        @media (max-width: 1040px) {
          .content {
            flex-direction: column;
            align-items: baseline;
            padding: 60px 30px;
          }

          .left {
            width: 100%;
            padding-right: 0;
            margin-bottom: 40px;
            text-align: center;
          }

          .right {
            width: 100%;
            padding-left: 0;
          }

          .title {
            font-size: 35px;
          }

          .subtitle {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .content {
            padding: 40px 20px;
          }

          .title {
            font-size: 28px;
          }

          .field {
            flex-direction: column;
            padding: 10px;
          }

          .field input[type="email"] {
            width: 100%;
            margin-bottom: 10px;
            border-radius: 50px;
            background-color: #f8f8f8;
          }

          .field input[type="submit"] {
            width: 100%;
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
}
