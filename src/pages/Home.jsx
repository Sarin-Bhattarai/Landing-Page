import React from "react";
import "../utils/css/home.css";
import Launch from "../utils/assets/zookilaunch.png";

const Home = () => {
  return (
    <>
      <section
        id="header"
        style={{
          background: "#001529",
        }}
      >
        <div className="container">
          <div className="row my-5">
            <div
              className="col-12 col-sm-6  order-1 order-lg-1 col-md-6 m-auto"
              id="main-div"
            >
              <div className="border-0 my-3">
                <h1 id="tag-h1" className="text-light">
                  Make Your
                  <br /> Marketing Real.
                </h1>
                <p className="text-light" id="tag-h2">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis at suscipit laboriosam nisi ut aliquid a commodi
                  consequatur Quis autem
                </p>
                <div className="mt-4">
                  <a href="/#" className="home-btn">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
            {/* col ends */}
            <div className="col-12 col-sm-6 order-2 order-lg-2 col-md-6 m-auto">
              <div className="my-3">
                <img
                  className="img-fluid"
                  src={Launch}
                  style={{ marginTop: "17%" }}
                  alt="home pic"
                />
              </div>
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}
        </div>
        {/* container ends */}
      </section>
    </>
  );
};
export default Home;
