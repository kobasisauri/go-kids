"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Mockup Shape",
    category: "youtube",
    image: "/portfolio/1.jpg",
    type: "video",
  },
  {
    id: 2,
    title: "Ave Bottle",
    category: "vimeo",
    image: "/portfolio/2.jpg",
    type: "video",
  },
  {
    id: 3,
    title: "Magic Art",
    category: "soundcloud",
    image: "/portfolio/3.jpg",
    type: "audio",
  },
  {
    id: 4,
    title: "Blue Lemon",
    category: "popup",
    image: "/portfolio/5.jpg",
    type: "image",
  },
  {
    id: 5,
    title: "Art Stone",
    category: "popup",
    image: "/portfolio/4.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "Global Evolution",
    category: "detail",
    image: "/portfolio/6.jpg",
    type: "detail",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "*") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === filter)
      );
    }
  };

  return (
    <div className="dizme_tm_section" id="portfolio">
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>

          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  href="#"
                  className={activeFilter === "*" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("*");
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeFilter === "youtube" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("youtube");
                  }}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeFilter === "vimeo" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("vimeo");
                  }}
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeFilter === "soundcloud" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("soundcloud");
                  }}
                >
                  Soundcloud
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeFilter === "popup" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("popup");
                  }}
                >
                  Popup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeFilter === "detail" ? "current" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilter("detail");
                  }}
                >
                  Detail
                </a>
              </li>
            </ul>
          </div>

          <div className="portfolio_list">
            <ul className="gallery_zoom grid">
              {filteredItems.map((item) => (
                <li key={item.id} className={`${item.category} grid-item`}>
                  <div className="inner">
                    <div className="entry">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                        />
                        <div className="main"></div>
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{item.title}</h3>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="brush_1">
          <Image
            src="/brushes/portfolio/1.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="brush_2">
          <Image
            src="/brushes/portfolio/2.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_portfolio {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px 90px 0px;
          position: relative;
        }

        .portfolio_filter {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          text-align: center;
          margin-bottom: 70px;
        }

        .portfolio_filter ul {
          margin: 0px;
          list-style-type: none;
          display: inline-block;
        }

        .portfolio_filter ul li {
          margin: 0px 25px 0px 0px;
          display: inline-block;
        }

        .portfolio_filter ul li:last-child {
          margin-right: 0px;
        }

        .portfolio_filter ul li a {
          text-decoration: none;
          color: #6f6b80;
          font-size: 18px;
          font-weight: 500;
          font-family: "Jost", sans-serif;
          display: inline-block;
          padding: 8px 20px;
          border-radius: 50px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .portfolio_filter ul li a.current {
          color: #fff;
          background-color: #8067f0;
        }

        .portfolio_filter ul li a:hover {
          color: #fff;
          background-color: #8067f0;
        }

        .portfolio_list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .portfolio_list ul {
          margin: 0px -15px;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
        }

        .portfolio_list ul li {
          width: 33.333%;
          float: left;
          padding: 0px 15px;
          margin-bottom: 30px;
        }

        .portfolio_list ul li .inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }

        .portfolio_list .entry {
          position: relative;
          overflow: hidden;
        }

        .portfolio_list .inner img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .portfolio_list .main {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(128, 103, 240, 0.8);
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio_list ul li .inner:hover .main {
          opacity: 1;
        }

        .portfolio_list ul li .inner:hover img {
          transform: scale(1.1);
        }

        .mobile_title {
          display: none;
          padding: 20px;
          text-align: center;
          background-color: #fff;
        }

        .mobile_title h3 {
          font-size: 20px;
          margin-bottom: 5px;
        }

        .mobile_title span {
          color: #8067f0;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 500;
        }

        .brush_1 {
          position: absolute;
          top: 50px;
          left: 100px;
          z-index: -1;
          opacity: 0.3;
        }

        .brush_2 {
          position: absolute;
          bottom: 50px;
          right: 50px;
          z-index: -1;
          opacity: 0.3;
        }

        @media (max-width: 1040px) {
          .portfolio_list ul li {
            width: 50%;
          }

          .brush_1,
          .brush_2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .portfolio_list ul {
            margin: 0px;
          }

          .portfolio_list ul li {
            width: 100%;
            padding-left: 0px;
          }

          .mobile_title {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
