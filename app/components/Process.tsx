import Image from "next/image";

export default function Process() {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="icon">
                    <span>
                      <Image
                        className="brush"
                        src="/brushes/process/1.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <Image
                        className="svg"
                        src="/svg/process/target.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </span>
                  </div>
                  <div className="title">
                    <h3>Pixel Perfect</h3>
                  </div>
                  <div className="text">
                    <p>
                      Most common methods for designing websites that work well
                      on desktop is responsive and adaptive design.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="icon">
                    <span>
                      <Image
                        className="brush"
                        src="/brushes/process/2.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <Image
                        className="svg"
                        src="/svg/process/brush.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </span>
                  </div>
                  <div className="title">
                    <h3>High Quality</h3>
                  </div>
                  <div className="text">
                    <p>
                      Most common methods for designing websites that work well
                      on desktop is responsive and adaptive design.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="icon">
                    <span>
                      <Image
                        className="brush"
                        src="/brushes/process/3.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                      <Image
                        className="svg"
                        src="/svg/process/energy.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </span>
                  </div>
                  <div className="title">
                    <h3>Awesome Idea</h3>
                  </div>
                  <div className="text">
                    <p>
                      Most common methods for designing websites that work well
                      on desktop is responsive and adaptive design.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dizme_tm_process {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          padding: 100px 0px;
          background-color: #f8f8f8;
        }

        .list {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
        }

        .list ul {
          margin: 0px;
          list-style-type: none;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .list ul li {
          width: 30%;
          padding-left: 30px;
        }

        .list ul li:first-child {
          padding-left: 0px;
        }

        .list_inner {
          width: 100%;
          height: auto;
          clear: both;
          float: left;
          text-align: center;
          padding: 40px 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .list_inner:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .icon {
          margin-bottom: 25px;
          position: relative;
        }

        .icon span {
          position: relative;
          display: inline-block;
        }

        .icon .brush {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.1;
        }

        .icon .svg {
          position: relative;
          z-index: 2;
          color: #8067f0;
        }

        .title {
          margin-bottom: 15px;
        }

        .title h3 {
          font-size: 24px;
          color: #000;
          font-weight: 600;
        }

        .text p {
          font-size: 16px;
          line-height: 1.6;
          color: #6f6b80;
        }

        @media (max-width: 1040px) {
          .list ul {
            margin: 0px;
            flex-direction: column;
          }

          .list ul li {
            width: 100%;
            padding-left: 0px;
            margin-bottom: 30px;
          }

          .list ul li:last-child {
            margin-bottom: 0px;
          }
        }
      `}</style>
    </div>
  );
}
