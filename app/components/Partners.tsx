import Image from "next/image";

const partners = [
  { id: 1, name: "Partner 1", logo: "/partners/1.png" },
  { id: 2, name: "Partner 2", logo: "/partners/2.png" },
  { id: 3, name: "Partner 3", logo: "/partners/3.png" },
  { id: 4, name: "Partner 4", logo: "/partners/4.png" },
  { id: 5, name: "Partner 5", logo: "/partners/5.png" },
  { id: 6, name: "Partner 6", logo: "/partners/6.png" },
  { id: 7, name: "Partner 7", logo: "/partners/7.png" },
  { id: 8, name: "Partner 8", logo: "/partners/8.png" },
];

export default function Partners() {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {partners.map((partner) => (
                <li key={partner.id}>
                  <div className="list_inner">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="brush_1">
          <Image
            src="/brushes/partners/1.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_partners {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 120px 0px;
          position: relative;
        }

        .partners_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 40px 0px;
        }

        .partners_inner ul {
          margin: 0px;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }

        .partners_inner ul li {
          width: auto;
          display: inline-block;
          margin: 20px 0px;
        }

        .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          text-align: center;
          padding: 0px 20px;
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        .list_inner:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .list_inner img {
          max-width: 120px;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .list_inner:hover img {
          filter: grayscale(0%);
        }

        .brush_1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          opacity: 0.1;
        }

        @media (max-width: 1040px) {
          .brush_1 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .partners_inner ul li {
            width: 50%;
            margin: 10px 0px;
          }

          .list_inner {
            padding: 0px 10px;
          }

          .list_inner img {
            max-width: 100px;
            max-height: 50px;
          }
        }
      `}</style>
    </div>
  );
}
