import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "How to create mobile-optimized",
    category: "Web Design",
    date: { day: "07", month: "Jan" },
    image: "/news/1.jpg",
    excerpt:
      "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites.",
  },
  {
    id: 2,
    title: "How to create a portfolio",
    category: "Branding",
    date: { day: "21", month: "Dec" },
    image: "/news/2.jpg",
    excerpt:
      "In today's digital world, your website is the first interaction consumers have with your business.",
  },
  {
    id: 3,
    title: "How designers and developers can collaborate better",
    category: "Social Media",
    date: { day: "23", month: "Dec" },
    image: "/news/3.jpg",
    excerpt:
      "That's why more companies are not only reevaluating their website's design but also partnering with agencies.",
  },
];

export default function News() {
  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>News</span>
            <h3>Latest Blog</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>

          <div className="news_list">
            <ul>
              {newsItems.map((item) => (
                <li key={item.id}>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                      />
                      <div className="main"></div>
                      <div className="date">
                        <h3>{item.date.day}</h3>
                        <span>{item.date.month}</span>
                      </div>
                      <a href="#" onClick={(e) => e.preventDefault()}></a>
                    </div>
                    <div className="details">
                      <span className="category">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {item.category}
                        </a>
                      </span>
                      <h3 className="title">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {item.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="brush_1">
          <Image src="/brushes/news/1.png" alt="" width={150} height={150} />
        </div>
        <div className="brush_2">
          <Image src="/brushes/news/2.png" alt="" width={150} height={150} />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_news {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px 90px 0px;
          position: relative;
        }

        .news_list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .news_list ul {
          margin: 0px -15px;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
        }

        .news_list ul li {
          width: 33.333%;
          float: left;
          padding: 0px 15px;
          margin-bottom: 30px;
        }

        .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .list_inner:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .image {
          position: relative;
          overflow: hidden;
        }

        .image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .image .main {
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

        .image:hover .main {
          opacity: 1;
        }

        .image:hover img {
          transform: scale(1.1);
        }

        .date {
          position: absolute;
          top: 20px;
          left: 20px;
          background-color: #fff;
          padding: 15px 20px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .date h3 {
          font-size: 24px;
          color: #8067f0;
          margin-bottom: 2px;
          font-weight: 700;
        }

        .date span {
          font-size: 14px;
          color: #6f6b80;
          font-weight: 500;
        }

        .details {
          padding: 30px;
        }

        .details .category a {
          color: #8067f0;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .details .title {
          margin-top: 10px;
        }

        .details .title a {
          color: #000;
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4;
          transition: all 0.3s ease;
          display: block;
        }

        .details .title a:hover {
          color: #8067f0;
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
          right: 100px;
          z-index: -1;
          opacity: 0.3;
        }

        @media (max-width: 1040px) {
          .news_list ul li {
            width: 50%;
          }

          .brush_1,
          .brush_2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .news_list ul {
            margin: 0px;
          }

          .news_list ul li {
            width: 100%;
            padding-left: 0px;
          }

          .details {
            padding: 20px;
          }

          .details .title a {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
