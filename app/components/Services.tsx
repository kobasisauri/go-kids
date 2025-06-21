import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Web Design",
    price: "$250",
    icon: "/svg/service/web.svg",
    description:
      "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    price: "$340",
    icon: "/svg/service/contact.svg",
    description:
      "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices.",
  },
  {
    id: 3,
    title: "Mobile App",
    price: "$480",
    icon: "/svg/service/physics.svg",
    description:
      "Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
  },
  {
    id: 4,
    title: "Photography",
    price: "$220",
    icon: "/svg/service/anchor.svg",
    description:
      "Photography is the art, application and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor.",
  },
];

export default function Services() {
  return (
    <div className="dizme_tm_section" id="service">
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>

          <div className="service_list">
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <div className="list_inner">
                    <div className="icon">
                      <Image
                        className="svg"
                        src={service.icon}
                        alt=""
                        width={60}
                        height={60}
                      />
                      <div className="back orangeBackground"></div>
                    </div>
                    <div className="wrapper">
                      <div className="title">
                        <h3>{service.title}</h3>
                      </div>
                      <div className="price">
                        <span>{service.price}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="brush_1">
          <Image src="/brushes/service/1.png" alt="" width={150} height={150} />
        </div>
        <div className="brush_2">
          <Image src="/brushes/service/2.png" alt="" width={150} height={150} />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_services {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px 90px 0px;
          position: relative;
        }

        .service_list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .service_list ul {
          margin: 0px -15px;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
        }

        .service_list ul li {
          width: 50%;
          float: left;
          padding: 0px 15px;
          margin-bottom: 30px;
        }

        .service_list ul li .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          background-color: #fff;
          padding: 50px 40px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .service_list ul li .list_inner:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .service_list .icon {
          width: 80px;
          height: 80px;
          position: relative;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service_list .icon .svg {
          position: relative;
          z-index: 2;
          color: #8067f0;
        }

        .service_list .icon .back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0.1;
        }

        .service_list .wrapper {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .service_list .wrapper h3 {
          font-size: 24px;
          font-weight: 600;
          color: #000;
        }

        .service_list .price {
          font-size: 18px;
          color: #8067f0;
          font-weight: 600;
          font-family: "Jost", sans-serif;
        }

        .service_list .price span {
          font-size: 20px;
        }

        .service_list .text p {
          font-size: 16px;
          line-height: 1.6;
          color: #6f6b80;
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
          right: 50px;
          z-index: -1;
          opacity: 0.3;
        }

        @media (max-width: 1040px) {
          .service_list ul {
            margin: 0px;
          }

          .service_list ul li {
            width: 100%;
            padding-left: 0px;
          }

          .brush_1,
          .brush_2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .service_list .icon {
            display: none;
          }

          .service_list ul li .list_inner {
            padding: 40px 20px;
          }

          .service_list .wrapper h3 {
            font-size: 22px;
          }

          .service_list .price {
            font-size: 16px;
          }

          .service_list .price span {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
