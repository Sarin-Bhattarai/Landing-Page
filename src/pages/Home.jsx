import React from "react";
import "../utils/css/home.css";
import Launch from "../utils/assets/zookilaunch.png";

const Home = () => {
  return (
    <section
      id="header"
      className="d-flex align-items-center"
      style={{
        background: "#001529",
      }}
    >
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div
                className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column"
                id="main-div"
              >
                <h1
                  className="text-white fw-normal home-2-title display-4 mb-0"
                  id="tag-h1"
                >
                  Make Your Marketing Real.
                </h1>
                <h2 className="my-5 text-light" id="tag-h2">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis at suscipit laboriosam nisi ut aliquid a commodi
                  consequatur Quis autem.
                </h2>
                <div className="mt-3">
                  <a href="/#" className="home-btn">
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-2 order-lg-2 header-img">
                <img
                  src={Launch}
                  style={{ marginTop: "17%" }}
                  className="img-fluid"
                  alt="home-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
