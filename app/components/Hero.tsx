import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div className="background"></div>
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">Hello, I&apos;m</h3>
              </div>
              <div className="name">
                <h3>James Smith</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">Creative Designer</span> From{" "}
                  <span className="purpleText">New York</span>
                </p>
              </div>
              <div className="text">
                <p>
                  I&apos;m creative designer based in New York, and I&apos;m
                  very passionate and dedicated to my work.
                </p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-facebook-1"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-twitter-1"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-linkedin-1"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar"
                  width={400}
                  height={400}
                />
                <span className="skills illustrator">
                  <Image
                    src="/skills/illustrator.svg"
                    alt="Illustrator"
                    width={30}
                    height={30}
                  />
                </span>
                <span className="skills photoshop">
                  <Image
                    src="/skills/photoshop.svg"
                    alt="Photoshop"
                    width={30}
                    height={30}
                  />
                </span>
                <span className="skills figma">
                  <Image
                    src="/skills/figma.svg"
                    alt="Figma"
                    width={30}
                    height={30}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{ fill: "none", stroke: "#000", strokeWidth: "20px" }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{ fill: "none", stroke: "#000", strokeWidth: "20px" }}
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding-top: 120px;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/hero-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.1;
        }

        .content {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .details {
          width: 50%;
          padding-right: 50px;
        }

        .hello h3 {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .name {
          margin-bottom: 15px;
        }

        .name h3 {
          font-size: 70px;
          line-height: 1.2;
        }

        .job {
          margin-bottom: 25px;
        }

        .job p {
          font-size: 22px;
          line-height: 1.4;
        }

        .text {
          margin-bottom: 35px;
        }

        .text p {
          font-size: 18px;
          line-height: 1.6;
        }

        .button {
          display: flex;
          align-items: center;
        }

        .social {
          margin-left: 30px;
        }

        .social ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
        }

        .social ul li {
          margin-right: 15px;
        }

        .social ul li:last-child {
          margin-right: 0;
        }

        .social ul li a {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #666;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social ul li a:hover {
          background-color: #8067f0;
          color: #fff;
        }

        .avatar {
          width: 50%;
          display: flex;
          justify-content: center;
        }

        .image {
          position: relative;
          display: inline-block;
        }

        .image img {
          border-radius: 20px;
          max-width: 100%;
          height: auto;
        }

        .skills {
          position: absolute;
          width: 60px;
          height: 60px;
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          animation: float 3s ease-in-out infinite;
        }

        .skills.illustrator {
          top: 50px;
          left: -30px;
          animation-delay: 0s;
        }

        .skills.photoshop {
          top: 20px;
          right: -30px;
          animation-delay: 1s;
        }

        .skills.figma {
          bottom: 30px;
          left: 50px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .dizme_tm_down {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }

        .dizme_tm_down a {
          display: block;
          color: #000;
          text-decoration: none;
        }

        .dizme_tm_down svg {
          width: 26px;
          height: 50px;
        }

        .dizme_tm_down svg #wheel {
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% {
            opacity: 0;
          }
          10% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }

        @media (max-width: 1040px) {
          .content {
            flex-direction: column-reverse;
            justify-content: center;
          }

          .avatar {
            width: auto;
            margin-bottom: 30px;
          }

          .avatar img {
            max-width: 300px;
            max-height: 300px;
          }

          .skills {
            display: none;
          }

          .details {
            width: 100%;
            padding-right: 0;
            text-align: center;
          }

          .button {
            justify-content: center;
          }

          .name h3 {
            font-size: 55px;
          }

          .job p {
            font-size: 20px;
          }

          .text p {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .avatar img {
            max-width: 220px;
            max-height: 220px;
          }

          .name h3 {
            font-size: 42px;
          }

          .hello h3 {
            font-size: 21px;
          }

          .job p {
            font-size: 18px;
          }

          .text p {
            font-size: 16px;
          }

          .social {
            margin-left: 15px;
          }
        }
      `}</style>
    </div>
  );
}
